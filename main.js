// Variables
var comBtn = document.getElementById("calBtn");
var drkMode = document.getElementById("darkmodeimg");
var lgtMode = document.getElementById("lightmodeimg");

//Event Listeners
comBtn.addEventListener("click", calBmi);
drkMode.addEventListener("click",darkMode );
lgtMode.addEventListener("click", lightMode);

function calBmi() {
    
    var weValue = +document.getElementById("weIn").value;
    var heValue = +document.getElementById("heIn").value;

    let bodyMassIn = weValue / heValue ** 2;
    let fullBMI = bodyMassIn.toFixed(1)
    document.getElementById("outPut").innerHTML = fullBMI;
  
}

function darkMode() {
    
    document.getElementById("body").style.backgroundColor = "#141413";
    document.getElementById("mainhead").style.backgroundColor= "#ffffff";
    document.getElementById("mainhead").style.color= "black";
    document.getElementById("exText").style.color="white";
    document.getElementById("calCon").style.color="white";
    document.getElementById("darkmodeimg").classList.add("darkClass");
    document.getElementById("lightmodeimg").classList.remove("lightClass");
    
    
    
}

function lightMode() {
    
    document.getElementById("body").style.backgroundColor = "#ffffff";
    document.getElementById("mainhead").style.backgroundColor= "rgb(90, 86, 86)";
    document.getElementById("exText").style.color = "black";
    document.getElementById("mainhead").style.color = "white";
    document.getElementById("calCon").style.color = "black";
    document.getElementById("lightmodeimg").classList.add("lightClass");
    document.getElementById("darkmodeimg").classList.remove("darkClass");
    
    
}

