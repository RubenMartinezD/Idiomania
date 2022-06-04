<?php
class idioma{
public $id_idioma;
public $codigo_idioma;
public $nombre_idioma;

function __construct($id_idioma,$codigo_idioma,$nombre_idioma){
$this->id_idioma=$id_idioma;
$this->codigo_idioma=$codigo_idioma;
$this->nombre_idioma=$nombre_idioma;
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
$peticion = $_GET["id_idioma"];
$consulta = "SELECT * FROM idiomas WHERE id_idioma='$peticion'";
$resultado = $conexion->query($consulta);
$array_idioma = array();
if($resultado->num_rows>0){
while($row = $resultado->fetch_assoc()){
$aux_array_idioma = new
idioma($row["id_idioma"],$row["codigo_idioma"],$row["nombre_idioma"]);
array_push($array_idioma,$aux_array_idioma);
}
}else{
print"Error al insertar los valores: ".$conexion->error;
}
echo json_encode($array_idioma);
?>