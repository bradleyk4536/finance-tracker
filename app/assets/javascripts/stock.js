var init_stock_lookup;

init_stock_lookup = function () {
	"use strict";

	$('#stock-lookup-form').on('ajax:success', function (event, data, status) {
		$('#stock-lookup').replaceWith(data);
		init_stock_lookup();
	});
};



$(document).ready(function () {
	"use strict";

	init_stock_lookup();
});
