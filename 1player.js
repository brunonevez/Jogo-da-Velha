let casas = [
	0, 1, 2,
	3, 4, 5,
	6, 7, 8,
]
let turno = 0;
		
			function jogada(posicao) {
				
					if (casas[posicao] == posicao) {
						if (turno == 0) {
							casas[posicao] = 'X';
							document.getElementById('turno').innerHTML = 'jogador O';
							document.getElementById(posicao).innerHTML = 'X';
							turno++;
						}
						if (turno != 0) {
							var teste = Math.floor(Math.random() * 8);
							console.log(teste);
							if (casas[teste] === teste) {
								casas[teste] = 'O';
								document.getElementById('turno').innerHTML = 'jogador X';
								document.getElementById(teste).innerHTML = 'O';
								turno--;
							} else {
								turno = 1;
								jogada();
							}
							casas.forEach(valida => {
								if(casas[valida] == 'X' || casas[valida] == 'O' ){
									console.log('emptate');
								}
							});
				
							//condição jogar 1	
							if (casas[0] == 'X' && casas[3] == 'x' && casas[6] == 'X') {
								document.getElementById('vencedor').innerHTML = 'X ganhou';
								placar()
							}
							if (casas[6] == 'X' && casas[7] == 'x' && casas[8] == 'X') {
								document.getElementById('vencedor').innerHTML = 'X ganhou';
								placar()
							}
							if (casas[3] == 'X' && casas[4] == 'X' && casas[5] == 'X') {
								document.getElementById('vencedor').innerHTML = 'X ganhou';
								placar()
							}
							if (casas[8] == 'X' && casas[5] == 'X' && casas[2] == 'X') {
								document.getElementById('vencedor').innerHTML = 'X ganhou';
								placar()
							}
							if (casas[0] == 'X' && casas[1] == 'X' && casas[2] == 'X') {
								document.getElementById('vencedor').innerHTML = 'X ganhou';
								placar()
							}
							if (casas[0] == 'X' && casas[4] == 'X' && casas[8] == 'X') {
								document.getElementById('vencedor').innerHTML = 'X ganhou';
								placar()
							}
							if (casas[2] == 'X' && casas[4] == 'X' && casas[6] == 'X') {
								document.getElementById('vencedor').innerHTML = 'X ganhou';
								placar()
							}
							if (casas[1] == 'X' && casas[4] == 'X' && casas[7] == 'X') {
								document.getElementById('vencedor').innerHTML = 'X ganhou';
								placar()
							}
							//condição jogar 0	
							if (casas[0] == 'O' && casas[3] == 'O' && casas[6] == 'O') {
								document.getElementById('vencedor').innerHTML = 'O ganhou';
								placar()
							}
							if (casas[6] == 'O' && casas[7] == 'O' && casas[8] == 'O') {
								document.getElementById('vencedor').innerHTML = 'O ganhou';
								placar()
							}
							if (casas[3] == 'O' && casas[4] == 'O' && casas[5] == 'O') {
								document.getElementById('vencedor').innerHTML = 'O ganhou';
								placar()
							}
							if (casas[8] == 'O' && casas[5] == 'O' && casas[2] == 'O') {
								document.getElementById('vencedor').innerHTML = 'O ganhou';
								placar()
							}
							if (casas[0] == 'O' && casas[1] == 'O' && casas[2] == 'O') {
								document.getElementById('vencedor').innerHTML = 'O ganhou';
								placar()
							}
							if (casas[0] == 'O' && casas[4] == 'O' && casas[8] == 'O') {
								document.getElementById('vencedor').innerHTML = 'O ganhou';
								placar()
							}
							if (casas[2] == 'O' && casas[4] == 'O' && casas[6] == 'O') {
								document.getElementById('vencedor').innerHTML = 'O ganhou';
								placar()
							}
							if (casas[1] == 'O' && casas[4] == 'O' && casas[7] == 'O') {
								document.getElementById('vencedor').innerHTML = 'O ganhou';
								placar()
							}
				
							if (casas[0] != 'O' && casas[3] != 'O' && casas[6] != 'O' &&
								casas[6] != 'O' && casas[7] != 'O' && casas[8] != 'O' &&
								casas[3] != 'O' && casas[4] != 'O' && casas[5] != 'O' &&
								casas[8] != 'O' && casas[5] != 'O' && casas[2] != 'O' &&
								casas[0] != 'O' && casas[1] != 'O' && casas[2] != 'O' &&
								casas[0] != 'O' && casas[4] != 'O' && casas[8] != 'O' &&
								casas[2] != 'O' && casas[4] != 'O' && casas[6] != 'O' ||
								casas[0] != 'X' && casas[3] != 'X' && casas[6] != 'X' &&
								casas[6] != 'X' && casas[7] != 'X' && casas[8] != 'X' &&
								casas[3] != 'X' && casas[4] != 'X' && casas[5] != 'X' &&
								casas[8] != 'X' && casas[5] != 'X' && casas[2] != 'X' &&
								casas[0] != 'X' && casas[1] != 'X' && casas[2] != 'X' &&
								casas[0] != 'X' && casas[4] != 'X' && casas[8] != 'X' &&
								casas[2] != 'X' && casas[4] != 'X' && casas[6] != 'X' 
								){
									console.log('empate');
								}
				
				
							//condição de empate
				
							// if (casas[0] == 'O' && casas[0] == 'X' &&
							// 	casas[1] == 'O' && casas[1] == 'X' &&
							// 	casas[2] == 'O' && casas[2] == 'X' &&
							// 	casas[3] == 'O' && casas[3] == 'X' &&
							// 	casas[4] == 'O' &&casas[4] == 'X' &&
							// 	casas[5] == 'O' && casas[5] == 'X' &&
							// 	casas[6] == 'O' && casas[6] == 'X' &&
							// 	casas[7] == 'O' && casas[7] == 'X' &&
							// 	casas[8] == 'O' && casas[8] == 'X') {
							// 	document.getElementById('vencedor').innerHTML = 'empate';
							// }
				
						}
					}	
				
								
			}	
			function jogardenovo(){
				console.log(casas);
				for (let casa = 0; casa < casas.length; casa++) {
					casas[casa] = casa;
					console.log(casas);
					document.getElementById(casa).innerHTML = '';
				}
				document.querySelector('.winner').style.display = 'none';
			}

			function placar(){
				var placar = document.querySelector('.winner');
				document.querySelector('.winner').style.display = 'flex';
				placar.classList.toggle('active');
			}