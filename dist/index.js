"use strict";
var Escolha;
(function (Escolha) {
    Escolha["Pedra"] = "pedra";
    Escolha["Papel"] = "papel";
    Escolha["Tesoura"] = "tesoura";
})(Escolha || (Escolha = {}));
var elementos = {
    resultado: document.getElementById('resultado'),
    escolhaMaquina: document.getElementById('escolhaMaquina'),
    escolhaJogador: document.getElementById('escolhaJogador'),
    placarJogador: document.getElementById('playerScore'),
    placarAdversário: document.getElementById('computerScore'),
};
var placar = {
    jogador: 0,
    adversário: 0,
};
function escolhaAleatoria() {
    var escolhas = [Escolha.Pedra, Escolha.Papel, Escolha.Tesoura];
    return escolhas[Math.floor(Math.random() * escolhas.length)];
}
function determinarVencedor(escolhaJogador, escolhaMaquina) {
    var _a;
    if (escolhaJogador === escolhaMaquina)
        return 'Empate!';
    var vitoriasJogador = (_a = {},
        _a[Escolha.Papel] = Escolha.Pedra,
        _a[Escolha.Pedra] = Escolha.Tesoura,
        _a[Escolha.Tesoura] = Escolha.Papel,
        _a);
    if (vitoriasJogador[escolhaJogador] === escolhaMaquina) {
        placar.jogador++;
        return 'Você ganhou!';
    }
    else {
        placar.adversário++;
        return 'Adversário ganhou!';
    }
}
function atualizarPlacar() {
    elementos.placarJogador.textContent = placar.jogador.toString();
    elementos.placarAdversário.textContent = placar.adversário.toString();
}
function jogar(escolhaJogador) {
    var escolhaMaquina = escolhaAleatoria();
    elementos.escolhaJogador.textContent = escolhaJogador;
    elementos.escolhaMaquina.textContent = escolhaMaquina;
    var resultado = determinarVencedor(escolhaJogador, escolhaMaquina);
    elementos.resultado.textContent = resultado;
    atualizarPlacar();
}
document.querySelectorAll('button[data-escolha]').forEach(function (botao) {
    botao.addEventListener('click', function () {
        var escolha = botao.dataset.escolha;
        jogar(escolha);
    });
});
