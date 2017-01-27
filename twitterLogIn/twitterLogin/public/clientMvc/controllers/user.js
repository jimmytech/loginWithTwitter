'use strict';

app.controller('ctrl1', ['$scope', '$http', 'twitterApi', function($scope, $http, twitterApi) {
	
	function getTwitterConsumerTokens() {
	    return {key: "bmJ9API8FYQb2dnAFMMa0WgOt", secret: "7k9S3iTmvUqsg00AjK5AMt9SWu7p32R5MdHLVms71MOKXrG4Cq"};
	}
	var s = encodeURIComponent(getTwitterConsumerTokens().key,'RFC 1738');
	s += ':'+encodeURIComponent(getTwitterConsumerTokens().secret,'RFC 1738');

    $scope.twitterLogin = function(){
     //    var oAuthurl = 'https://api.twitter.com/oauth/request_token';
	    // var headers = {
	    //         'Authorization': 'Basic ' + getTwitterConsumerTokens(),
	    //         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	    //     }; 
	    // $http.defaults.useXDomain = true;
	    // delete $http.defaults.headers.common['X-Requested-With'];

	    // var postData = {
	   	// 	url: oAuthurl, 
	   	// 	headers: headers,
	   	//     data: 'grant_type=client_credentials'
	    // };
	    // console.log(postData);
	   // $http({
	   // 		method: 'POST', 
	   // 		url: oAuthurl, 
	   // 		headers: headers,
	   // 	    data: 'grant_type=client_credentials'}).
	   //      success(function(data, status){
	   //          scope.status = status;
	   //          scope.data = data;
	   //          console.log(data);
	   //          console.log(status);
	   //      }).
	   //      error(function(data, status){
	   //          scope.status = status;
	   //          scope.data = data || "Request failed";
	   //          console.log(data);
	   //          console.log(status);
	   //      });

	   // $http.post(oAuthurl).then(function(response){
	   // 		console.log(response);
	   // });	               
    };

	$( document ).ready(function(){
		$.ajax({
		        method:"POST",
		        beforeSend: function (request)
		        {
		            request.setRequestHeader("Authorization", "Basic "+s);
		            request.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
		        },
		        url: "https://api.twitter.com/oauth/request_token",
		        data: "grant_type=client_credentials",
		        processData: false,
		        success: function(msg) {
		            alert("successfull");
		        }
		})
	});    

}]);


// var requestTokenOauth = {
//       consumer_key: config.TWITTER_KEY,
//       consumer_secret: config.TWITTER_SECRET,
//       callback: req.body.redirectUri
//     };