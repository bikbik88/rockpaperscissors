 function rps(p1, p2) {
    if (p1 === p2) {
        return "Tie game";
    } else if (p1 === "rock" && p2 === "paper") {
        return "p2 wins";
    }
    else if (p1==="paper" && p2==="scissors"){
        return "p2 wins";
    } else if (p1==="scissors" && p2==="rock") {
        return "p2 wins";
    }else if (p1 === "paper" && p2 === "rock") {
        return "p1 wins";
    }
    else if (p1==="scissors" && p2==="paper"){
        return "p1 wins";
    } else if (p1==="rock" && p2==="scissors") {
        return "p1 wins";
    }

}
