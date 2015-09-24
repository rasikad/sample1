app.controller('insights_prefilterCtrl',function($scope,$http,$location) {
  
  $scope.validate = function() {
	  
    var code=document.getElementById('zipcode').value;
		//alert(code);
	 $http.get("http://maps.google.com/maps/api/geocode/json?components=country:US|postal_code:'"+code+"'&sensor=false")
    .success(function(response) {
		$.each(response, function(idx, obj){
			if((obj==null) || (obj=="")){
				//alert("Enter valid zipcode");
				document.getElementById("error_msg").style.display ="inline";
			}
			else{
				document.getElementById("btn_gotoinsights").disabled =false;
				document.getElementById("error_msg").style.display ="none";
					//$location.path("/insights");
					
			}
			return false;
		});
		
	});
		
  };
  
  $scope.load_insights_page =function() {
	  
    $location.path("/insights");
		
  };
  
});
