
var ajax = new XMLHttpRequest();

ajax.open(
	'GET',			 			// forma de envio.
	'content/dados.txt',		// arquivo para consulta
	false						// false para síncrona e true para assíncrona!
	);
ajax.send();
console.log(ajax);