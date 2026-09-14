let refreshText = document.querySelector('h1');

function rollTheDice1(){
    let randomNumber1 = Math.floor( Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute('src',`./images/dice${randomNumber1}.png`);
    return randomNumber1;
}
function rollTheDice2(){
    let randomNumber2 = Math.floor( Math.random() * 6) + 1;
    document.querySelector(".img2").setAttribute('src',`./images/dice${randomNumber2}.png`);
    return randomNumber2;
}

function refresh(){
    let dice1 = rollTheDice1();
    let dice2 = rollTheDice2();

    if (dice1 > dice2){
        document.querySelector('h1').innerHTML = "&#x1F6A9 Player 1 Wins!";
    } else if (dice1 < dice2){
        document.querySelector('h1').innerHTML = "Player 2 Wins! &#x1F6A9";
    } else {
        document.querySelector('h1').innerHTML = "Draw!";
    }

}
refreshText.addEventListener('click', refresh);
refresh();

