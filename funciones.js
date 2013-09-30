$(document).ready(function(){
    num();
    function num(){
    var claves;
claves=Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","0");
var msje1;
msje1 = claves[Math.floor(Math.random() * claves.length)];
var msje2;
msje2=claves[Math.floor(Math.random() * claves.length)];
var msje3;
msje3=claves[Math.floor(Math.random() * claves.length)];
var msje4;
msje4=claves[Math.floor(Math.random() * claves.length)];
var msje5;
msje5=claves[Math.floor(Math.random() * claves.length)];
var msje6;
msje6=claves[Math.floor(Math.random() * claves.length)];
var clave=msje1+msje2+msje3+msje4+msje5+msje6;
$('#clave').val(clave);
}
    
    var sueldo= $("input[name='radio']:checked").val();
 $("input[name='radio']").click(function(){
   var sueldo= $("input[name='radio']:checked").val();
   if (sueldo=='fijo'){
    $('#dpc').fadeIn(1000);
   }
   else{
    $('#dpc').fadeOut(1000);
   }
   
 })
});
