function  love(){
    var name1=document.getELementBYId("name1").value;
var name2=document.getELementBYId("name2").value;
var res = math.floor( math.randam()*100);
 var par= document.getELementBYId("par");
if(name1==""||name2==""){
par.innerHTML="please enter both names!💖";
return;
}
par.innerHTML="💖"+ name1+"and"+ name2+"have"+res+"% LOVE!";
}    
