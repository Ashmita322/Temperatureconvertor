function convertTemperature() {
  var tempInput = document.getElementById("temperature").value;
  var Input = document.getElementById("from").value;
  var Input1 = document.getElementById("to").value;
  var result = document.getElementById("below");

if (Input === "celsius") {
    if (Input1 === "fahrenheit"){
      var fahrenheit = (tempInput * 9/5) + 32;
      result.innerHTML = tempInput + "°C is " + fahrenheit + "°F";
    }
    else if (Input1 === "kelvin") {
      var kelvin = tempInput + 273;
      result.innerHTML = tempInput + "°C is " + kelvin + "K";
    }
  }
  
else if (Input === "fahrenheit") {
  if (Input1 === "celsius"){
    var celsius = (tempInput - 32) * 5/9;
    result.innerHTML = tempInput + "°F is " + celsius + "°C";
    }
    else if (Input1 === "kelvin") {
      var kelvin =  5/9 * ( tempInput - 32) + 273;
      result.innerHTML = tempInput + "°F is " + kelvin + "K";
    }
}
 
else if (Input === "kelvin"){
  if (Input1 === "celsius"){
    var celsius = (tempInput - 273);
    result.innerHTML = tempInput + "K is " + celsius + "°C";
    }
  else if (Input1 === "fahrenheit") {
      var fahrenheit = (tempInput - 273) * 9/5 + 32;
      result.innerHTML = tempInput + "K is " + fahrenheit + "°F";
    }
}
}

function resetall() {
    document.getElementById('from').value = '';
    document.getElementById('to').value = '';
    document.getElementById('temperature').value = '';
} 

