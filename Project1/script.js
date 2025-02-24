"use strict";
document.addEventListener("DOMContentLoaded", function () {
  let number = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  let highScore = 0;

  document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    const displayMessage = (message) => {
      document.querySelector(".message").textContent = message;
    };

    // when there is no input
    if (score > 1) {
      if (!guess) {
        //document.querySelector(".message").textContent = "⛔ No Number !";
        displayMessage("⛔ No Number !");
      }

      // when player is win
      else if (number === guess) {
        displayMessage("🎉 conguragilations you Win!");

        // document.querySelector(".message").textContent =
        //   "🎉 conguragilations you Win!";
        document.querySelector(".number").textContent = number;
        document.querySelector("body").style.backgroundColor = "green";
        if (highScore < score) {
          highScore = score;
          document.querySelector(
            ".highscore"
          ).textContent = `🥇 Highscore : ${highScore}`;
        } else {
          document.querySelector(
            ".highscore"
          ).textContent = `🥇 Highscore : ${highScore}`;
        }
      }

      // when guess is High
      else {
        document.querySelector(".message").textContent =
          number < guess ? "Too High" : "Too Low";
        score--;
        document.querySelector(".score").textContent = `💯 Score : ${score}`;
      }
    }

    // when we lost a game
    else {
      score--;
      document.querySelector(".score").textContent = `💯 Score : ${score}`;
      displayMessage(" 😌 Sorry you Lost ....");
      // document.querySelector(".message").textContent =
      //   " 😌 Sorry you Lost ....";
      document.querySelector(".number").textContent = number;
    }
  });

  document.querySelector(".playAgain").addEventListener("click", function () {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".number").textContent = `?`;
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".score").textContent = `💯 Score : 20`;
    // document.querySelector(".message").textContent = " Start guessing...";
    displayMessage(" Start guessing...");
    document.querySelector(".guess").value = "";
  });
});
