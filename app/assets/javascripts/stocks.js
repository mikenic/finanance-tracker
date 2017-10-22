var init_stock_lookup;

init_stock_lookup = function() {
	$('#stock-lookup-form').on('ajax:before', function(event, data, status){
		show_spinner();
	});

	$('#stock-lookup-form').on('ajax:after', function(event, data, status){
		hide_spinner();
	});

	$('#stock-lookup-form').on('ajax:success', function(event, data, status){
		$('#stock-lookup').replaceWith(data);
		init_stock_lookup();
	});

	$('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
		 hide_spinner();
		$('#stock-lookup-results').replaceWith('');
		$('#stock-lookup-errors').replaceWith('Stock was not found.');

	});
}


 // $(document)  
 //    .ajaxStart(function() {
 //      	$('#spinner').show(); // show on any Ajax event.
 //    })
 //    .ajaxStop(function() {
 //      $('#loading-indicator').hide(); // hide it when it is done.
 //  });



$(document).on('ready page:load page:change', function () {
  init_stock_lookup();
})

// $(document).ready(function() {
// 	init_stock_lookup();
// })




// $(document).ready(function() {
// 	init_stock_lookup();
// }) 

// $(document).on('page:change', init_stock_lookup);