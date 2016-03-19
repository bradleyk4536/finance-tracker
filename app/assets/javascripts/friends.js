//SEARCH FOR friend FUNCTION USING AJAX
var init_friend_lookup;

init_friend_lookup = function () {
	"use strict";
//	Display the spinner from common/spinner
	$('#friend-lookup-form').on('ajax:before', function (event, data, status) {
		show_spinner();
	});

	//Hide spinner after ajax request is complete
	$('#friend-lookup-form').on('ajax:after', function (event, data, status) {
		hide_spinner();
	});

	$('#friend-lookup-form').on('ajax:success', function (event, data, status) {
		$('#friend-lookup').replaceWith(data);
		init_friend_lookup();
	});

	//handle lookup errors
	$("#friend-lookup-form").on('ajax:error', function (event, xhr, status, error) {
		hide_spinner();
		$("#friend-lookup-results").replaceWith(' ');
		$("#friend-lookup-errors").replaceWith("Person was not found");
	});
};


$(document).ready(function () {
	"use strict";

	init_friend_lookup();
});
