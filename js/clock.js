(function(){ 
    // start
    console.info("Hello JS"); 
    const myNode = document.createElement("div");
    document.getElementById("digitalClock");
    digitalClock.appendChild(myNode);
    myNode.innerHTML = "Welcome";

    
    const updateTime = function(){
        
        console.info('tick tock');
        const myDate = new Date();
        console.dir(myDate);
    
        //myNode.innerHTML = myDate.toDateString();
        myNode.innerHTML = myDate.toLocaleTimeString([], { 
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit"
         });
         
        }
        
        setInterval(updateTime, 1000);
        // end
    })();