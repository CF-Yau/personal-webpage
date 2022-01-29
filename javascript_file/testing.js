
/* canvas */

function clear_canvas1(){
  var canvas = document.getElementById("display_credits");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function show_year_credits(year) {

  clear_canvas1();
  var canvas = document.getElementById("display_credits");
  var ctx = canvas.getContext("2d");
  ctx.font = "50px Arial";
  ctx.fillStyle = "green";
  ctx.textAlign = "center";

  if (year==1) {
    ctx.fillText("29", canvas.width/2, canvas.height/2);
  }
  else if (year==2) {
    ctx.fillText("49", canvas.width/2, canvas.height/2);
  }
  else if (year==3) {
    ctx.fillText("51", canvas.width/2, canvas.height/2);
  }
}

function show_total_credits() {
  clear_canvas1();
  var canvas = document.getElementById("display_credits");
  var ctx = canvas.getContext("2d");
  ctx.font = "50px Arial";
  ctx.fillStyle = "green";
  ctx.textAlign = "center";
  ctx.fillText("150", canvas.width/2, canvas.height/2);
}
