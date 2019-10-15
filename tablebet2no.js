var end = 10;
var t = " ";

for ( var i = 1; i <= end; i++){
    
    console.log(" "+ i);
    
    t = "  ";
    for (var j = 1; j <= end; j++) {
        
    t += "  "+(i * j)+" ";
    }   
    console.log(t);

}
