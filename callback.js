
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

// sync call
var respons = sum(1, 2); // 3

// async

async_sum(1,2, callback(response) { async_minus(4, 2, callback(respose){ async3})});

