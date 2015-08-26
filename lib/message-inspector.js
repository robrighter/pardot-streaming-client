

function hasProspect(message){
	return hasHydratedProperty('prospect', message);
}

function isAnonymousVisitor(message){
	return (!hasProspect(message));
}

function hasVisitor(message){
	return hasHydratedProperty('visitor', message);
}

function isFilteredActivity(message){
	if(isVisitorActivity(message)){
		if(message.data.hasOwnProperty('IsFiltered')){
			if(message.data.IsFiltered === "0"){
				return false;
			}
			if(message.data.IsFiltered ){
				return true;
			}
		}
	}
	return false;
}

function isProspectWithCrmUrl(message){
	if(hasProspect(message)){
		if(message.action.prospect.crmLeadFid || message.action.prospect.crmContactFid){
			return true;
		}
	}
	return false;
}

function isStarred(message){
	if(hasProspect(message)){
		if(message.action.prospect.isStarred){
			return true;
		}
	}
	return false;
}

function isPageView(message){
	return (message.type === 'VisitorPageView' || isActivityOfType('Page View', message));
}

function isPaidSearchClickActivity(message){
	return isActivityOfType('Paid Search Ad', message);
}

function isEmailOpenActivity(message){
	return isActivityOfType('Email Open', message);
}

function isOneToOneEmailOpenActivity(message){
	if (isEmailOpenActivity(message)) {
		return (message.action.email && message.action.email.isOneToOne);
	}
	return false;
}

function isEmailClickActivity(message){
	return isActivityOfType('Email Click', message);
}

function isLandingPageActivity(message){
	if (isActivityOfType('Landing Page', message)){
		return true;
	}
	return false;
}

function isWebinarActivity(message){
	return isActivityOfType('Webinar', message);
}

function isFileActivity(message){
	return isActivityOfType('File', message);
}

function isCustomRedirectActivity(message){
	return isActivityOfType('Custom Redirect', message);
}

function isSiteSearchActivity(message){
	return isActivityOfType('Site Search Query', message);
}

function isFormViewActivity(message){
	if(isActivityOfType('Form', message)){
		return true;
	}
	if(isActivityOfType('Form Handler', message)){
		return true;
	}
	return false;
}

function isFormSuccessfulSubmitActivity(message){
	if(isActivityOfType('Form Success', message)){
		return true;
	}
	if(isActivityOfType('Form Handler Success', message)){
		return true;
	}
	if(isActivityOfType('Landing Page Success', message)){
		return true;
	}
	return false;
}

function isFormFailedSubmitActivity(message){
	if(isActivityOfType('Form Error', message)){
		return true;
	}
	if(isActivityOfType('Form Handler Error', message)){
		return true;
	}
	if(isActivityOfType('Landing Page Error', message)){
		return true;
	}
	return false;
}

function isVideoActivity(message){
	if(isActivityOfType('Video', message)){
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
	if(message.action.hasOwnProperty('campaign') && message.action.campaign.hasOwnProperty('name')){
		return message.action.campaign.name;
	}
	return false;
}

function isActivityOfType(state, message){
	if(isVisitorActivity(message)){
		if(getActivityState(message) === state){
		return true;
		}
	}
	return false;
}

function getActivityState(message){
	if(isVisitorActivity(message)){
		return message.action.type;
	}
	return false;
}

function getActivityNameAndDetails(message){
	var ret = {name: '', details: ''};
	ret.name = getActivityType(message);

	// Get primary details
	var details;
	switch (message.action.type) {
		case 'Email':
		case 'Email Open':
		case 'Email Click':
		case 'Email Unsubscribe':
		case 'Email Bounce':
		case 'Email Spam Complaint':
		case 'Email Preferences Open':
			details = message.action.email.subject;
			break;

		case 'Form':
		case 'Form Success':
		case 'Form Error':
			details = (message.action.form)? message.action.form.name: '';
			break;

		case 'Form Handler':
		case 'Form Handler Success':
		case 'Form Handler Error':
			details = message.action.formHandler.name;
			break;

		case 'File':
			details = message.action.file.name;
			break;

		case 'Landing Page':
		case 'Landing Page Success':
		case 'Landing Page Error':
		case 'Multivariate Landing Page':
		case 'Multivariate Landing Page Success':
		case 'Multivariate Landing Page Error':
			details = message.action.landingPage.name;
			break;

		case 'Site Search Query':
			details = message.action.siteSearchQuery.query;
			break;

		case 'Paid Search Ad':
			details = message.action.paidSearchAd.headline;
			break;

		case 'Page View':
			details = (message.action.pageView)? message.action.pageView.title: '';
			break;

		case 'Video':
			details = (message.action.video)? message.action.video.name: '';
			break;

		case 'Custom Redirect':
			details = message.action.customUrl.name;
			break;

		default:
			details = '';
			break;
	}
	// never return nothing
	if (!details || (details === '')) {
		details = 'Untitled';
	}
	ret.details = details;

	// Get secondary details
	if (message.action.type === 'Page View') {
		ret.details2 = message.action.pageView.url;
	}
	return ret;
}

function getProspectCrmUrl(message){
	return message.action.prospect.crmUrl;
}

function isVisitorActivity(message){
	if(message.type  && (message.type === 'VisitorActivity' || message.type === 'VisitorPageView')){
		return true;
	}
	else {
		return false;
	}
}

function hasHydratedProperty(property, message){
	if(message.action.hasOwnProperty(property) && (message.action[property] !== null) ){
		return true;
	}
	else{
		return false;
	}
}

function isVisitorActivityWithIdentifiedCompany(message){
	if(isVisitorActivity(message)){
		var visitor = message.action.visitor;
		var whois = message.action.whois;
		if(visitor && whois){
			if(whois.hasOwnProperty('company')){
				return true;
			}
		}
	}
	return false;
}

function isVisitorActivityWithWhois(message){
	if(isVisitorActivity(message)){
		var visitor = message.action.visitor;
		var whois = message.action.whois;
		return (visitor && whois);
	}
	return false;
}

function isVisitorActivityWithWhoisCountry(message){
	if(isVisitorActivityWithWhois(message)){
		if(message.action.whois.country){
			return true;
		}
	}
	return false;
}

function isVisitorActivityWithWhoisState(message){
	if(isVisitorActivityWithWhois(message)){
		if(message.action.whois.state){
			return true;
		}
	}
	return false;
}

function isWhoisStateMatch(value, message){
	if(isVisitorActivityWithWhoisState(message)){
		if(locationTools.lookUpStateByShortName(message.action.whois.state) === value){
			return true;
		}
	}
	return false;
}

function isWhoisCountryMatch(value, message){
	if(isVisitorActivityWithWhoisCountry(message)){
		if(message.action.whois.country === value){
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
	if(!message.action.prospect.state || (message.action.prospect.state === '')){
		return false;
	}
	var s = locationTools.lookupCannonicalState(message.action.prospect.state);
	return s ? (s===value) : false;

}

function isProspectCountryMatch(value,message){
	if(!hasProspect(message)){
		return false;
	}
	if(!message.action.prospect.country || (message.action.prospect.country === '')){
		return false;
	}
	var c = locationTools.lookupCannonicalCountry(message.action.prospect.country);
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
		var prospect = message.action.prospect;
		props.name = prospect.lastName;
		if(!props.name){
			props.name = prospect.email;
		}
		else {
			if(prospect.firstName){
				props.name = prospect.firstName + ' ' + props.name;
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
		//try to pull company name from whois info if available
		props.name = 'Anonymous Visitor';
		props.company = '';
		if (message.action.hasOwnProperty('whois')) {
			props.name = message.action.whois.company;
			props.company = message.action.whois.ipAddress;
			if(message.action.whois.country){
				props.company = message.action.whois.country;
			}
			if(message.action.whois.state){
				props.company = message.action.whois.state +' '+props.company;
			}
			if(message.action.whois.city){
				props.company = message.action.whois.city +', '+props.company;
			}
		}
	}
	return props;
}

function isActivityOfProspectAssignedToUser(userId, message){
	if( isVisitorActivity(message) &&
		hasProspect(message)){
			var assignedUserId = '';
			if(message.action.prospect.userId){
				assignedUserId = '' + message.action.prospect.userId;
			}
			return assignedUserId === userId;

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
	if(isFormViewActivity(message)){
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

// The following functions were created to strip out all references to a message's contents from
// all other app files so that this is the source record for all thing message

function getContactInfo(message) {
	var contactInfo = {
		companyName: '',
		streetAddress: '',
		city: '',
		state: '',
		zip: '',
		country: '',
		phone: '',
		email: '',
		website: ''
	};
	if(message.action.prospect.company){
		contactInfo.companyName = message.action.prospect.company;
	}
	if(message.action.prospect.addressOne){
		contactInfo.streetAddress = clean(message.action.prospect.addressOne);
	}
	if(message.action.prospect.addressTwo && (message.action.prospect.addressTwo !== '')){
		contactInfo.streetAddress = contactInfo.streetAddress+'<br />'+clean(message.action.prospect.addressTwo);
		contactInfo.streetAddress = contactInfo.streetAddress+'<br />'+clean(message.action.prospect.addressTwo);
	}
	if(message.action.prospect.city){
		contactInfo.city = message.action.prospect.city;
	}
	if(message.action.prospect.state){
		contactInfo.state = message.action.prospect.state;
	}
	if(message.action.prospect.zip){
		contactInfo.zip = message.action.prospect.zip;
	}
	if(message.action.prospect.country){
		contactInfo.country = message.action.prospect.country;
	}
	if(message.action.prospect.phone){
		contactInfo.phone = message.action.prospect.phone;
	}
	if(message.action.prospect.email){
		contactInfo.email = message.action.prospect.email;
	}

	if(message.action.prospect.website){
		contactInfo.website = message.action.prospect.website;
	}

	return contactInfo;
}

function getWhoIs(message) {
	var ic = message.action.whois;
	var whoIs = {
		companyName: '',
		email: '',
		city: '',
		country: '',
		state: '',
		zip: ''
	};
	if (ic.company) {
		whoIs.companyName = ic.company;
	}
	if (ic.email) {
		whoIs.email = ic.email;
	}
	if (ic.city) {
		whoIs.city = ic.city;
	}
	if (ic.country) {
		whoIs.country = ic.country;
	}
	if (ic.state) {
		whoIs.state = ic.state;
	}
	if (ic.zip) {
		whoIs.zip = ic.zip;
	}

	return whoIs;
}

function getProspect(message) {
	return message.action.prospect;
}

function getProspectInfo(message) {
	var ret = {};
	if(message.action.prospect.firstName){
		ret.first_name = message.action.prospect.firstName;
		ret.full_name = ret.first_name+'';
		ret.searchable = true;
	}
	if(message.action.prospect.lastName){
		ret.last_name = message.action.prospect.lastName;
		ret.full_name = (ret.first_name)? ret.full_name+' '+ret.last_name : ret.last_name+'';
		ret.searchable = true;
	}
	if(message.action.prospect.company){
		ret.company = message.action.prospect.company;
	}
	return ret;
}

function getProspectId(message) {
	return message.action.prospect.id;
}

function getVisitor(message) {
	return message.action.visitor;
}

function getVisitorId(message) {
	return message.action.visitor.id;
}

function getCreatedAt(message) {
	if (message.data.hasOwnProperty("CreatedAt")) {
		return message.data.CreatedAt;
	}
	return false;
}

function getProspectScore(message) {
	if (message.action.prospect.score) {
		return message.action.prospect.score;
	}
	return '';
}

function getProspectGrade(message) {
	if (message.action.prospect.grade) {
		return message.action.prospect.grade;
	}
	return '';
}

function clean(str){
	return uiTools.clean(str);
}

module.exports = {
	hasProspect: hasProspect,
	isAnonymousVisitor: isAnonymousVisitor,
	hasVisitor: hasVisitor,
	isPageView: isPageView,
	isEmailOpenActivity: isEmailOpenActivity,
	isOneToOneEmailOpenActivity: isOneToOneEmailOpenActivity,
	isEmailClickActivity: isEmailClickActivity,
	isLandingPageActivity: isLandingPageActivity,
	isFileActivity: isFileActivity,
	isFormViewActivity: isFormViewActivity,
	isFormSuccessfulSubmitActivity: isFormSuccessfulSubmitActivity,
	isFormFailedSubmitActivity: isFormFailedSubmitActivity,
	isCampaignOfName: isCampaignOfName,
	getCampaignName: getCampaignName,
	isActivityOfType: isActivityOfType,
	getActivityState: getActivityState,
	getActivityNameAndDetails: getActivityNameAndDetails,
	isVisitorActivity: isVisitorActivity,
	hasHydratedProperty: hasHydratedProperty,
	decorateNameAndCompanyFromProspect: decorateNameAndCompanyFromProspect,
	decorateNameAndCompanyFromVisitor: decorateNameAndCompanyFromVisitor,
	getActivityType: getActivityType,
	isProspectWithCrmUrl: isProspectWithCrmUrl,
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
	getProspectCrmUrl: getProspectCrmUrl,
	isStarred: isStarred,
	isFilteredActivity: isFilteredActivity,
	isActivityOfProspectAssignedToUser: isActivityOfProspectAssignedToUser,
	isActivityOfProspectAssignedToCurrentUser: isActivityOfProspectAssignedToUser, //This is an alias name for this function so we can differenciate in future features
	getContactInfo: getContactInfo,
	getWhoIs: getWhoIs,
	getProspectInfo: getProspectInfo,
	getProspectId: getProspectId,
	getVisitorId: getVisitorId,
	getCreatedAt: getCreatedAt,
	getProspectScore: getProspectScore,
	getProspectGrade: getProspectGrade,
	getProspect: getProspect,
	getVisitor: getVisitor
};