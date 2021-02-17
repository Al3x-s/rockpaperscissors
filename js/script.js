var count = 0;
var xcount = 0;
var ocount = 0;
const owins = document.getElementById("O-player-Wins");
const xwins = document.getElementById("X-player-Wins");
//////////////////////////////////////////////////////////////////////////////////////////
function xwin() {
  $("h1").text("Player X wins!");
  xcount = xcount + 1;
  $("[id^=button]").hide();
  xwins.innerHTML = xcount;
}

function owin() {
  $("h1").text("Player O wins!");
  ocount = ocount + 1;
  $("[id^=button]").hide();
  owins.innerHTML = ocount;
}


/////////////////////////////////////////////////////////////////////////////////////////////
function performLogic(button, tile) {
  count = count + 1;
  $(button).hide();
  let ticchoice;
  if (count % 2 == 0) {
    ticchoice = "x";
  } else {
    ticchoice = "o";
  }
  $(tile).find("span").text(ticchoice);
  if (count == 9) {
    $("h1").text("Its a Tie!");
  }
  
  /////////////////////////////////////////////////////////////////////////////////////////
  var t1 = document.getElementById("tile1");
  var t2 = document.getElementById("tile2");
  var t3 = document.getElementById("tile3");
  var t4 = document.getElementById("tile4");
  var t5 = document.getElementById("tile5");
  var t6 = document.getElementById("tile6");
  var t7 = document.getElementById("tile7");
  var t8 = document.getElementById("tile8");
  var t9 = document.getElementById("tile9");
    
  function compare(x, y){
    var xtext = $(x).find("span").text();
    var ytext = $(y).find("span").text();
    return xtext === ytext
  }
  //////////////////////////////////////////////////////////////////////////////////
  if (compare(t1,t5) && compare(t5,t9)) {
    if (count % 2 == 0) {
      xwin();
    } else {
      owin();
    }
  } else if (t7.innerHTML == t5.innerHTML && t5.innerHTML == t3.innerHTML) {
    if (count % 2 == 0) {
      xwin();
    } else {
      owin();
    }
  } else if (t1.innerHTML === t2.innerHTML && t2.innerHTML === t3.innerHTML) {
    if (count % 2 == 0) {
      xwin();
    } else {
      owin();
    }
  } else if (t4.innerHTML === t5.innerHTML && t5.innerHTML == t6.innerHTML) {
    if (count % 2 == 0) {
      xwin();
    } else {
      owin();
    }
  } else if (t7.innerHTML == t8.innerHTML && t8.innerHTML == t9.innerHTML) {
    if (count % 2 == 0) {
      xwin();
    } else {
      owin();
    }
  } else if (t1.innerHTML == t4.innerHTML && t4.innerHTML == t7.innerHTML) {
    if (count % 2 == 0) {
      xwin();
    } else {
      owin();
    }
  } else if (t2.innerHTML == t5.innerHTML && t5.innerHTML == t8.innerHTML) {
    if (count % 2 == 0) {
      xwin();
    } else {
      owin();
    }
  } else if (t3.innerHTML == t6.innerHTML && t6.innerHTML == t9.innerHTML) {
    if (count % 2 == 0) {
      xcount = xcount + 1;
    } else {
      owin();
    }
  }
}
///

/////////////////////////////////////////////////////////////////////////////////////////////////
$("#button1").click(function() {
  performLogic("#button1", "#tile1");
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
});

$(".undo").click(function() {
  count = 0;
  $("[id^=text]").text(null);
  $("[id^=button]").show();
  $("h1").text("Tic Tac Toe")
});


$(".resetbutton").click(function(){
  location.reload();
});