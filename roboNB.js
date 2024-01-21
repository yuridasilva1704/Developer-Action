const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const { MessageMedia } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Cliente está conectado!');
});

client.on('message', async (message) => {
    const saudacao = message.body.toLowerCase();
  
    if (saudacao.includes('bom dia') || saudacao.includes('boa tarde') || saudacao.includes('boa noite')) {
      const resposta = `Olá, sou o assistente virtual da NaBase Engenharia, estou aqui pra lhe auxiliar ! 🤖\n\n`;
      const listaMaterial = `Selecione o item que deseja visualizar/ consultar 😍\n 
1️⃣ Material Hidráulico 🚰 
2️⃣ Material Elétrico 💡
3️⃣ Material Pintura  🪣
4️⃣ Material Madeiramento 🪜 
5️⃣ Material Piso 🛣️
6️⃣ Material Vergas ⚒️
7️⃣ Material Colunas ⚒️
8️⃣ Material Nervuras ⛓️
9️⃣ Material Dobradiças ⚙️
1️⃣0️⃣ Material Portas  🚪
1️⃣1️⃣ Material Caixa de Portas 🪟`;

message.reply(resposta+listaMaterial);

client.on('message', async (message) => {
  
  if (message.body === '1'){
  client.sendMessage(message.from,'Sucesso');
  }

  client.on('message', async (msg) => {
    if (msg.body === '5') {
        const media = MessageMedia.fromUrl('https://via.placeholder.com/350x150.png');
        await client.sendMessage(msg.from, media);
    }
});

});

}
});

client.initialize();
