enum Escolha {
  Pedra = 'pedra',
  Papel = 'papel',
  Tesoura = 'tesoura',
}

interface ElementosDOM {
  resultado: HTMLElement
  escolhaMaquina: HTMLElement
  escolhaJogador: HTMLElement
  placarJogador: HTMLElement
  placarAdversário: HTMLElement
}

const elementos: ElementosDOM = {
  resultado: document.getElementById('resultado')!,
  escolhaMaquina: document.getElementById('escolhaMaquina')!,
  escolhaJogador: document.getElementById('escolhaJogador')!,
  placarJogador: document.getElementById('playerScore')!,
  placarAdversário: document.getElementById('computerScore')!,
}

const placar = {
  jogador: 0,
  adversário: 0,
}

function escolhaAleatoria(): Escolha {
  const escolhas = [Escolha.Pedra, Escolha.Papel, Escolha.Tesoura]
  return escolhas[Math.floor(Math.random() * escolhas.length)]
}

function determinarVencedor(escolhaJogador: Escolha, escolhaMaquina: Escolha): string {
  if (escolhaJogador === escolhaMaquina) return 'Empate!'

  const vitoriasJogador = {
    [Escolha.Papel]: Escolha.Pedra,
    [Escolha.Pedra]: Escolha.Tesoura,
    [Escolha.Tesoura]: Escolha.Papel,
  }

  if (vitoriasJogador[escolhaJogador] === escolhaMaquina) {
    placar.jogador++
    return 'Você ganhou!'
  } else {
    placar.adversário++
    return 'Adversário ganhou!'
  }
}

function atualizarPlacar(): void {
  elementos.placarJogador.textContent = placar.jogador.toString()
  elementos.placarAdversário.textContent = placar.adversário.toString()
}

function jogar(escolhaJogador: Escolha): void {
  const escolhaMaquina = escolhaAleatoria()

  elementos.escolhaJogador.textContent = escolhaJogador
  elementos.escolhaMaquina.textContent = escolhaMaquina

  const resultado = determinarVencedor(escolhaJogador, escolhaMaquina)
  elementos.resultado.textContent = resultado

  atualizarPlacar()
}

document.querySelectorAll<HTMLButtonElement>('button[data-escolha]').forEach((botao) => {
  botao.addEventListener('click', () => {
    const escolha = botao.dataset.escolha as Escolha
    jogar(escolha)
  })
})
