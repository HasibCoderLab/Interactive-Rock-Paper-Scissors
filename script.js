// let imgs = document.querySelectorAll("img");
// let h2Tag = document.getElementById("head");
// let counter  = 1 ;
// imgs.forEach((image) => {
//     image.addEventListener("click",() => {
//         console.log("ah click marse");
//         h2Tag.textContent = `Hello ${counter}`;
//        counter++
//     })
// })

let userScore = 0;
let compStore = 0;
const choice = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
// console.log(choice);

// ===============| Coumputer Choice |================
const genCompChoice = () => {
    const Items = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3)
    // console.log(randomIdx);  
    return Items[randomIdx];
}
const drawGame = () => {
    console.log("Game is Draw");
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "#081b31"


};
// ====================|     Show winner     |============
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win");
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        console.log("You Lose.");
        msg.innerText = `You Lost . ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red"


    }

}
// ===============| User Choice |================
const playGame = (userChoice) => {
    console.log(`user Choice is ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`comp Choice is ${compChoice}`);
    if (userChoice === compChoice) {
        drawGame()
    }
    // ==========| Condition  |==========
    else {
        let userWin = true;


        if (userChoice === "rock") {
            // scissors , paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // rock  scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, userChoice, compChoice);
    }

}



// ===============| Event  Handler |================
choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        // console.log("click");
        const userChoice = choice.getAttribute("id")
        // console.log("Your choice is ", userChoice);
        playGame(userChoice);


    });
});


