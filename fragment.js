var logging = function() {
    console.log(location.hash); 
    
    if (location.hash === '#/first') {
        document.getElementById("word").innerHTML = "FIRST!";
    } else {
        document.getElementById("word").innerHTML = "SECOND!";
    }
};

// Set the callback upon the hash has changed
window.addEventListener("hashchange", logging);
