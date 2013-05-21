var WebSocketClient = require('websocket').client;

var defaults = {
	pushApiServer: 'push.pardot.com',
	delayBeforeReconnect: 3000,
	requestLoginCredentialsCB: null,
	loginSuccessCB: null,
	loginFailedCB: null,
	serverDisconnectCB: null,
	serverConnectCB: null,
	processPushNotification: null,
	displayConsoleMessage: function(message){
		console.log(message);
	},
	autoLoginOnDisconnect: true,
	tlsOptions: {}
};

function setupWebSocket(domain, onSocketMessage, onSocketClose, onSocketOpen, options){
	options.displayConsoleMessage('Connecting to websocket server...', 'gray');
	var url = "wss://" + domain;
	var client = new WebSocketClient({tlsOptions: options.tlsOptions});
	client.on('connectFailed', function(error) {
    	console.log('Connect Error: ' + error.toString());
	});
	client.on('connectFailed', onSocketClose);
	client.on('connect', function(connection){
		onSocketOpen(connection);
		connection.on('error',function(e){
			options.displayConsoleMessage('ERROR:');
			options.displayConsoleMessage(e);
		});
		connection.on('message',function(message){
			onSocketMessage(message.utf8Data);	
		});
		connection.on('close', onSocketClose);
	});
	client.connect(url, 'pardot-real-time-api');
	return client;
}

function PushApi(options, ready){
	var that = this;
	var credentials = {
		email: null,
		password: null
	};
	//merge given options with the defaults
	options = getDefaults(options, defaults);
	this.login = function(email, password){
		credentials.email = email;
		credentials.password = password;
		authenticateWebSocket(credentials, that.websocket);
	};
	var client = setupWebSocket(
		options.pushApiServer,
		makeOnMessageCallback(options),
		makeOnCloseCallback(options,that,credentials),
		makeOnOpenCallback(options, that),
		options);
	client.on('connect', function(connection){
		that.websocket = connection;
		ready(connection);
	});
}

function makeOnOpenCallback(options,that, credentials){
	return function(){
		runCallbackIfPresent(options,'serverConnectCB',[],that);
		if(credentials && options.autoLoginOnDisconnect){
			that.login(credentials.email, credentials.password);
		}
	};
}

function makeOnMessageCallback(options){
	return function(message){
		processIncomingMessage(message,options);	
	};
}

function makeOnCloseCallback(options, apiInstance, credentials){
	return function(){
		processCloseConnection(options, apiInstance, credentials);
	};
}

function processCloseConnection(options, apiInstance, credentials){
	runCallbackIfPresent(options,'serverDisconnectCB');
	setTimeout(function(){
		apiInstance.websocket = setupWebSocket(
			options.pushApiServer,
			makeOnMessageCallback(options),
			makeOnCloseCallback(options,apiInstance,credentials),
			makeOnOpenCallback(options, apiInstance, credentials),
			options);
	},options.delayBeforeReconnect);	
}

function processIncomingMessage(message,options){
	recordMessageActivityTime();
	message = JSON.parse(message);
	if(message.hasOwnProperty('type')){
		switch(message.type){
			case 'authenticate':
				processAuthenticationMessage(message,options);
				break;
			case 'VisitorActivity':
				runCallbackIfPresent(options,'processPushNotification',[message]);
				break;
			case 'VisitorPageView':
				runCallbackIfPresent(options,'processPushNotification',[message]);
				break;
			default:
				options.displayConsoleMessage('Recieved Unknown Message Type:');
				options.displayConsoleMessage(message);
				break;
		}
	}
}

function authenticateWebSocket(credentials, socket){
	var message = {
		type: 'authenticate',
		credentials: credentials
	};
	socket.send(JSON.stringify(message));
}

function processAuthenticationMessage(message,options){
	if(message.hasOwnProperty('error')){
		runCallbackIfPresent(options,'loginFailedCB',[message.error]);
	}
	else if(message.hasOwnProperty('data')){
		runCallbackIfPresent(options,'loginSuccessCB',[message.data]);
		//now we blank out the loginSuccessCB because we wont want to call it ever again
		//on the automatic reconnects. If the user wants to do a controlled login
		//again they should kill this connection and make a new one.
		options.loginSuccessCB = function(){};
	}
}

function runCallbackIfPresent(options, name, params, that){
	if(options.hasOwnProperty(name) && (typeof options[name] === 'function')){
		options[name].apply(that, params);
	}
}

function getDefaults(obj) {
	each([].slice.call(arguments, 1), function(source) {
		if (source) {
			for (var prop in source) {
				if (obj[prop] == null) obj[prop] = source[prop];
			}
		}
	});
	return obj;
}

var lastMessageActivityTimestamp = null;
function recordMessageActivityTime(){
	lastMessageActivityTimestamp = getCurrentTimeInSeconds(); 
}

function getCurrentTimeInSeconds(){
	return ~~((+(new Date()))/1000);
}

function each(arr, cb){
	var i;
	for(i=0;i<arr.length;i++){
		cb(arr[i]);
	}
}

module.exports = PushApi;
