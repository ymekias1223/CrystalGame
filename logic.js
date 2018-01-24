  var targetNumber;
  var losses = 0;
  var wins = 0;

  

  var total = 0;
  var imgs = $("img");
  console.log(imgs);

  function resetGame(){
    $("#winsSpan").text(wins);
    console.log(wins,losses);
    $("#lossesSpan").text(losses);
    targetNumber = Math.floor(Math.random()*100)+20;
    $("#number-to-guess").text(targetNumber);
    console.log("reset")
    total = 0;
    $(".yourNumber span").text(total);
    for(var i=0; i<4;i++){
      console.log("for loop")
      $(imgs[i]).attr("data-crystalvalue", Math.floor(Math.random()*12) +1);
      
    }
    $(".goalNumber span").text(targetNumber);
  }
  resetGame();

  $("img").on("click",function(){
    console.log($(this).attr("data-crystalvalue"));
    total += parseInt($(this).attr("data-crystalvalue"));
    $(".yourNumber span").text(total);
    console.log(total);
    if (total>targetNumber){
      losses ++;
      console.log(losses,$("#lossesSpan"))
      resetGame();
      $("#lossesSpan").text(losses);
    }else if(total=== targetNumber){
      wins++;
      resetGame();
      console.log()
      $("#winsSpan").text(wins);

    } 

  });

  $(".btn").on("click",function(){
    console.log("name");
    resetGame();
  })