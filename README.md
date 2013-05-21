Pardot Streaming Client
===================
This project provides a node.js client and helper functions for using Pardot's streaming api.

Install
===================

To install the client, use npm:

	npm install pardot-streaming-client



PushApi
=========

The PushApi is the main client class that is used to subscibe to pardot data streams.

Simple Example Application:

	var PardotClient = require('pardot-streaming-client');
	var psh = new PardotClient.PushApi({
			delayBeforeReconnect: 10,
			processPushNotification: function(message){
				console.log(message);
			}
		}, function(){
		psh.login("user@email.com","mypassword");	
	});


The constructor takes an options object. Available options are:

- autoLoginOnDisconnect: Enables auto-reconnect and login if a connection is lost. Default value = true.
- delayBeforeReconnect: Delay (in milliseconds) before automatic reconnect if the connection is lost.
- requestLoginCredentialsCB: Callback for notification of incorrect username and password.
- loginSuccessCB: Callback that notifies that authentiation was successful.
- loginFailedCB: Callback that notifies that authentiation failed.
- serverDisconnectCB: Callback that notifies that the connection was lost.
- serverConnectCB: Callback that notifies a successful connection. (But not yet authenticated)
- processPushNotification: Callback that gets run every time data is recieved from the stream. This callback should have a single parameter that is the incomming data.
- displayConsoleMessage: Function for displaying to console (for debug messages),


MessageInspector
==================
The message inspector provides a number of static helper functions that allow you to better extract data from incomming messages. The list of messageInspector functions are:

- hasProspect
- isAnonymousVisitor
- hasVisitor
- isPageView
- isEmail
- isEmailOpenActivity
- isEmailClickActivity
- isLandingPageActivity
- isFileActivity
- isFormActivity
- isFormViewActivity
- isFormSuccessfulSubmitActivity
- isFormFailedSubmitActivity
- isCampaignOfName
- getCampaignName
- isOpportunityActivity
- isActivityOfState
- getActivityState
- getActivityNameAndDetails
- isActivityOfName
- isVisitorActivity
- hasHydratedProperty
- decorateNameAndCompanyFromProspect
- decorateNameAndCompanyFromVisitor
- getActivityType
- isProspectWithCrmUrl
- isEmailSentActivity
- isEmailTrackerActivity
- isEmailUnsubscribeActivity
- isWebinarActivity
- isPaidSearchClickActivity
- isVisitorActivityWithIdentifiedCompany
- isIdentifiedCompanyWithoutProspectActivity
- isSiteSearchActivity
- isCountryMatch
- isCountryGroupMatch
- isStateMatch
- isWhoisCountryMatch
- isWhoisCountryGroupMatch
- isWhoisStateMatch
- isVisitorActivityWithWhoisCountry
- isVisitorActivityWithWhoisState
- getPreviousActivities
- isStarred
- isFilteredActivity
- isActivityOfProspectAssignedToUser
- isActivityOfProspectAssignedToCurrentUser

Example Usage in your processPushNotification callback:

		function processPushNotification(message){
			if(MessageInspector.isEmailSentActivity(message)){
				//This notification is associated with a prospect being sent an email
			}
		} 


Filtered Notifier
==================

The filtered notifier object is a helper object that allows you to split a single data stream into multiple notification streams that are filtered by a filter function.

Example usage in conjunction with the MessageInspector:

		var PardotClient = require('pardot-streaming-client');
		var notifier = new PardotClient.FilteredNotifier();

		//Setup 2 Streams of notification, 1 for Landing pages, 1 for forms
		notifier.addListener(PardotClient.MessageInspector.isLandingPageActivity, function(message){
			//This function is called every time an event happens with a landing page
		});

		notifier.addListener(PardotClient.MessageInspector.isFormActivity, function(message){
			//This function is called every time an event happens with a form
		});



