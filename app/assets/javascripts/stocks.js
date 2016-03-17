//SEARCH FOR STOCK FUNCTION USING AJAX
var init_stock_lookup;

init_stock_lookup = function () {
	"use strict";
//	Display the spinner from common/spinner
	$('#stock-lookup-form').on('ajax:before', function (event, data, status) {
		show_spinner();
	});

	//Hide spinner after ajax request is complete
	$('#stock-lookup-form').on('ajax:after', function (event, data, status) {
		hide_spinner();
	});

	$('#stock-lookup-form').on('ajax:success', function (event, data, status) {
		$('#stock-lookup').replaceWith(data);
		init_stock_lookup();
	});

	//handle lookup errors
	$("#stock-lookup-form").on('ajax:error', function (event, xhr, status, error) {
		hide_spinner();
		$("#stock-lookup-results").replaceWith(' ');
		$("#stock-lookup-errors").replaceWith("Stock was not found");
	});
};


$(document).ready(function () {
	"use strict";

	init_stock_lookup();
});
