$(document).ready(function(){
  $("form#sides").submit(function(event){
    event.preventDefault();

    var number1 = parseInt($("input#side1").val());
    var number2 = parseInt($("input#side2").val());
    var number3 = parseInt($("input#side3").val());

    if ((number1 + number2) <= number3 || (number2 + number3) <= number1 || (number3 + number1) <= number2) {
      $("#result").text("not a triangle");
    } else {

      if (number1 === number2 && number2 === number3) {
        $("#result").text("equilateral");
      } else if (number1 === number2 || number2 === number3 || number1 === number3) {
        $("#result").text("isosceles");
      } else if (number1 !== number2 && number2 !== number3 && number3 !== number1) {
        $("#result").text("scalene");
      }
    }
  });
});
