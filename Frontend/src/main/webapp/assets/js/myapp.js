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
								str += '<a href="'+ window.contextRoot + '/show/'+data+'/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"></span></a> &#160;';
                                str += '<a href="'+ window.contextRoot + '/cart/add/'+data+'/product" class="btn btn-success"></a>'
								
//								if(userRole !== 'ADMIN') {
//									if (row.quantity < 1) {
//										str += '<a href="javascript:void(0)" class="btn btn-success disabled"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
//									} else {
//
//										str += '<a href="'
//												+ window.contextRoot
//												+ '/cart/add/'
//												+ data
//												+ '/product" class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
//									}
//								}
//								else {
//									str += '<a href="'
//										+ window.contextRoot
//										+ '/manage/'
//										+ data
//										+ '/product" class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></a>';
//								}
								
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
				           	{data: 'id'},


				           	{data: 'code',
				           	 bSortable: false,
				           		mRender: function(data,type,row) {
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
									if(data) {											
										str += '<label class="switch"> <input type="checkbox" value="'+row.id+'" checked="checked">  <div class="slider round"> </div></label>';
										
									}else {
										str += '<label class="switch"> <input type="checkbox" value="'+row.id+'">  <div class="slider round"> </div></label>';
									}
									
									return str;
								}
							},
							{
								data : 'id',
								bSortable : false,
								mRender : function(data, type, row) {

									var str = '';
									str += '<a href="'+ window.contextRoot + '/manage/'	+ data+ '/product" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span></a> &#160;';

									return str;
								}
							}					           	
				],
				initComplete: function () {
					var api = this.api();
					api.$('.switch input[type="checkbox"]').on('change' , function() {							
						var dText = (this.checked)? 'You want to activate the Product?': 'You want to de-activate the Product?';
						var checked = this.checked;
						var checkbox = $(this);
						debugger;
					    bootbox.confirm({
					    	size: 'medium',
					    	title: 'Product Activation/Deactivation',
					    	message: dText,
					    	callback: function (confirmed) {
						        if (confirmed) {
						        	/*var activationURL= window.contextRoot +'/manage/product/' + value +'/activation';
						            $.post(activationUrl, function(data){
						            bootbox.alert({
						            	size:'medium',
						            title:'Information',
						            message:data
						            });	
						            });*/
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
}
			
			