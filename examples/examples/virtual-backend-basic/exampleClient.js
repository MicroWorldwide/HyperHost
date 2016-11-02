/*
Example client code for making requests to a virtual backend. Feel free to use this as a template for your own applications.

See HS-server.js to see how to create a server that can handle these requests.
*/

//Here is an example request
var hyp = HyperRequest(); //Create a new HyperRequest
hyp.onload = function (response) { //Set the callback
    console.log(response);
    document.getElementById("output").innerHTML = JSON.stringify(response);
}
hyp.open("GET", "/"); //Set the method and route
hyp.send({ //Send arbitrary data to server
    message: "hello",
    moreData: [12, 42, 21],
    evenMore: {}
});