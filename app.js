let startBtn = document.querySelector(".start-btn")
let AllBoxes = document.querySelectorAll(".box")
let GameStartLabel = document.querySelector("h3")

function getRandColor()
{
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
}


console.log(startBtn)

let GameStarted = false

startBtn.addEventListener("click",function(){
    game()
})





function game()
{

    AllBoxes.forEach(element => {
        

        let RandomColor = getRandColor()

        element.style.backgroundColor = RandomColor
        GameStartLabel.innerHTML = RandomColor

        element.addEventListener("click",function(){
            console.log("zd")
            console.log(element.style.backgroundColor)
            console.log(GameStartLabel.innerHTML)
            if(element.style.backgroundColor == GameStartLabel.innerHTML)
            {
                alert("winner here")
            }
        })

    });


}



