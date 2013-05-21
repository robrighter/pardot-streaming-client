
var locationTools = require('./location-tools');

function hasProspect(message){
	return hasHydratedProperty('Prospect', message);		
}

function isAnonymousVisitor(message){
	return (!hasProspect(message));
}

function hasVisitor(message){
	return hasHydratedProperty('Visitor', message);		
}

function isFilteredActivity(message){
	if(isVisitorActivity(message)){
		if(message.data.hasOwnProperty('IsFiltered') && message.data.IsFiltered){
			return true;
		}
	}
	return false;
}

function isPaidSearchClickActivity(message){
	if(hasHydratedProperty('Visitor',message)){
		if(message.data.Visitor.visitor_referrer && message.data.Visitor.visitor_referrer.type){
			if(message.data.Visitor.visitor_referrer.type === 'Paid Search'){
				return true;
			}
		}
	}
	return false;

}

function isProspectWithCrmUrl(message){
	if(hasProspect(message)){
		if(message.data.Prospect.hasOwnProperty('crm_url') && message.data.Prospect.crm_url){
			return true;
		}
	}
	return false;
}

function isStarred(message){
	if(hasProspect(message)){
		if(message.data.Prospect.is_starred){
			return true;
		}
	}
	return false;
}

function isPageView(message){
	if(isActivityOfName('Visit', message) && isActivityOfState('Visit', message)){
		return true;
	}
	if(isActivityOfName('Page View', message)){
		return true;
	}
	if(isActivityOfName('Visit', message) && isActivityOfState('Visitor', message)){
		return true;
	}
	if(isActivityOfName('Visit', message) && isActivityOfState('View', message)){
		return true;
	}
	if(isActivityOfName('Visit', message) && message.isHistory){
		return true;
	}
	return false;
}

function isEmail(message){
	if(message.data.hasOwnProperty('EmailId') && (message.data.EmailId > 0)){
		return true;
	}
	return false;
}

function isEmailSentActivity(message){
	return (isEmail(message) && isActivityOfState('Sent', message));
}

function isEmailOpenActivity(message){
	if(isEmail(message)){
		return isActivityOfState('Open', message);
	}
	return false;
}

function isEmailClickActivity(message){
	if(isEmailTrackerActivity(message)){
		return true;
	}
	if(isEmail(message)){
		if(isActivityOfState('Click', message)){
			return true;
		}
	}
	return false;
}

function isEmailUnsubscribeActivity(message){
	if(isEmail(message)){
		return isActivityOfState('Unsubscribed', message);
	}
	return false;
}

function isEmailTrackerActivity(message){
	return (isVisitorActivity(message) && isActivityOfName('Email Tracker', message));
}

function isLandingPageActivity(message){
	if(isActivityOfName('Landing Page', message)){
		return true;
	}
	if(isVisitorActivity(message) && hasNonNullProperty('LandingPageId',message)){
		return true;
	}
	return false;
}

function isWebinarActivity(message){
	if(isVisitorActivity(message) && isActivityOfName('Webinar', message)){
		return true;
	}
	return false;
}

function isFileActivity(message){
	return isActivityOfName('File', message);
}

function isCustomRedirectActivity(message){
	return (isVisitorActivity(message) && isActivityOfName('Custom Redirect', message));
}

function isSiteSearchActivity(message){
	if(isVisitorActivity(message)){
		if(isActivityOfName('Site Search Query', message) || message.data.SiteSearchQueryId){
			return true;
		}
	}
	return false;
}

function isFormActivity(message){
	if(isActivityOfName('Form', message)){
		return true;
	}
	if(isActivityOfName('Form Handler', message)){
		return true;
	}
	if(isVisitorActivity(message) && hasNonNullProperty('FormId',message)){
		return true;
	}
	return false;
}

function hasNonNullProperty(property, message){
	if(message.data[property]){
		return true;
	}
	else{
		return false;
	}
}

function isFormViewActivity(message){
	if(isFormActivity(message) && isActivityOfState('View', message)){
		return true;
	}
	return false;
}

function isFormSuccessfulSubmitActivity(message){
	if(isFormActivity(message) && isActivityOfState('Success', message)){
		return true;
	}
	return false;
}

function isFormFailedSubmitActivity(message){
	if(isFormActivity(message) && isActivityOfState('Error', message)){
		return true;
	}
	return false;
}

function isOpportunityActivity(message){
	if(isVisitorActivity(message) && message.data.OpportunityId){
		return true;
	}
	return false;
}

function isCampaignOfName(name, message){
	if(getCampaignName(message) === name){
		return true;
	}
	else{
		return false;
	}
}

function getCampaignName(message){
	if(message.data.hasOwnProperty('Campaign') && message.data.Campaign.hasOwnProperty('name')){
		return message.data.Campaign.name;
	}
	return false;
}

function isActivityOfState(state, message){
	if(isVisitorActivity(message)){
		if(getActivityState(message) === state){
		return true;
		}	
	}
	return false;
}

function getActivityState(message){
	if(isVisitorActivity(message)){
		if(message.data.hasOwnProperty('TypeName')){
			return message.data.TypeName;
		}
	}
	return false;
}

function getActivityNameAndDetails(message){
	var ret = {name: '', details: ''};
	if(isVisitorActivity(message)){
		if(message.data.hasOwnProperty('ActivityName')){
			ret.name = message.data.ActivityName;
		}
		if(message.data.hasOwnProperty('Details')){
			ret.details = message.data.Details;
			if(message.data.Details2){
				ret.details2 = message.data.Details2;
			}
		}

		if(isPaidSearchClickActivity(message)){
			ret.name = 'Paid Search';
			ret.details = 'Phrase: '+ message.data.Visitor.visitor_referrer.query;
		}
	}
	return ret;
}

function isActivityOfName(name, message){
	if(isVisitorActivity(message)){
		if(message.data.ActivityName && (message.data.ActivityName === name)){
			return true;
		}
	}
	return false;
}

function isVisitorActivity(message){
	if(message.type  && (message.type === 'VisitorActivity')){
		return true;
	}
	else {
		return false;
	}
}

function hasHydratedProperty(property, message){
	if(message.data.hasOwnProperty(property) && (message.data[property] !== null) ){
		return true;
	}
	else{
		return false;
	}	
}

function isVisitorActivityWithIdentifiedCompany(message){
	if(isVisitorActivity(message)){
		var visitor = message.data.Visitor;
		if(visitor && visitor.identified_company){
			if(visitor.identified_company.hasOwnProperty('name')){
				return true;
			}
		}
	}
	return false;
}

function isVisitorActivityWithWhois(message){
	if(isVisitorActivity(message)){
		var visitor = message.data.Visitor;
		if(visitor && visitor.identified_company){
			return true;
		}
	}
	return false;
}

function isVisitorActivityWithWhoisCountry(message){
	if(isVisitorActivityWithWhois(message)){
		if(message.data.Visitor.identified_company.country){
			return true;
		}
	}
	return false;
}

function isVisitorActivityWithWhoisState(message){
	if(isVisitorActivityWithWhois(message)){
		if(message.data.Visitor.identified_company.state){
			return true;
		}
	}
	return false;
}

function isWhoisStateMatch(value, message){
	if(isVisitorActivityWithWhoisState(message)){
		if(locationTools.lookUpStateByShortName(message.data.Visitor.identified_company.state) === value){
			return true;
		}
	}
	return false;
}

function isWhoisCountryMatch(value, message){
	if(isVisitorActivityWithWhoisCountry(message)){
		if(message.data.Visitor.identified_company.country === value){
			return true;
		}
	}
	return false;
}

function isWhoisCountryGroupMatch(value,message){
	var countryList = locationTools.getCountryList(value);
	var i;
	for(i=0; i<countryList.length; i++){
		if(isWhoisCountryMatch(countryList[i],message)){
			return true;
		}
	}
	return false;
}


function isProspectStateMatch(value, message){
	if(!hasProspect(message)){
		return false;
	}
	if(!message.data.Prospect.state || (message.data.Prospect.state === '')){
		return false;
	}
	var s = locationTools.lookupCannonicalState(message.data.Prospect.state);
	return s ? (s===value) : false;

}

function isProspectCountryMatch(value,message){
	if(!hasProspect(message)){
		return false;
	}
	if(!message.data.Prospect.country || (message.data.Prospect.country === '')){
		return false;
	}
	var c = locationTools.lookupCannonicalCountry(message.data.Prospect.country);
	return c ? (c===value) : false;
}

function isProspectCountryGroupMatch(value,message){
	if(!hasProspect(message)){
		return false;
	}
	var countryList = locationTools.getCountryList(value);
	var i;
	for(i=0; i<countryList.length; i++){
		if(isProspectCountryMatch(countryList[i],message)){
			return true;
		}
	}
	return false;	
}


function isStateMatch(value, message){
	return isProspectStateMatch(value,message) ? true : isWhoisStateMatch(value, message);
}

function isCountryMatch(value,message){
	return isProspectCountryMatch(value,message) ? true : isWhoisCountryMatch(value,message);
}

function isCountryGroupMatch(value,message){
	return isProspectCountryGroupMatch(value,message) ?  true : isWhoisCountryGroupMatch(value, message);
}

function isIdentifiedCompanyWithoutProspectActivity(message){
	return (isAnonymousVisitor(message) && isVisitorActivityWithIdentifiedCompany(message));
}

function decorateNameAndCompanyFromProspect(props, message){
	//fill in defaults with the Visitor info First (if possible)
	props = decorateNameAndCompanyFromVisitor(props,message);
	if(hasProspect(message)){
		var prospect = message.data.Prospect;
		props.name = prospect.last_name;
		if(!props.name){
			props.name = prospect.email;
		}
		else {
			if(prospect.first_name){
				props.name = prospect.first_name + ' ' + props.name;	
			}
		}
		if(prospect.company){
			props.company = prospect.company;
		}
	}
	return props;
}

function decorateNameAndCompanyFromVisitor(props, message){
	if(hasVisitor(message)){
		//do nothing
		var visitor = message.data.Visitor;

		//try to pull company name from whois info if available
		props.name = 'Anonymous Visitor';
		props.company = visitor.hostname;
		if( visitor.hasOwnProperty('identified_company') &&
			(visitor.identified_company !== null) &&
			visitor.identified_company.hasOwnProperty('name')){
			props.name = visitor.identified_company.name;
			if(visitor.identified_company.country){
				props.company = visitor.identified_company.country;
			}
			if(visitor.identified_company.state){
				props.company = visitor.identified_company.state +' '+props.company;
			}
			if(visitor.identified_company.city){
				props.company = visitor.identified_company.city +', '+props.company;	
			}
		}
	}
	return props;
}

function isActivityOfProspectAssignedToUser(userId, message){
	if( isVisitorActivity(message) &&
		hasProspect(message)){
			var assignedUserId = '';
			//the history rest call has a slightly different format from the push api
			if(message.data.Prospect.assigned_to && message.data.Prospect.assigned_to.user){
				assignedUserId = '' + message.data.Prospect.assigned_to.user.id;
			}
			else if(message.data.Prospect.hasOwnProperty('assigned_to_user')){
				assignedUserId = '' + message.data.Prospect.assigned_to_user;
			}
			return assignedUserId === userId;
			
	}
	return false;
}

function isVideoActivity(message){
	if(isVisitorActivity(message)){
		if(isActivityOfName('Video View', message) || isActivityOfState('Video', message)){
			return true;
		}
	}
	return false;
}

function getActivityType(message){
	if(isEmailOpenActivity(message)){
		return 'Email Open';
	}
	if(isEmailClickActivity(message)){
		return 'Email Click';
	}
	if(isEmailSentActivity(message)){
		return 'Email Sent';
	}
	if(isEmailUnsubscribeActivity(message)){
		return 'Email Unsubscribed';
	}
	if(isPaidSearchClickActivity(message)){
		return 'Paid Search';
	}
	if(isSiteSearchActivity(message)){
		return 'Site Search';
	}
	if(isCustomRedirectActivity(message)){
		return 'Custom Redirect';
	}
	if(isLandingPageActivity(message)){
		return 'Landing Page';
	}
	if(isFileActivity(message)){
		return 'File';
	}
	if(isWebinarActivity(message)){
		return 'Webinar';
	}
	if(isFormSuccessfulSubmitActivity(message)){
		return 'Form Submit';
	}
	if(isFormFailedSubmitActivity(message)){
		return 'Form Error';
	}
	if(isFormActivity(message)){
		return 'Form';
	}
	if(isVideoActivity(message)){
		return 'Video View';
	}
	if(isPageView(message)){
		return 'Visit';
	}
	return 'Other';

}

function getPreviousActivities(message){
	if(hasVisitor(message) && message.data.Visitor && message.data.Visitor.visitor_activities && message.data.Visitor.visitor_activities.visitor_activity){
		if(message.data.Visitor.visitor_activities.visitor_activity instanceof Array){
			return message.data.Visitor.visitor_activities.visitor_activity;
		}
		else{
			return [message.data.Visitor.visitor_activities.visitor_activity];
		}
	}
	return [];
}



	module.exports =  {
		hasProspect: hasProspect,
		isAnonymousVisitor: isAnonymousVisitor,
		hasVisitor: hasVisitor,
		isPageView: isPageView,
		isEmail: isEmail,
		isEmailOpenActivity: isEmailOpenActivity,
		isEmailClickActivity: isEmailClickActivity,
		isLandingPageActivity: isLandingPageActivity,
		isFileActivity: isFileActivity,
		isFormActivity: isFormActivity,
		isFormViewActivity: isFormViewActivity,
		isFormSuccessfulSubmitActivity: isFormSuccessfulSubmitActivity,
		isFormFailedSubmitActivity: isFormFailedSubmitActivity,
		isCampaignOfName: isCampaignOfName,
		getCampaignName: getCampaignName,
		isOpportunityActivity: isOpportunityActivity,
		isActivityOfState: isActivityOfState,
		getActivityState: getActivityState,
		getActivityNameAndDetails: getActivityNameAndDetails,
		isActivityOfName: isActivityOfName,
		isVisitorActivity: isVisitorActivity,
		hasHydratedProperty: hasHydratedProperty,
		decorateNameAndCompanyFromProspect: decorateNameAndCompanyFromProspect,
		decorateNameAndCompanyFromVisitor: decorateNameAndCompanyFromVisitor,
		getActivityType: getActivityType,
		isProspectWithCrmUrl: isProspectWithCrmUrl,
		isEmailSentActivity: isEmailSentActivity,
		isEmailTrackerActivity: isEmailTrackerActivity,
		isEmailUnsubscribeActivity: isEmailUnsubscribeActivity,
		isWebinarActivity: isWebinarActivity,
		isPaidSearchClickActivity: isPaidSearchClickActivity,
		isVisitorActivityWithIdentifiedCompany: isVisitorActivityWithIdentifiedCompany,
		isIdentifiedCompanyWithoutProspectActivity: isIdentifiedCompanyWithoutProspectActivity,
		isSiteSearchActivity: isSiteSearchActivity,
		isCountryMatch: isCountryMatch,
		isCountryGroupMatch: isCountryGroupMatch,
		isStateMatch: isStateMatch,
		isWhoisCountryMatch: isWhoisCountryMatch,
		isWhoisCountryGroupMatch: isWhoisCountryGroupMatch,
		isWhoisStateMatch: isWhoisStateMatch,
		isVisitorActivityWithWhoisCountry: isVisitorActivityWithWhoisCountry,
		isVisitorActivityWithWhoisState: isVisitorActivityWithWhoisState,
		getPreviousActivities: getPreviousActivities,
		isStarred: isStarred,
		isFilteredActivity: isFilteredActivity,
		isActivityOfProspectAssignedToUser: isActivityOfProspectAssignedToUser,
		isActivityOfProspectAssignedToCurrentUser: isActivityOfProspectAssignedToUser //This is an alias name for this function so we can differenciate in future features
	};
