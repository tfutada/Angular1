
(function() {
    var logger = function() {

        var counter = 0;
        
        var info1_ = function() {
            console.info("Error!" + counter);
            counter = counter + 1;
        };

        var info2_ = function() {
            console.info("Info!" + counter);
            counter = counter + 2;
        };

        return {
            info1 : info1_,
            info2 : info2_
        };
    };

    var log = logger();
    
    log.info1();
    log.info2();
    log.info2();
    logger().info1(); // a new object
    log.info2();
        
}());

var log2 = logger();