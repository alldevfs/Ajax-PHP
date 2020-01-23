$(document).ready(function () {
	$('#input-change').on('click', function() {
		$('#corpo').css('background-color','#FF3232');
		$('#tabela').load('content/data.php');
	});
});

// $(document).ready(function(){
// 				// var i = <?php echo $row['indice_perc']; ?>;
// 				// if (i >= 11.5){
// 					$('#indice').css({"background-color":"#FF3232"}); //vermelhin
// 				// } else if (i >= 11 && i < 11.5){
// 					$('#indice').css({"background-color":"#E88139"}); //laranjinha
// 				// } else if (i >= 10.5 && i < 11) {
// 					$('#indice').css({"background-color":"#FFDC73"}); //amarelin
// 				// } else {
// 					$('#indice').css({"background-color":"#202082"}); //azulzin
// 				// }
// 			})