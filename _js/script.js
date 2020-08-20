var tesoura = false;
var pedra = false;
var papel = false;

//função que seleciona a imagem pedra
function selecionaPedra() { 
    document.getElementsByClassName("imagem_pedra")[0].src="_images/pedra_marcada.png";
    document.getElementsByClassName("imagem_tesoura")[0].src="_images/tesoura.png";
    document.getElementsByClassName("imagem_papel")[0].src="_images/papel.png";

    tesoura = false;
    pedra = true;
    papel = false;
}
//função que seleciona a imagem papel
function selecionaPapel() { 
    document.getElementsByClassName("imagem_papel")[0].src="_images/papel_marcada.png";
    document.getElementsByClassName("imagem_pedra")[0].src="_images/pedra.png";
    document.getElementsByClassName("imagem_tesoura")[0].src="_images/tesoura.png";

    tesoura = false;
    pedra = false;
    papel = true;
}
//função que seleciona a imagem tesoura
function selecionaTesoura() { 
    document.getElementsByClassName("imagem_tesoura")[0].src="_images/tesoura_marcada.png";
    document.getElementsByClassName("imagem_pedra")[0].src="_images/pedra.png";
    document.getElementsByClassName("imagem_papel")[0].src="_images/papel.png";

    tesoura = true;
    pedra = false;
    papel = false;
}


function realizarJogada() { 
    //verificação se uma opção foi selecionada
    if(tesoura == false && pedra == false && papel == false) { 
        alert('Favor escolher uma das opções!')
    } else {
		var resultadoSorteio = Math.floor(Math.random() * 3 );
		switch (resultadoSorteio) { 
			case 0: 
			resultadoSorteio = 'pedra'
				document.getElementById("fotoComputador").src = "_images/pedra.png";
				break;
			case 1: 
			resultadoSorteio = 'tesoura'
				document.getElementById("fotoComputador").src = "_images/tesoura.png";
				break;            
			case 2: 
			resultadoSorteio = 'papel'
				document.getElementById("fotoComputador").src = "_images/papel.png";
				break;
		}
		if(tesoura == true) { 
			document.getElementById("fotoUsuario").src = "_images/tesoura.png";
		} else if(papel == true) { 
			document.getElementById("fotoUsuario").src = "_images/papel.png";
		} else { 
			document.getElementById("fotoUsuario").src = "_images/pedra.png";
		}
		
		//condições que o jogador vence
		if ((pedra == true && resultadoSorteio == 'tesoura') 
		|| (tesoura == true && resultadoSorteio == 'papel') 
		|| (papel == true && resultadoSorteio == 'pedra'))  { 
			document.getElementById("ganhador").innerHTML = "Usuário venceu.";
		} 
		//condições que a máquina vence  
		else if((resultadoSorteio == 'pedra' && tesoura == true) 
		|| (resultadoSorteio == 'tesoura' && papel == true) 
		|| (resultadoSorteio == 'papel' && pedra == true)) { 
			document.getElementById("ganhador").innerHTML = "Computador venceu.";
		} 
		//se nenhum dos dois vence, será um empate
		else { 
			document.getElementById("ganhador").innerHTML = "Houve empate.";
		}
	}
}
