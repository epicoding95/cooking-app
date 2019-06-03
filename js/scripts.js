var gallonToLiter = function(gallonNumber){
  return gallonNumber*4;
}

var gallonNumber = parseInt(prompt("Insert value in gallons to receive liters."));
alert(gallonToLiter(gallonNumber));
