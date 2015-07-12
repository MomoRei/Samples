(function() {
	var app = angular.module('mapApp',[]);

    app.directive('map', [
  		function () {
    	return {
     	 restrict: 'E',
     	 scope: {
     	   data: '='
    	  },
    	  link: function (scope, element) {
    	    var map = L.map('map').setView([40.631, -120.103], 5);

            //leaflet map
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid2xlZTc3MjAiLCJhIjoiOGI0MWVmMDJlOGM3NTEzYjE1OWVkM2RlMTdhZTQxMDIifQ.2C9ygVDvLdjlPOp9YL_lxA#6/37.344/-117.839', {
             attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
             maxZoom: 15,
             id: 'wlee7720.22c26b61',
             accessToken: 'pk.eyJ1Ijoid2xlZTc3MjAiLCJhIjoiOGI0MWVmMDJlOGM3NTEzYjE1OWVkM2RlMTdhZTQxMDIifQ.2C9ygVDvLdjlPOp9YL_lxA#6'
            }).addTo(map);

            scope.$watch('data', function(){
              scope.render(scope.data);
          }, true); 
            var count = 0;
            scope.render = function(data){
                if (scope.data != undefined && scope.data.length > 0 && count == 0){
                    var mapData = scope.data;
                    var filters = {transaction_type: "all", name: ""};
                    var i = 0;
                    count = 1;

                    //initalize svg
                    map._initPathRoot()

                    //create svg
                    var svg = d3.select("#map").select("svg"),
                    g = svg.append("g");

                    
                    var filteredPoints = mapData.filter(function(d){
                       mapData[i].LatLng = new L.LatLng(d.latitude, d.longitude);
                       i++;
    
                  });

                    var div = d3.select("body").append("div")   
                        .attr("class", "tooltip")               
                        .style("opacity", 0);

                        var location = g.selectAll("circle")
                            .data(mapData)
                            .enter().append("circle")
                            .style("stroke", "black")
                            .style("opacity", .6)
                            .style("fill", function(d){
                                 if(d.transaction_type == "charge"){
                                    return "red"
                                }
                                else{
                                    return "blue"
                                }
                            })
                            .attr("r", function(d){return 0.05*d.amount;})
                            .on("mouseover", function(d){
                                div.transition()        
                                .duration(200)      
                                .style("opacity", .9);      
                                div .html(d.name +"<br/>("+ d.latitude+", "+d.longitude+")<br/>$"+d.amount+"("+d.transaction_type+")<br/>"+d.created_at.slice(0,10))  
                                .style("left", (d3.event.pageX) + "px")     
                                 .style("top", (d3.event.pageY - 28) + "px");    
                                   })                  
                             .on("mouseout", function(d) {       
                               div.transition()        
                              .duration(500)      
                                .style("opacity", 0);   
                           });


                        map.on("viewreset", update);

                        //filters
                        d3.selectAll(".filter-on").on("click", function(){
                            filters.transaction_type = this.getAttribute('value').toString().toLowerCase();
                            filterType();
                            
                        });

                        d3.selectAll(".name-filter").on("change", function(){
                            filters.name = this.value;
                            filterName();
                        });
                        function filterName(){
                            if (filters.name !=""){
                                if(filters.transaction_type != "all"){
                                 location.filter(function(d){
                                     return d.name == filters.name && d.transaction_type == filters.transaction_type;
                                 })
                              .attr("display","inline")
                              .filter(function(d){
                                     return d.name != filters.name || d.transaction_type != filters.transaction_type;
                                 })
                              .attr("display","none");
                                }
                              else{
                                   location.filter(function(d){
                                     return d.name == filters.name;
                                 })
                              .attr("display","inline");

                              }

                            location.filter(function(d){
                                     return d.name != filters.name;
                                 })
                              .attr("display","none");
   
                            }
                            else{
                                filterType();
                            }

                        };

                        function filterType(name){
                            if (filters.transaction_type == "all" && filters.name ==""){
                                location.filter(function(d){
                                    return d.transaction_type != null;
                                })
                                .attr("display","inline");
                                    return;
                            }
                            else if(filters.transaction_type == "all" && filters.name !=""){
                                filterName();
                            }
                            else{
                                d3.selectAll(".filter-on").each(function(){
                                    if (this.getAttribute('aria-checked') == "true"){
                                        display = "inline";
                                    }
                                    else{
                                        display = "none";
                                    }

                                    var type = this.getAttribute('value').toString().toLowerCase();
                                        location.filter(function(d){
                                            return d.transaction_type == type;
                                        })
                                        .attr("display",display);
                                    filterName();
                                });

                            }


                        }
    
                        update();

                        function update(){
                            location.attr("transform",
                                function(LatLng){
                                    return "translate("+
                                        map.latLngToLayerPoint(LatLng.LatLng).x +","+
                                        map.latLngToLayerPoint(LatLng.LatLng).y +")";
                                }
                            )
                        };
            

            }

        }
    }
}
    }
    ]);
})();