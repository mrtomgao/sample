var start = new Date();

var input = "123412341234123412";

findComboz(input);

var end = new Date();

display.log("Completed in: " + (end.getTime() - start.getTime()) + "ms");

function findComboz(input) {
  var newInputx = "";
  var newInputxx = "";
  if (isNaN(input.charAt(input.length - 1)) == true) {
    display.log("found: " + input);
  }
  else {
    for (var i = 0; i < input.length; i++) {
      if (isNaN(input.charAt(i)) == false) {
        var x = parseInt(input.charAt(i));  
        newInputx = builda(input,getLetta(x), i, 1);
        //display.log("single: " + newInputx);
        
        if ((i + 1) < input.length) {
          var xx = parseInt(input.charAt(i) + input.charAt(i+ 1));   
          if (xx <= 26) {
            newInputxx = builda(input,getLetta(xx), i, 2);
            //display.log("double: " + newInputxx);
            break;
          }
        }
        break;
      } 
    }
    if (newInputx != "") {
      findComboz(newInputx);
    }
    if (newInputxx != "") {
      findComboz(newInputxx);
    }    
  }
}

//Get da letta from dem alpherbet
function getLetta(i) {
  var alf = "_abcdefghijklmnopqrstuvwxyz";
  return alf.charAt(i)
}

//tomz custom string builda
function builda(orig, chr, i, offset) {
  return orig.substr(0,i) + chr + orig.substr(i + offset, orig.length - (i + offset))
}
