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
// console.log(choice);

const genCompChoice = () => {
    const Items = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3)
    return Items[randomIdx];
}

const playGame = (userChoice) => {
    console.log(`user Choice is ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`comp Choice is ${compChoice}`);

}
choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        // console.log("click");
        const userChoice = choice.getAttribute("id")
        // console.log("Your choice is ", userChoice);

        playGame(userChoice);

    });
});


