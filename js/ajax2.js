
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
	ajax.send();

	ajax.onreadystatechange = function(){
	//console.log(ajax.readyState);
	if (ajax.status == 200) {														// se pagina encontrada
		if (ajax.readyState == 2) {
			console.log("Requisição recebida!")										//se state da página for 2 
		}
		else if (ajax.readyState == 3) {
			console.log("Processando arquivos!")									//se state da página for 3
		} else if (ajax.readyState == 4) {
			//console.log("Requisição finalizada!")									//se state da página for 4
			console.log(ajax.responseText)	

			// let element = document.getElementById('tabela');
			// element.innerHTML = ajax.responseText; 									// carrega informação do arquivo

			let para   = document.getElementsByTagName('h2');
			para[0].innerHTML = ajax.responseText;
		}
	} else if (ajax.status == 404) {
		console.log("Achei nada não!")
	}
}