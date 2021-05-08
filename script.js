var names= ["Gangadhara Deepadiah","Tanuja Salimath","Chitra Gangadhara"]
var pictures=["father.png", "mother.png", "daughter.png"];

 function next(){
   
    
    for (let x = 0; x < names.length; x++) {
        
        document.getElementById("name").innerHTML=names[x];
        document.getElementById("pictures").setAttribute("src",pictures[x]);
        if (x=names.length-1) {
            x=0;
        }
    }

 }

