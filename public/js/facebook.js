function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

function statusChangeCallback(response) {
	if (response.status === 'connected') {
		console.log('Successfully logged in with Facebook');
		console.log(response);
		FB.api('/me?fields=name,first_name,picture.width(480)',changeUser);
	}
}

function changeUser(response) {
	$('.facebookLogin').hide();
	$('#name').text(response.name);
	console.log(response.name);
	$('img#photo').attr("src",response.picture.data.url);
}