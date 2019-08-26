//Business Interface
for (var i = 0; i < array.length; i++) {
  array[i]
}  if (i === 1)  {
  return "beep";
} else if (i === 2)  {
  return "boop";
} else if ( i === 3)  {
  return "I'm sorry Dave, but I can't do that";
}

//User Interface
$(document).ready(function(){
  $("form#beepBoop").submit(function(event){
    event.preventDefault();

    var inputBBQ1 = parseInt($("#beepBoopQuestion1").val());
    var outputBBR1 =

    $("#beepBoopResponse1").text(outputBBR1);ß

  });
});
