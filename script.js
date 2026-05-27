const curiosidades = [

"🌱 Agricultura de precisão reduz desperdícios de água e fertilizantes.",

"🚜 Drones agrícolas conseguem analisar grandes plantações em poucos minutos.",

"☀️ Fazendas inteligentes já utilizam energia solar para reduzir impactos ambientais.",

"📡 Satélites monitoram áreas agrícolas em tempo real.",

"💧 Sistemas automáticos de irrigação economizam milhares de litros de água.",

"🤖 Inteligência Artificial consegue prever pragas antes que elas prejudiquem a plantação.",

"🌾 Sensores inteligentes analisam a qualidade do solo instantaneamente.",

"📈 Softwares agrícolas ajudam produtores a aumentar a produtividade sustentável.",

"🌍 Tecnologias sustentáveis ajudam a diminuir a emissão de gases poluentes.",

"🚁 Drones conseguem aplicar defensivos agrícolas de forma mais precisa.",

"🛰️ Imagens de satélite ajudam no combate ao desmatamento ilegal.",

"🌦️ IA pode prever mudanças climáticas importantes para a agricultura.",

"🔋 Máquinas agrícolas modernas utilizam menos combustível e poluem menos.",

"🌱 Algumas fazendas já utilizam robôs para realizar colheitas automáticas.",

"📊 Big Data no agro ajuda agricultores a tomar decisões mais sustentáveis.",

"🤖 Chatbots agrícolas auxiliam produtores com informações em tempo real.",

"🌿 A tecnologia IoT conecta máquinas e sensores no campo.",

"🚜 Tratores autônomos já são realidade em algumas propriedades rurais.",

"💡 Lâmpadas LED em estufas ajudam no crescimento das plantas.",

"🌎 Agricultura sustentável ajuda na preservação do meio ambiente.",

"📱 Aplicativos agrícolas permitem monitoramento da fazenda pelo celular.",

"🌾 A rotação de culturas ajuda a preservar nutrientes do solo.",

"🌧️ Sensores climáticos evitam desperdício de irrigação.",

"🧠 Inteligência Artificial pode identificar doenças em plantas através de fotos.",

"🚜 Máquinas modernas usam GPS para aumentar a precisão no plantio.",

"🌿 Compostagem transforma resíduos orgânicos em fertilizantes naturais.",

"📡 Internet rural está ajudando a modernizar o campo.",

"🌱 Fazendas verticais utilizam menos espaço e menos água.",

"💧 Reuso da água é uma prática importante na agricultura sustentável.",

"🤖 Algumas IA conseguem calcular a melhor época para plantar e colher."

];

function gerarCuriosidade(){

  const numero = Math.floor(
    Math.random() * curiosidades.length
  );

  document.getElementById("curiosidade").innerHTML =
    curiosidades[numero];
}
