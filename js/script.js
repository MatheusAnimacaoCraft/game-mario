const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const gameOver = document.querySelector('.game-over');
const start = document.querySelector('.start');

//som mario

marioUp = new Audio('./musica/mario up.mp3');
musicaMario = new Audio('./musica/mario musica.mp3');
gameOVerMa = new Audio('./musica/game over mario.mp3');


// eventos

let loop;

const startGame = () => {
    pipe.classList.add('pipe-animation');
    start.style.display = 'none';
    musicaMario.play();

    loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
        if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = './Imagen/game-over.png';
            mario.style.width = '65px';
            mario.style.marginLeft = '50px';
    
            gameOver.style.display = 'flex';
            gameOver.style.display = 'block';
            
            playGameover();
            stopAudio()

            function stopAudio(){
                musicaMario.pause();
            }
            function playGameover(){
                gameOVerMa.play();
            }
    
            clearInterval(loop);
        }
    }, 10);
};

const restartGame = () => {
    gameOver.style.display = 'none';

    pipe.style.left = '';
    pipe.style.animation = '';
    mario.style.animation = '';

    pipe.classList.add('pipe-animation');

    mario.src = './Imagen/mario.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0';

    start.style.display = 'none';

    gameOVerMa.pause();
    gameOVerMa.currentTime = 0;

    musicaMario.play();
    musicaMario.currentTime = 0;

    startGame();
};

const jump = () => {
    marioUp.play();
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); // 500 milissegundos = 0,5 segundos
};

document.addEventListener('keydown', jump);

document.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        startGame();
    }
});