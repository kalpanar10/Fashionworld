$(function(){
	switch (menu) {

	case 'About Us':
		$('#about').addClass('active');
		break;
	case 'Contact Us':
		$('#contact').addClass('active');
		break;
	case 'All Products':
		$('#listProducts').addClass('active');
		break;
	case 'Product Management':
		$('#manageProducts').addClass('active');
		break;
	case 'Shopping Cart':
		$('#userModel').addClass('active');
		break;		
	default:
		if (menu == "Home")
			break;
		$('#listProducts').addClass('active');
		$('#a_' + menu).addClass('active');
		break;
	}
});

var token = $('meta[name="_csrf"]').attr('content');
var header = $('meta[name="_csrf_header"]').attr('content');

if((token!=undefined && header !=undefined) && (token.length > 0 && header.length > 0)) {		
	// set the token header for the ajax request
	$(document).ajaxSend(function(e, xhr, options) {			
		xhr.setRequestHeader(header,token);			
	});				
}

//var $table = $('#productListTable');
//
//// execute the below code only where we have this table
//if ($table.length) {
//	// console.log('Inside the table!');
//
//	var jsonUrl = '';
//	if (window.categoryId == '') {
//		jsonUrl = window.contextRoot + '/json/data/all/products';
//	} else {
//		jsonUrl = window.contextRoot + '/json/data/category/'+ window.categoryId + '/products';
//	}
//
//	$table.DataTable({
//
//				lengthMenu : [ [ 3, 5, 10, -1 ],[ '3 Records', '5 Records', '10 Records', 'ALL' ] ],
//				pageLength : 5,
//				ajax : {
//					url : jsonUrl,
//					dataSrc : ''
//				},
//				columns : [
//					{
//						data : 'name'
//					},
//					{
//						data : 'brand'
//					},
//					{
//						data : 'unitPrice'
//					},
//					{
//						data : 'quantity'
//					},
//
//]});

var $table = $('#productListTable');

// execute the below code only where we have this table
if ($table.length) {
	// console.log('Inside the table!');

	var jsonUrl = '';
	if (window.categoryId == '') {
		jsonUrl = window.contextRoot + '/json/data/all/products';
	} else {
		jsonUrl = window.contextRoot + '/json/data/category/'+ window.categoryId + '/products';
	}

	$table.DataTable({

				lengthMenu : [ [ 3, 5, 10, -1 ],[ '3 Records', '5 Records', '10 Records', 'ALL' ] ],
				pageLength : 5,
				ajax : {
					url : jsonUrl,
					dataSrc : ''
				},
				columns : [
						{
							data : 'code',
							bSortable : false,
							mRender : function(data, type, row) {

								return '<img src="' + window.contextRoot + '/resources/images/' + data + '.jpg" class="dataTableImg"/>';

							}
						},
						{
							data : 'name'
						},
						{
							data : 'brand'
						},
						{
							data : 'unitPrice',
							mRender : function(data, type, row) {
								return '&#8377; ' + data
							}
						},
						{
							data : 'quantity',
							mRender : function(data, type, row) {

								if (data < 1) {
									return '<span style="color:red">Out of Stock!</span>';
								}

								return data;

							}
						},
						{
							data : 'id',
							bSortable : false,
							mRender : function(data, type, row) {
								var str = '';
								str += '<a href="'
										+ window.contextRoot
										+ '/show/'
										+ data
										+ '/product" class= "btn btn-primary"><span class="glyphicon glyphicon-eye-open"></span></a> &#160;';
								if(userRole == 'ADMIN'){
									str += '<a href="'
										+ window.contextRoot
										+ '/manage/'
										+ data
										+ '/product" class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></a>';
								}
								
								else{
									if (row.quantity < 1) 
									{
										str += '<a href="javascript:void(0)" class="btn btn-success disabled"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
									} 
									else
									{
											str += '<a href="'
												+ window.contextRoot
												+ '/cart/add'
												+ data
												+ '/product" class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
									}
								}
								
								return str;
								}
						} ]
				
				
			});
	
}
var $alert =$('.alert');
if($alert.length){
	setTomeout(function(){
		$alert.fadeOut('slow');
	},3000)
}
//	}
/*$('.switch input[type="checkbox"]').on('change',function(){
	var checkbox = $(this);
	varchecked = checkbox.prop('checked');
	var dMsg = (checked)? 'you want to activate?':
		                  'you want to deactivate?';
	var value = checkbox.prop('value');
	bootbox.confirm({
		size:'medium',
		title : 'product activate & deactivate',
		message: dMsg,
		callback: function(confirme){
			if(confirmed){
				console.log(value);
				bootbox.alert({
					size: 'medium',
					title:'information',
					message:'operation on product'+ value
						
				});
			}else{
				chekbox.prop('checked', !checked);
			}
		}
	});
});*/
var $loginForm = $('#loginForm');

if($loginForm.length) {
	
	$loginForm.validate({			
			rules: {
				username: {
					required: true,
					email: true
					
				},
				password: {
					required: true
				}				
			},
			messages: {					
				username: {
					required: 'Please enter email!',
					email: 'Please enter a valid email address!'
				},
				password: {
					required: 'Please enter your password!'
				}					
			},
			errorElement : "em",
			errorPlacement : function(error, element) {
				// Add the 'help-block' class to the error element
				error.addClass("help-block");
				
				// add the error label after the input element
				error.insertAfter(element);
			}				
		}
	
	);
	
}
var $adminproductsTable = $('#adminproductsTable');


if($adminproductsTable.length) {
	
	var jsonUrl = window.contextRoot + '/json/data/admin/all/products';
	console.log(jsonUrl);
	
	$adminproductsTable.DataTable({
				lengthMenu : [ [ 10, 30, 50, -1 ], [ '10 Records', '30 Records', '50 Records', 'ALL' ] ],
				pageLength : 30,
				ajax : {
					url : jsonUrl,
					dataSrc : ''
				},
				columns : [		
				           	{
				           		data: 'id'
				           		},


				           	{
				           		data: 'code',
				           	 bSortable: false,
				           		mRender: function(data,type,row) {
				           			return '<img src="' + window.contextRoot + '/resources/images/' + data + '.jpg" class="adminDataTableImg"/>';					           			
				           		}
				           	},
				           	{
								data : 'name'
							},
							{
								data : 'brand'
							},
							{
								data : 'quantity',
								mRender : function(data, type, row) {

									if (data < 1) {
										return '<span style="color:red">Out of Stock!</span>';
									}

									return data;

								}
							},
							{
								data : 'unitPrice',
								mRender : function(data, type, row) {
									return '&#8377; ' + data
								}
							},
							{
								data : 'active',
								bSortable : false,
								mRender : function(data, type, row) {
									var str = '';
									if(data == true) {											
										str += '<label class="switch"> <input type="checkbox" value="'+row.id+'" checked="checked"/>  <div class="slider round"> </div></label>';
										
									}else {
										str += '<label class="switch"> <input type="checkbox" value="'+data+'"/>  <div class="slider round"> </div></label>'
									}
									
									return str;
								}
							},
							{
								data : 'id',
								bSortable : false,
								mRender : function(data, type, row) {

									var str = '';
									str += '<a href="'+ window.contextRoot + '/manage/'	+ data+ '/product" class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></a> &#160;';

									return str;
								}
							}					           	
				],
				initComplete: function () {
					var api = this.api();
					api.$('.switch input[type="checkbox"]').on('change' , function() {							
						var checkbox = $(this);
						var checked = checkbox.prop('checked');
						var dMsg = (checked)? 'You want to activate the Product?': 'You want to de-activate the Product?';
						
						
					  var value= checkbox.prop('value');
					    bootbox.confirm({
					    	size: 'medium',
					    	title: 'Product Activation/Deactivation',
					    	message: dMsg,
					    	callback: function (confirmed) {
						        if (confirmed) {
						        	console.log(value);
						        	var activationUrl= window.contextRoot +'/manage/product/'+value+'/activation';
						            $.post(activationUrl, function(data){
						            bootbox.alert({
						            	size:'medium',
						            title:'Information',
						            message:'you r going to perform operation on product'+value
						            });	
						            });
						        	$.ajax({		
						        		
						            	type: 'GET',
						            	url: window.contextRoot + '/manage/product/'+checkbox.prop('value')+'/activation',
						        		timeout : 100000,
						        		success : function(data) {
						        			bootbox.alert(data);							        										        			
						        		},
						        		error : function(e) {
						        			bootbox.alert('ERROR: '+ e);
						        			//display(e);
						        		}						            	
						            });
						        }
						        else {							        	
						        	checkbox.prop('checked', !checked);
						        }
					    	}
					    });																											
					});
						
				}
			});
	var $categoryForm = $('#categoryForm');
	if($categoryForm.length){
		$categoryForm.validate({
			rules:{
				name:{
					required : true,
					minlength:2
				},
				description:{
					required:true
				}
			},
			messages:{
				name:{
					required: 'plesase add category name',
					minlength:'category should not lss than 2 chracters'
				},
				description:{
					required:'adddescription  for this category'
				},
				errorElement: 'em',
				errorPlacement:function(error,element){
					error.addClass('help-block');
				error.insertAfter(element);
				
				}
			}
		});
	}

		
	
	
	
			
}
			
			