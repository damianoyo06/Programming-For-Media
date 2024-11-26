$(document).ready(function () {
  var randomNumber;
  var attempt = 0;

  function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 101);
    attempt = 0;
  }

  $("#generate").click(function () {
    generateRandomNumber();
  });

  $("#check").click(function () {
    var number = parseInt($("#number").val());
    attempt++;

    if (isNaN(number)) {
      $("#result").html("Please enter a valid number.");
      // return;
    }

    if (number < randomNumber) {
      $("#result").html(number + " is lower than the randomly generated number.");
    }
    else if (number > randomNumber) {
      $("#result").html(number + " is higher than the randomly generated number.");
    }
    else {
      $("#result").html(number + " is correct! It took you " + attempt + (attempt === 1 ? " attempt!" : " attempts!")
      );
    }
  });
});
