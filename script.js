const curiosidades = [

"🌱 A agricultura de precisão reduz desperdícios de água.",

"🚜 Drones agrícolas conseguem analisar plantações em poucos minutos.",

"☀️ A energia solar já é utilizada em fazendas inteligentes.",

"🤖 Sensores inteligentes ajudam agricultores a economizar recursos.",

"📡 Satélites monitoram áreas agrícolas em tempo real.",

"💧 Sistemas automáticos de irrigação reduzem o consumo de água.",

"🌍 A tecnologia no agro ajuda na preservação ambiental."

];

function gerarCuriosidade(){

const numero = Math.floor(Math.random() * curiosidades.length);

document.getElementById("curiosidade").innerHTML =
curiosidades[numero];

}
