<?php 

$user = 'root';
$pass = '';
$host = 'localhost';
$db = 'projeto_login';
$banc = 'mysqli';

$sql_consult = 'SELECT nome, email, senha FROM usuarios';


try {

	$connect = new PDO("mysql:host=localhost;dbname=projeto_login", $user, $pass);
	$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	
	$rows = $connect->query($sql_consult);

	foreach ($rows as $row) {
		echo "<pre>";
		var_dump($row);
	}

} catch (PDOException $err) {
	echo "<pre>";
	echo "Erro: ". $err->getMessage();
	// var_dump($err);
}