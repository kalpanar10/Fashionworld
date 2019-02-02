<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="container">
	<div class="row">
		<div class="col-md-3">
			<%@include file="./shared/sidebar.jsp"%>
		</div>
		
		<div class="col-md-9">

<ol class="breadcrumb">

<li><a href="${contextRoot}/home">HOME</a></li>
<li class="active">Category</li>
<li class="active">${category.name}</li>

</ol>

			<table id="productListTable" class="table table-striped table-borderd">
					
					
						<thead>
						
							<tr>
								<th></th>
								<th>Name</th>
								<th>Brand</th>
								<th>Price</th>
								<th>Qty. Available</th>
								<th></th>
								
							
							</tr>
						
						</thead>
					

						<tfoot>
						
							<tr>
								<th></th>
								<th>Name</th>
								<th>Brand</th>
								<th>Price</th>
								<th>Qty. Available</th>
								<th></th>
								
							
							</tr>
						
						</tfoot>
					</table>
				
				</div>
			
			</div>


		
<div class="row">
<div  class="col-lg-12">
<c:if test="${userClickAllProducts == true }">
<script>
window.categoryId = '';
</script>
<ol class="breadcrumb">

<li><a href="${contextRoot}/home">HOME</a></li>
<li class="active">All Products</a></li>

</ol>
</c:if>
<c:if test="${userClickCategoryProducts == true }">
<script>
window.categoryId = '${category.id}';
</script>

</c:if>
</div>
</div>
</div>
