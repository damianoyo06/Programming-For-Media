$(document).ready(function () {
  console.log("ready");
  //Already exisitng usernames
  var jsonData = JSON.parse(window.localStorage.getItem("userData")) || {
   "users": [
     {
       "username": "admin",
       "password": "administrator123"
     },
     {
       "username": "damian",
       "password": "mypassword321"
     }
   ]
 };

  // Event listener for the register button
  $("#register").click(function () {


    // Retrieve input values from form fields
    var username = $("#username").val(); // Replace #usernameInput with your input field ID
    var password = $("#password").val(); // Replace #passwordInput with your input field ID

    var newUser = {
      username: username,
      password: password
    };

    jsonData.users.push(newUser);

    // Save the updated JSON data to localStorage
    window.localStorage.setItem("userData", JSON.stringify(jsonData));

    // Log the updated JSON data
    console.log("Updated JSON data:", jsonData);

    // Update text content dynamically
    $("#text").html("Hello " + username);
  });
});
