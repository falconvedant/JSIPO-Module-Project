// Variables
var comBtn = document.getElementById("calBtn");

//Event Listeners
comBtn.addEventListener("click", calBmi);

function calBmi() {
    var weValue = +document.getElementById("weIn").value;
    var heValue = +document.getElementById("heIn").value;

    let bodyMassIn = weValue / heValue ** 2;
    let fullBMI = bodyMassIn.toFixed(1)
    document.getElementById("outPut").innerHTML = fullBMI;
  
}
