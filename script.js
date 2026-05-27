const curiosidades = [

"🌱 Agricultura de precisão reduz desperdícios de água e fertilizantes.",

"🚜 Drones agrícolas conseguem analisar plantações em poucos minutos.",

"☀️ Fazendas inteligentes utilizam energia solar para reduzir impactos ambientais.",

"📡 Satélites monitoram áreas agrícolas em tempo real.",

"💧 Sistemas automáticos de irrigação economizam milhares de litros de água.",

"🤖 Inteligência Artificial consegue prever pragas antes que elas prejudiquem a plantação.",

"🌾 Sensores inteligentes analisam a qualidade do solo instantaneamente.",

"📈 Softwares agrícolas ajudam produtores a aumentar a produtividade sustentável.",

"🌍 Tecnologias sustentáveis ajudam a diminuir a emissão de gases poluentes.",

"🛰️ Imagens de satélite ajudam no combate ao desmatamento ilegal."

];

function gerarCuriosidade(){

  const numero = Math.floor(
    Math.random() * curiosidades.length
  );

  const texto = curiosidades[numero];

  let i = 0;

  document.getElementById("curiosidade").innerHTML = "";

  const velocidade = setInterval(() => {

    if(i < texto.length){

      document.getElementById("curiosidade").innerHTML += texto.charAt(i);

      i++;

    } else {

      clearInterval(velocidade);

    }

  }, 40);

}
