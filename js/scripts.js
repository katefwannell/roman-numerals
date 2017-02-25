// business logic
function romanNumeralConversion(string) {

            var number = parseInt(string);
            var romanNumeralPairs = [["M","1000",""],["D","500","M"],["C","100","D"],["L","50","C"],["X","10","L"],["V","5","X"],["I","1","V"]];
            var inputIntDivByRnIntNoRemainder = 0;
            var remainder = 0;
            var romanNumeralString = "";
            var loopReducingNumber = parseInt(string);
            var replacementLetter = "";

            romanNumeralPairs.forEach(function(romanNumeralPair) {

                inputIntDivByRnIntNoRemainder = Math.floor(loopReducingNumber / parseInt(romanNumeralPair[1]));
                remainder = parseInt(loopReducingNumber) % parseInt(romanNumeralPair[1]);

                  if (parseInt(inputIntDivByRnIntNoRemainder) > 0 && parseInt(inputIntDivByRnIntNoRemainder) <= 4 ) {

                      romanNumeralString = romanNumeralString + romanNumeralPair[0].repeat(inputIntDivByRnIntNoRemainder);
                      loopReducingNumber = remainder;

                      if (remainder == 0) {
                        return romanNumeralString;
                      }
                }
            });

            romanNumeralString = romanNumeralString.replace("IIII", "IV");
            romanNumeralString = romanNumeralString.replace("VIV", "IX");
            romanNumeralString = romanNumeralString.replace("XXXX", "XL");
            romanNumeralString = romanNumeralString.replace("LXL", "XC");
            romanNumeralString = romanNumeralString.replace("CCCC", "CD");
            romanNumeralString = romanNumeralString.replace("DCD", "CM");

            return romanNumeralString;

    }

// user interface logic
$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());

    if (number <= 3999) {
      var romanNumeral = romanNumeralConversion(number);
      $(".number").text(number);
      $(".romanNumeral").text(romanNumeral);
      $("#result").show();
    } else {
      alert ("Please enter a number between 0 and 3999");
    }
  });
});
