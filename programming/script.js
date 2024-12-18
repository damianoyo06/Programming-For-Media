$(document).ready(function (){

//clock
setInterval(updateClock, 1000); // Update every second
updateClock(); // Initialise immediately

  //light/dark mode
    let isLightMode = true;


//carousel
      const buttons = $("[dataCarouselButton]"); // selecting buttons

      buttons.each(function () {
        $(this).on("click", function () {
          const button = $(this); // clicked button
          const offset = button.data("carouselButton") === "next" ? 1 : -1; // direction
          const carousel = button.closest("[dataCarousel]"); // finds closest carousel
          const slides = carousel.find("[dataSlides]"); // gets the slides container
          const activeSlide = slides.find("[data-active]"); // active slide

          let newIndex =
            slides.children().index(activeSlide) + offset; // new index
          if (newIndex < 0) newIndex = slides.children().length - 1;
          if (newIndex >= slides.children().length) newIndex = 0;

          slides.children().eq(newIndex).attr("data-active", true); // new active
          activeSlide.removeAttr("data-active"); // remove active
        });
      });
//end of carousel



    //hides description
    $(".description").hide();

    //show description
    $(document).on('click', '.readMore', function(){
      showDescription($(this).parent());
      $(this).hide();
    });

//create const for each input
    $('button[name="button"]').click(function(){
      const name = $('input[name="name"]').val();
      const surname = $('input[name="surname"]').val();
      const email = $('input[name="email"]').val();
      const feedback = $('textarea[name="feedback"]').val();

      // Check if any of the fields are empty
        if (!name) {
          $("#nameError").text('Name is required');
        }
        else{
            $("#nameError").text('');
        }
        if (!surname) {
          $("#surnameError").text('Surname is required');
        }
        else{
            $("#surnameError").text('');
        }
        if (!email) {
          $("#emailError").text('Email is required');
        }
        else{
            $("#emailError").text('');
        }
        if (!feedback) {
          $("#feedbackError").text('Feedback is required');
        }
        else{
          $("#feedbackError").text('');
        }


//create a feedback data
      const feedbackData = {
        name: name,
        surname: surname,
        email: email,
        feedback: feedback
      };

//feedback array is used as an array
      let feedbackArray = JSON.parse(localStorage.getItem('feedbacks')) || [];

      feedbackArray.push(feedbackData);
      localStorage.setItem('feedback', JSON.stringify(feedbackArray));

//Clears the input
      $('input[name="name"], input[name="surname"], input[name="email"], textarea[name="feedback"]').val('');


      JSON.parse(localStorage.getItem('feedback'))


    });

    $(".switch input").change(function(){
      if(isLightMode){
        lightMode();
      }
      else{
        darkMode();
      }
      isLightMode = !isLightMode;
    });




});


//description for projects
function showDescription(project){
  project.find('.description').show();
}

//values for light mode
function lightMode() {
  $("*").css({
    "color": "#0C121C",
    "background-color": "#80F0FF"
  });
  $(".link").css({
    "background-color": "#0C121C",
    "color": "#80F0FF"
  });
  $(".box").css({
    "background-color": "#0C121C",
    "color": "#80F0FF"
  });
  $(".slider:before").css({
    "background-color": "red"
  })


}

//values for dark mode
function darkMode() {
  $("*").css({
    "color": "#80F0FF",
    "background-color": "#0C121C"
  });
  $(".link").css({
    "background-color": "#80F0FF",
    "color": "#0C121C"
  });
  $(".box").css({
    "background-color": "#80F0FF",
    "color": "#0C121C"
  });
  $(".slider:before").css({
    "background-color": "white"
  })
}

//function for clock
function updateClock(){
  const now = new Date();
  const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthName = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = dayName[now.getDay()];
  const date = now.getDate();
  const month = monthName[now.getMonth()];
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

//text display
  $("#timeOnly").text(day + " " +  date + " " + month + " " + year + ", " + hours + ':' + minutes + ':' + seconds);
  $("#time").text(day + " " +  date + " " + month + " " + year + ", " + hours + ':' + minutes + ':' + seconds);
}
