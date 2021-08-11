let userscore = 0;
let computerscore = 0;
const whowins = document.querySelector("#whowins");
const score = document.querySelector("#score");
function startgame(e) {
    let userchoice = e;
    let computerchoices = ["rock", "paper", "scissors"];
    let computerchoice = computerchoices[Math.floor(Math.random() * 3)];
    let winner = compare(userchoice, computerchoice);
    whowins.classList = " ";

    if (winner == "user") {
        whowins.innerHTML = winner + " wins";
        whowins.classList.add("win");
    } else if (winner == "computer") {
        whowins.innerHTML = winner + " wins";
        whowins.classList.add("lose");
    } else {
        whowins.innerHTML = winner;
        whowins.classList.add("tie");
    }

    score.innerHTML = `<span class="sides">user: ${userscore}</span> 
    <span class="sides">computer: ${computerscore}</span>`;
}

function compare(choice1, choice2) {
    if (choice1 == choice2) {
        return "its a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors"){
            userscore++;   return "user";
        }
        else if (choice2 === "paper") {
            computerscore++;    return "computer";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "scissors") {
            computerscore++;   return "computer"
        }
        else if (choice2 === "rock") {
            userscore++;   return "user";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            userscore++;    return "user"
        }
        else if (choice2 === "rock"){
            computerscore++;    return "computer";
        }
    }
}