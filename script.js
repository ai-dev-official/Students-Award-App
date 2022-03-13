function showAchievement() {
    let x = document.getElementById("award").value;


    if (x == "30%") {
        document.getElementById("modal-title").innerHTML = "<h4>30% Welldone!</h4>";
        document.getElementById("modal-body").innerHTML = "<img src='./img/1.jpeg' alt=''>";
    } else if (x == "50%") {
        document.getElementById("modal-title").innerHTML = "<h4>50% Welldone!</h4>";
        document.getElementById("modal-body").innerHTML = "<img src='./img/3.jpeg' alt=''>";
    } else if (x == "70%") {
        document.getElementById("modal-title").innerHTML = "<h4>70% Welldone!</h4>";
        document.getElementById("modal-body").innerHTML = "<img src='./img/2.jpeg' alt=''>";
    } else if (x == "100%") {
        document.getElementById("modal-title").innerHTML = "<h4>100% Welldone!</h4>";
        document.getElementById("modal-body").innerHTML = "<img src='./img/4.jpeg' alt=''>";
    }



}