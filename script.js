let imgs = document.querySelectorAll("img");
let h2Tag = document.getElementById("head");
let counter  = 1 ;
imgs.forEach((image) => {
    image.addEventListener("click",() => {
        console.log("ah click marse");
        h2Tag.textContent = `Hello ${counter}`;
       counter++
    })
})