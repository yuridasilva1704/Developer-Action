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
    }

if  (message.body === '1'){
    const quantitativoHidraulico = 'Veja abaixo a imagem do material quantitativo hidráulico:';
            await client.sendMessage(message.from, quantitativoHidraulico);
    
            const media1 = MessageMedia.fromFilePath('C:\\ProjetosNode\\WhatsAppBot\\NbEngenharia\\Imagens\\1_QuantitativoHidraulico.pdf');
            await client.sendMessage(message.from, media1);
    }

    if (message.body === '5') {
       const piso = `Explore nossa seleção premium de materiais de piso para transformar seus espaços. 
Abra a imagem abaixo para visualizar a lista completa e escolha os melhores para o seu projeto.
Qualidade e estilo que fazem a diferença! 💼✨`;
        await client.sendMessage(message.from, piso);

        const media5 = MessageMedia.fromFilePath('C:\\ProjetosNode\\WhatsAppBot\\NbEngenharia\\Imagens\\piso.jpg');
        await client.sendMessage(message.from, media5);
    }
});

alert("Commit de teste")

client.initialize();
