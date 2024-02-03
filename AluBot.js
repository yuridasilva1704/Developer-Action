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

let saudacaoRespondida = false;

client.on('message', async (message) => {
  if (!saudacaoRespondida && (saudacao.includes('bom dia') || saudacao.includes('boa tarde') || saudacao.includes('boa noite'))) {
        const apresentacao = `Olá, sou o AluBot e estou aqui para trilhar você nesta nova jornada na terra do amanhecer, (mentira será aqui no WhatsApp mesmo)...
Hoje eu enfrentei diversos demônios, foi um dia cansativo, nada como uma pausa para relaxar. `;
        message.reply(apresentacao);

const pergunta_1 = 'O que gostariam que eu fizesse? Me pergunte algo'
        message.reply(pergunta_1);

        saudacaoRespondida = true;
    }
    else {
        const resposta = responderPergunta(message.body);
        message.reply(resposta);
    }
});

function responderPergunta(pergunta) {

    const padroesRespostas = [
        { padrao: /como você está/i, resposta: 'Estou bem, obrigado por perguntar! E você?' },
        { padrao: /qual é o seu nome/i, resposta: 'Meu nome é AluBot.' },

        { padrao: /.*?/i, resposta: 'Desculpe, não entendi a pergunta. Pode reformular?' }
    ];

    for (const par of padroesRespostas) {
        if (par.padrao.test(pergunta)) {
            return par.resposta;
        }
    }
    return 'Desculpe, não tenho uma resposta para essa pergunta no momento.';
}

client.initialize();
