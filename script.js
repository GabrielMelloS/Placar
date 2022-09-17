function calculaPontos(jogadorx) {
  var pontos = jogadorx.vitorias * 3 + jogadorx.empates;
  return pontos;
}

var listaJogadores = [];
console.log(jogador1);
console.log(jogador2);

function exibeJogadoresNaTela(listaJogadores) {
  var elemento = "";
  for (var i = 0; i < listaJogadores.length; i++) {
    elemento += "<tr> <td>" + listaJogadores[i].nome + "</td>";
    elemento += "<td>" + listaJogadores[i].vitorias + "</td>";
    elemento += "<td>" + listaJogadores[i].empates + "</td>";
    elemento += "<td>" + listaJogadores[i].derrotas + "</td>";
    elemento += "<td>" + listaJogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionaVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadore = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(listaJogadores);

function adicionaVitoria(i) {
  var jogador = listaJogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(listaJogadores);
}
function adicionarDerrota(i) {
  var jogador = listaJogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(listaJogadores);
}
function adicionarEmpate(i) {
  var jogador = listaJogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(listaJogadores);
}
function adicionarJogador() {
  var novoJogador = document.getElementById("player").value;
  var jogadorx = new Object();
  jogadorx.nome = novoJogador;
  jogadorx.vitorias = 0;
  jogadorx.empates = 0;
  jogadorx.derrotas = 0;
  jogadorx.pontos = 0;
  listaJogadores.push(jogadorx);
  exibeJogadoresNaTela(listaJogadores);
}
function verificaCampeao() {
  for (var i = 0; i < listaJogadores.length; i++) {
    var maximo = 0;
    var indiceFinal = 0;
    if (listaJogadores[i].pontos >= maximo) {
      maximo = listaJogadores[i].pontos;
      indiceFinal = i;
    }
  }
  return indiceFinal;
}