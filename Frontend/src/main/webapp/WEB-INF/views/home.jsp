<link href="${css}/myapp.css" rel="stylesheet">
<div class="container">

        <div class="row">

            <div class="col-md-3">
                <%@ include file="./shared/sidebar.jsp"  %>
            </div>

            <div class="col-md-9">

                <div class="row carousel-holder">

                    <div class="col-md-12">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img class="slide-image"  src="${images}/fashion.jpg" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image"  src="${images}/banner.jpg" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image"  src="${images}/fate.jpg" alt="">
                                </div>
                            </div>
                            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="row" id="prop">

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="${images}/s.gif" alt="" width= 100% heigth= 300%>
                            <div class="caption">
                                <h4 class="pull-right">$24.99</h4>
                                <h4>Hand bags
                                </h4>
                                <p>See more snippets like this online store item.</p>
                            </div>
                           </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="${images}/b.gif" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$64.99</h4>
                                <h4>sandals
                                </h4>
                                <p>See more snippets like this online store item.</p>
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="${images}/c.gif" alt="">
                            <div class="caption">
                                <h4 class="pull-right">$74.99</h4>
                                <h4>Accessories
                                </h4>
                                <p>See more snippets like this online store item</p>
                            </div>
                           
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="${images}/d.gif" alt="">
                            
                            
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail" id = "prop">
                            <img src="${images}/a.gif" alt="">
                            
                        </div>
                    </div>

                    

                </div>

            </div>

        </div>

    </div>