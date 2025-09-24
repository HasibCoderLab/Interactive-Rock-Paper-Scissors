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
let comScore = 0;

const playGame = (userChoice) => {
console.log(`User Choice is ${userChoice}`);

}

const choice = document.querySelectorAll(".choice");
choice.forEach((choice) => {
// console.log(choice);
choice.addEventListener("click" , () =>{
    const userChoice = choice.getAttribute("id");
    // console.log("Hurrah ! Clicked" , userChoice);
    playGame(userChoice);
    
});
});


