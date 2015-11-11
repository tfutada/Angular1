var ajax = function(callback) {
    callback("response!");
};

ajax(function(response){
     console.info(response)
});

ajax(function(response){
    document.getElementById("word").innerHTML = "Response!";
});

