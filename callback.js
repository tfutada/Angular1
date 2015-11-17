
var ajax = function(callback) {
    callback("Response!"); // Usually this is an async call.
};

// Pass an anonymous function that takes an argument as a response.
ajax(function(response){
     console.info(response)
});

// Usually, update UI fragment with the response.
ajax(function(response){
    document.getElementById("word").innerHTML = response;
});

