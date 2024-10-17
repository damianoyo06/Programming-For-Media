$(document).ready(function(){

var images = ["url(img/piano.jpg)", "url(img/drums.jpg)", "url(img/triangle.jpg)", "url(img/trombone.jpg)", "url(img/violin.jpg)"]


let wrapper = $(".wrapper");


  let i = 0;

//https://www.w3schools.com/js/js_timing.asp
  setInterval(
    function()
    {

        i++;

        if(i == images.length - 1)
        {
          i = 0;
        }
          changeInstrument(images[i])
    }, 3000);


function changeInstrument(image){
  wrapper.css("background-image", image);
  console.log(image);
}
});
