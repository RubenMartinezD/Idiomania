<?php
class alumno{
	public $DNI;
public $apellidos;
public $telefono;
public $dniDelegado;
function __construct($DNI,$apellidos,$telefono,$dniDelegado){
$this->DNI=$DNI;
$this->apellidos=$apellidos;
$this->telefono=$telefono;
$this->dniDelegado=$dniDelegado;
}
}
$nombre_servidor = "localhost";
$usuario = "root";
$contra = "";
$basededatos = "instituto";
$conexion = new mysqli($nombre_servidor,$usuario,$contra,$basededatos);
if($conexion->connect_error){
die("Conexión fallida: ". $conexion->connect_error);
}
$peticion = $_GET["apellidos"];
$consulta = "SELECT * FROM alumno WHERE apellidos='$peticion'";
$resultado = $conexion->query($consulta);
$alumnos = array();
if($resultado->num_rows>0){
while($row = $resultado->fetch_assoc()){
$aux_alumno = new
alumno($row["DNI"],$row["apellidos"],$row["telefono"],$row["dniDelegado"]);
array_push($alumnos,$aux_alumno);
}
}else{
print"Error al insertar los valores: ".$conexion->error;
}
echo json_encode($alumnos);
?>