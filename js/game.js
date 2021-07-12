var ordem = [];
var ordemJ = [];
var pisca;
var turno;
var ganhando;
var turnoComp;
var intervaloId;
var estrito = true;
var sound = true;
var ligado = true;
var ganho;
var contador_de_turno = document.getElementById("contador_de_turno");
var verde = document.querySelector("#verde");
var vermelho = document.querySelector("#vermelho");
var amarelo = document.querySelector("#amarelo");
var azul = document.querySelector("#azul");
var botao_start = document.querySelector("#start");
var gen = document.querySelector('#genius');
var som = true;
var resultados;
class Sound {

	constructor(context) {
		this.context = context;
	}

	init() {
		this.oscillator = this.context.createOscillator();
		this.gainNode = this.context.createGain();
		this.oscillator.connect(this.gainNode);
		this.gainNode.connect(this.context.destination);
	}

	play(value) {
		this.init();
		this.oscillator.frequency.setValueAtTime(value, this.context.currentTime);
		this.oscillator.start();
		this.oscillator.type = "square";
		this.oscillator.stop(this.context.currentTime + 0.2);
	}
}


function init() {
	sound = new Sound(new (window.AudioContext || window.webkitAudioContext)());
}


start.addEventListener('click', (event) => {
  ligado = true;
  if (ligado || ganho) {
    jogar();
  }
});

function jogar() {
  ganho = false;
  ordem = [];
  ordemJ= [];
  pisca = 0;
  intervaloId = 0;
  turno = 1;
  resultado = 0;
  contador_de_turno.innerHTML = 1;
  ganhando = true;
  gen.style.backgroundImage = ("url(css/genius_preto.png)")
  for (var i = 0; i < 20; i++) {
    ordem.push(Math.floor(Math.random()*10) % 4);
  }
  turnoComp = true;
  intervaloId = setInterval(turnoGame, 800);
}

function turnoGame() {
  ligado = false;

  if (pisca == turno) {
    clearInterval (intervaloId);
    turnoComp = false;
    limpaCor();
    ligado = true;
  }

  if (turnoComp) {
    limpaCor();
    setTimeout(() => {
      if (ordem[pisca] == 1) um();
      if (ordem[pisca] == 2) dois();
      if (ordem[pisca] == 3) tres();
      if (ordem[pisca] == 4) quatro();
      pisca++;
    }, 200);
gen.style.backgroundImage = ("url(css/genius_preto.png)")
  }
}

function um() {
  if (som) {
    sound.play(164.813);
  }
  som = true;
  verde.style.backgroundImage = `url(css/verde_ativo.png)`;
}

function dois() {
  if (som) {
  sound.play(277.183);
  }
  som = true;
  vermelho.style.backgroundImage = `url(css/vermelho_ativo.png)`;
}

function tres() {
  if (som) {
    sound.play(440);
  }
  som = true;
  amarelo.style.backgroundImage = `url(css/amarelo_ativo.png)`;
}

function quatro() {
  if (som) {
    sound.play(82.407);
  }
  som = true;
  azul.style.backgroundImage = `url(css/azul_ativo.png)`;
}

function limpaCor() {
  verde.style.backgroundImage = `url(css/verde.png)`;
  vermelho.style.backgroundImage = `url(css/vermelho.png)`;
  amarelo.style.backgroundImage = `url(css/amarelo.png)`;
  azul.style.backgroundImage = `url(css/azul.png)`;
}

function piscaCor() {
  verde.style.backgroundImage = `url(css/verde_ativo.png)`;
  vermelho.style.backgroundImage = `url(css/vermelho_ativo.png)`;
  amarelo.style.backgroundImage = `url(css/amarelo_ativo.png)`;
  azul.style.backgroundImage = `url(css/azul_ativo.png)`;
}

verde.addEventListener('click', (event) => {
  if (ligado) {
    ordemJ.push(1);
    check();
    um();
    if(!ganhando) {
      setTimeout(() => {
        limpaCor();
      }, 300);
    }
  }
})

vermelho.addEventListener('click', (event) => {
  if (ligado) {
    ordemJ.push(2);
    check();
    dois();
    if(!ganho) {
      setTimeout(() => {
        limpaCor();
      }, 300);
    }
  }
})

amarelo.addEventListener('click', (event) => {
  if (ligado) {
    ordemJ.push(3);
    check();
    tres();
    if(!ganho) {
      setTimeout(() => {
        limpaCor();
      }, 300);
    }
  }
})

azul.addEventListener('click', (event) => {
  if (ligado) {
    ordemJ.push(4);
    check();
    quatro();
    if(!ganho) {
      setTimeout(() => {
        limpaCor();
      }, 300);
    }
  }
})

function check() {
  if (ordemJ[ordemJ.length - 1] !== ordem[ordemJ.length - 1])
    ganhando = false;

  if (ordemJ.length == 20 && ganhando) {
    ganhouJogo();
  }

  if (ganhando == false) {
    piscaCor();
    contador_de_turno.innerHTML = "Errado";
    gen.style.backgroundImage = ("url(css/genius_vermelho.png)")
    setTimeout(() => {
      contador_de_turno.innerHTML = turno;
      limpaCor();
      if (estrito) {
        jogar();
      }
    }, 800);

    som = false;
  }

  if (turno == ordemJ.length && ganhando && !ganho) {
    turno++;
    ordemJ = [];
    turnoComp = true;
    pisca = 0;
    contador_de_turno.innerHTML = turno;
    intervaloId = setInterval(turnoGame, 800);
    resultado = turno;
    gen.style.backgroundImage = ("url(css/genius_verde.png)")
  }

}

function ganhouJogo() {
  piscaCor();
  contador_de_turno.innerHTML = "Ganhou!";
  ligado = false;
  ganho = true;
}

//nao entendi como mostrarria o resultado
function mostrarResultado(){
var resultados = document.createElement('p');
resultados = novo;
resultados = 0;
novo.innerHTML = 'resultado: ' + novo;
 resul.appendChild(novo);
}
