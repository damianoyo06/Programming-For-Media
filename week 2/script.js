$(document).ready(function(){


  $("#check").click(function(){
      var name = $("#name").val();
      var age = $("#age").val();
      //makes sure the border is black
      $("#name").css("border", "2px, black, solid");
      $("#age").css("border", "2px, black, solid");


          if(name === ""){
              $("#name").css("border", "2px, red, solid");
          }
          else{
              $("#welcome").html("Welcome " + name);
          }

          if(age === ""){
            $("#age").css("border", "2px, red, solid");
          }
          else{
            $("#ageMessage").html("You are " + age + " years old");
          }
});

});
