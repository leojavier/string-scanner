function scanner(str){
    for(var i = str.length; i>0; i--) {
        
        var trim = str.substring(i,i+1);
        
        if(trim == '-') {
            console.log(str.substring(i+4,str.length));
        }
    }
}

(function(){
    
    scanner('col-lg-10');
    
})();