// Business Interface
function compute(userInput){
  var array1 = [];

for (var i=0; i<=userInput; i++){
  if (i.toString().includes("3")){
  array1.push("I'm sorry Dave, but I can't do that");
} else if (i.toString().includes("2")){
  array1.push("boop");
} else if ( i.toString().includes("1")){
  array1.push("beep");
} else {
  array1.push(" " + i);
  }
}
return array1;
};

//User Interface
$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#userNumber").val());

    var output = compute(userInput);

    $(".result").text(output);
  });
});
