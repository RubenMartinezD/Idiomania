<?php
class frase{
	public $id_frase;
	public $contenido;

	function __construct($id_frase,$contenido){
		$this->id_frase=$id_frase;
		$this->contenido=$contenido;
	}
}	
$nombre_servidor = "localhost";
$usuario = "root";
$contra = "";
$basededatos = "idiomania";
$conexion = new mysqli($nombre_servidor,$usuario,$contra,$basededatos);

if($conexion->connect_error){
	die("Conexión fallida: ". $conexion->connect_error);
}

$peticion = $_GET["id_frase"];
$consulta = "SELECT * FROM frases WHERE id_frase='$peticion'";
$resultado = $conexion->query($consulta);
$frases = array();

if($resultado->num_rows>0){
	while($row = $resultado->fetch_assoc()){
		$aux_frase = new
		frase($row["id_frase"],$row["contenido"]);
		array_push($frases,$aux_frase);
	}
}
else{
	print"Error al insertar los valores: ".$conexion->error;
}

echo json_encode($frases);
?>