//Business Interface

function bB(userInput){
  var bBArray = [];

for (var i=0; i<=bBArray.length; i++){
  if (i.toString().includes("3")){
    bBArray.push("I'm sorry Dave, but I can't do that");
} else if (i.toString().includes("2")){
  bBArray.push("boop");
} else if ( i.toString().includes("1")){
  bBArray.push("beep");
} else {
  bBArray.push(""+ i);
  }
}
return bBArray;
};

//User Interface
$(document).ready(function(){
  $("form#beepBoop").submit(function(event){
    event.preventDefault();

    var inputBBQ1 = parseInt($("#beepBoopQuestion1").val());
    var outputBBR1 = bB(userinput);

    $("#beepBoopResponse1").text(outputBBR1);
  });
});
