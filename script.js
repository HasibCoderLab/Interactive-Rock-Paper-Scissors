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
    msg.innerText = "Game Was Deaw";

};
const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win");
        msg.innerText = "Win";

    } else {
        console.log("You Loos");
        msg.innerText = "Loos";

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
        showWinner(userWin);
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


