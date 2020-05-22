const range = 300;
const answer = Math.ceil(Math.random() * range);
console.log(answer);

const inputtag = document.getElementById("input");
const resultdiv = document.getElementById("result");
const formbtn = document.getElementById("formBtn");
const displayLife = document.getElementById("lifecnt");

let wrongAns = 0;
let gotAns = 0;

let life = 3;
formbtn.onclick = (event) => {
    life -= 1;
    displayLife.textContent = life;
    event.preventDefault();
    if (wrongAns > 10 || gotAns) return;
    const userAnswer = Number(inputtag.value);
    const result = document.createElement("h2");
    result.textContent = userAnswer + " --> ";
    if (userAnswer === answer) {
        result.textContent += "Answer";
        alert("You are correct!");
        gotAns = 1;
    } else {
        if(life>0) {
            wrongAns += 1;
            userAnswer > answer ?
                (result.textContent += "Down") :
                (result.textContent += "Up");
        } 
        else {
            alert("You failed! The answer is " + answer);
            history.go(0);
        }
    }
    resultdiv.append(result);
    inputtag.value = "";
};