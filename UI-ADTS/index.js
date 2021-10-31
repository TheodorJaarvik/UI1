









var myArray = ["Turn the temperature adjuster to its warmest setting", "Turn the temperature adjuster to its coldest setting", "Clabration complete! Now add your personalised temperature settings.", "Name:" + "<br>" + "Temperature: (Turn the temperature adjuster to your preferred temperature.)","Name:         " + "Temperature: 19"];
var btnArray = ["CALIBRATE", "DONE", "DONE", "ADD+", "DONE", "ADD+"];
var index2 = 1;
var index = 0;
var print = document.getElementById("div_UI");
var printBtn = document.getElementById("div_Button");

printBtn.innerHTML= btnArray[0];

/*function nextElement(){
    
    if(index < myArray.length){
        print.innerHTML = myArray[index];
        index++;
    }
    else{
        index = 0;
    }
    
    if(index2 < btnArray.length){
        printBtn.innerHTML = btnArray[index2];
        index2 ++;
    }
    else{
        index2 = 0;
    }

}

function showElement(){
  
    if(index == 4){
        document.getElementById("inp_Text").removeAttribute('hidden');
    }
    
}

function saveName(){
    var tekst = ""

    var name = document.getElementById("inp_Text").innerHTML;
    tekst = name;
    document.getElementById("name").innerHTML=tekst;
}*/




/*function onclick_div(){
    
    var tekst = "";
    var counter = 1;
    var end = 12;
    var button;
    
    
    
        if(counter==1){
            
            document.getElementById("div_Button").innerHTML="";
            
            document.getElementById("div_UI").innerHTML="<p>" + "Turn the temperature adjuster to its warmest function." + "</p>";
            button = document.createElement("button");
            button.type = "submit";
            button.innerHTML = "DONE";
            document.getElementById("div_Button").appendChild(button);
            button.onclick =function onclick_div2(){
                
                 var button;
    
            document.getElementById("div_Button").innerHTML="";
            document.getElementById("div_UI").innerHTML="";
            
            document.getElementById("div_UI").innerHTML="<p>" + "Turn the temperature adjuster to its coldest function." + "</p>";
            button = document.createElement("button");
            button.type = "submit";
            button.innerHTML = "DONE";
            
            document.getElementById("div_Button").appendChild(button);
            };
            
        }
}*/
