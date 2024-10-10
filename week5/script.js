let randomMovie = [
  "img/joker.jpg",
  "img/oppenheimer.jpg",
  "img/kogel.jpg"
]


$(document).ready(function(){
  $("#button").click(function(){
     $("#image").attr("src", randomMovie[Math.floor(Math.random()*3)]);
  });
});
