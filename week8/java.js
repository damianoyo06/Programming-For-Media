class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greet(greetElement){

    greetElement.html("Hello " + this.name);
  }
  calculate(ageElement){
    ageElement.html("You are " + this.age + "years old.");

  }
}


class TrafficLights{


  size(){

  }
}

$(document).ready(function(){
  $("#button").click(function(){
    let personName = new Person($("#name").val(), $("#age").val());
    personName.greet($("#greet"));
    personName.calculate($("#calculate"));


})
});
