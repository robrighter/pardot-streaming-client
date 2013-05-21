

function Notifier(){
	var listeners = {};
	this.addListener = function(filter, handler, id){
		if(!id){
			id = getListenerId();
		}
		listeners[id] = {
			filter: filter,
			handler: handler
		};
		return id;
	};

	this.removeListener = function(listenerId){
		var ret = null;
		if(listeners.hasOwnProperty(listenerId)){
			ret = listeners[listenerId];
			delete listeners[listenerId];
		}
		return ret;
	};

	this.processMessage = function(message){
		var key;
		for(key in listeners){
			if(listeners[key].filter(message)){
				listeners[key].handler(message);
			}
		}
	};

	this.test = {
		listeners: listeners
	};

}

var incrementor = 0;
function getListenerId(){
	var prefix = 'NLS'+(incrementor++)+'-';
	return prefix+(new Date()).getTime();
}

module.exports = Notifier;


