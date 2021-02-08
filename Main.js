var reasons =
[ "Father",
"Mother",
"Grandfather",
"Grandmother" 
];
var images = 
["https://4.bp.blogspot.com/-PdQPE5JFR2g/WS9Pi_4q8lI/AAAAAAABIHY/iJnTUDpTB34iITr-hBJZccBfxlC1jcywwCKgB/s1600/Dot_CharaImg_Dad.png",
"https://www.clipartmax.com/png/small/243-2439854_mother-cartoon-clip-art-animated-mom-png.png",
"https://tse3.mm.bing.net/th?id=OIP.1B8JTVGOvpc4-OsTks4xpQHaHa&pid=Api&P=0&w=300&h=300",
"https://tse1.mm.bing.net/th?id=OIP.stU3zK0nuvoVcNgO5cXePAHaMO&pid=Api&P=0&w=300&h=300"];


var i=0;
function nextslide(){
document.getElementById("nametext").innerHTML=reasons[i];
document.getElementById
("album").src = images[i]; i++; }