   //Lets require/import the HTTP module
   var http = require('http');
   
   //Lets define a port we want to listen to
  const PORT=(process.env.PORT || 5000); 
   
   //We need a function which handles requests and send response
   function handleRequest(request, response){
       var output = 'Somebody is looking at jira bot!: ' + request.url;
           response.end(output);
          }
   
          //Create a server
          var server = http.createServer(handleRequest);
   
           //Lets start our server
           server.listen(PORT, function(){
               //Callback triggered when server is successfully listening. Hurray!
                   console.log("Jira bot listening on: http://localhost:%s", PORT);
                   }); 
