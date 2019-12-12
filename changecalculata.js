var input = 67;

getCoins(input);

function getCoins (input) {
  
  var coinType = {
    Quarter: 25,
    Dime: 10,
    Nickel: 5,
    Penny: 1
  }
  
  var response = "";
  
  while (input != 0) {
    for (var coin in coinType) {
      var x = parseInt(input / coinType[coin]);
      response += coin + " " + x + " ";
      input = input% coinType[coin];
    }
  }
  
  display.log(response);
}
