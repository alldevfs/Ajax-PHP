function fom() {
	var ajax ;
		if (window.XMLHttpRequest) {													//Verificando compatibilidade com os navegadores			
			ajax = new XMLHttpRequest()
		} else {
			ajax = new ActiveXObject("Microsoft.XMLHTTP")
		}

		ajax.open(
			'GET',			 																// forma de envio.
			'content/dados.txt',															// arquivo para consulta
			true																			// false para síncrona e true para assíncrona!
			);

		/*para trabalhar com estágios de ambiente é necessário alterar para assíncrono!*/
		

		ajax.onreadystatechange = function(){
			if (ajax.status == 200) {														// se pagina encontrada
				if (ajax.readyState == 2) {
					// console.log("Requisição recebida!")										
				}
				if (ajax.readyState == 3) {
					// console.log("Processando arquivos!")									
				} 
				if (ajax.readyState == 4) {
					// console.log("Requisição finalizada!")									 									
					let para   = document.getElementsByTagName('h2');
					para[0].innerHTML = ajax.responseText;									// carrega informação do arquivo
				}
			} 
					else if (ajax.status == 404) {                               					// se pagina não encontrada
						alert('Página não encontrada!')
						console.log("Achei nada não!")
					}
				}
				ajax.send();
			}