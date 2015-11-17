
var ajax = function(callback) {
    setTimeout(function(){
        var response = "{name:'futada'}";
        callback(response);
    }, 3000);
};

// Usually, update UI fragment with the response.
ajax(function(response){
    document.getElementById("word").innerHTML = response;
});

