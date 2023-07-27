let btn = document.getElementById('btn-description');
let textValid = document.getElementById('valid-till');
let threeTimes = document.getElementById('color-descript');

let ball1 = document.getElementById('bola');
let ball2 = document.getElementById('bola-two');
let ball3 = document.getElementById('bola-three');
let ball4 = document.getElementById('bola-fourth');
let ball5 = document.getElementById('bola-fifth');

const balls = [
    ball1,
    ball2,
    ball3,
    ball4,
    ball5,
];

const shuffledBalls = balls
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 2);



shuffledBalls.forEach((ball) => ball.style.display = 'none');


let countdown = 60;

let countdownTimer = null;

const atualizarBotao = () => {
    countdown--

    btn.innerText = countdown;
    if (countdown === 0){
        finishCountdownTimer();
    }
}

const finishCountdownTimer = () =>{
    clearInterval(countdownTimer);

    btn.disabled = false;
    btn.innerText = 'JOGAR';
    countdown = 60;
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    btn.disabled = true;
    countdownTimer = setInterval(atualizarBotao, 1000);
    textValid.innerText = '01:00 MINUTO';
    threeTimes.innerText = '3 TENTATIVAS';
});

btn.addEventListener('click', function() {
    shuffledBalls.forEach((ball) => ball.style.display = 'inline-block');
});