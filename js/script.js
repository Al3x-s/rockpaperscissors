var game_count = 0;
var computer_count = 0;
var player_count = 0;

const current_player_win = document.getElementById("playercounter");
const current_round = document.getElementById("gamecounter");
const current_computer_wins = document.getElementById("computer--counter");

function play() {
  //////////////////////////     COMPUTER CHOICE           /////////////
  let comp_list = ["rock", "paper", "scissors"];
  let number = Math.floor(Math.random() * 3);
  let computer_choice_done = comp_list[number];
  $("#computerChoice").text(computer_choice_done);
  ////////////////////////   CHECK INPUT SECTION         ////////////////
  let choice = document.getElementById("input").value;
  let choices = [
    "rock",
    "Rock",
    "ROCK",
    "paper",
    "Paper",
    "PAPER",
    "scissors",
    "Scissors",
    "SCISSORS"
  ];
  let include_check = choices.includes(choice);
  if (include_check == false) {
    $("#result").text("please enter a correct answer choice");
    $("#computerChoice").text("");
    console.log("made it here");
  } else if (include_check == true) {
    $("#userChoice").text(choice.toLowerCase());
    $("#result").text("");
  }

  ///////////////////////   ACTUAL GAME   //////////////////////////////
  if (choice === computer_choice_done) {
    $("#result").text("its a tie");
    $("body").css("background-color", "grey");
    console.log("tie");
  } else if (choice == "rock") {
    if (computer_choice_done == "paper") {
      $("#result").text("you lose");
      $("body").css("background-color", "red");
      computer_count++;
    } else {
      $("#result").text("you win");
      $("body").css("background-color", "green");
      player_count++;
    }
  } else if (choice == "paper") {
    if (computer_choice_done == "scissors") {
      $("#result").text("you lose");
      $("body").css("background-color", "red");
      computer_count++;
    } else {
      $("#result").text("you win");
      $("body").css("background-color", "green");
      player_count++;
    }
  } else if (choice == "scissors") {
    if (computer_choice_done == "rock") {
      computer_count++;
      $("#result").text("you lose");
      $("body").css("background-color", "red");
    } else if (computer_choice_done == "paper") {
      $("#result").text("you win");
      $("body").css("background-color", "green");
      player_count++;
    }
  }
  game_count++;
}

$("#shoot").click(function() {
  play();
  current_computer_wins.innerHTML = computer_count;
  current_round.innerHTML = game_count;
  current_player_win.innerHTML = player_count;
  $("#input").val("");
});

$("#refresh").click(function() {
  game_count = 0;
  current_round.innerHTML = game_count;
  computer_count = 0;
  current_computer_wins.innerHTML = computer_count;
  player_count = 0;
  current_player_win.innerHTML = player_count;
  $("body").css("background-color", "grey");
  $("#result").text("");
  $("#computerChoice").text("");
  $("#userChoice").text("");
});
