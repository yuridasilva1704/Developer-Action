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
    const saudacao = message.body.toLowerCase();

    if (saudacao === 'oiii') {
        const resposta = 'Olá, sou o assistente virtual da NaBase Engenharia, estou aqui para lhe auxiliar! 🤖\n\n';
        const listaMaterial = ` 

        Selecione o item que deseja visualizar/ consultar 😍\n
         
1️⃣ Quantitativo Hidráulico 🚰 
2️⃣ Quantitativo Elétrico 💡
3️⃣ Quantitativo Pintura  🪣
4️⃣ Quantitativo Madeiramento 🪜 
5️⃣ Quantitativo Piso 🛣️
6️⃣ Quantitativo Vergas ⚒️
7️⃣ Quantitativo Colunas ⚒️
8️⃣ Quantitativo Nervuras ⛓️
9️⃣ Quantitativo Dobradiças ⚙️
1️⃣0️⃣ Quantitativo Portas  🚪
1️⃣1️⃣ Quantitativo Caixa de Portas🪟
1️⃣2️⃣ Quantitativo Cimento
1️⃣3️⃣ Quantitativo Brita 
1️⃣4️⃣ Quantitativo Areia 
1️⃣5️⃣ Quantitativo Tubos
        
      ❇️ Outras Opções ❇️
1️⃣6️⃣ Estoque Material NaBase 📊 🛅
1️⃣7️⃣ Gastos Totais (Casa 04) 📉💸
1️⃣8️⃣ Gastos Totais ( Casa 05) 📉💸
1️⃣9️⃣ Gastos Totais (3 Casas - Eddy) 📉💸

0️⃣ Encerrar atendimento 📉💸`;

        message.reply(resposta + listaMaterial);
        saudacaoRespondida = true;
    }

    else if (saudacaoRespondida) {
        const opcaoEscolhida = message.body.trim().toLowerCase();
        switch (opcaoEscolhida) {
            case '0':
                // Encerra o atendimento
                const mensagemEncerramento = 'Obrigado por utilizar nossos serviços. Atendimento encerrado. Caso deseje visualizar novamente nosso catálogo, basta enviar uma nova mensagem. Desejamos a você um excelente dia! 😊';
                await client.sendMessage(message.from, mensagemEncerramento);
                saudacaoRespondida = false;
                break;

            case '1':
                const quantitativoHidraulico = `                 Quantitativo Hidraulico
        
                10 T 25 MM SOLD
        
                3	BUCHA RED SOLD , LONGA 40 x 20MM 
                
                20	JOELHO 20MM  90° SOLD 
                
                14	T 20MM SOLD
                
                11	JOELHO 40MM 90° ESGOTO
                
                9	JOELHO 50MM ESGOTO 
                
                2	T 40MM ESGOTO
                
                1 T 40MM ÁGUA 
                
                2	T 50MM ESGOTO
                
                1	CAIXA SINF. QUAD 100 x 100 x 50 
                
                2	REG.GAVETA 3/4 CS - 50
                
                1	REG.PRESSÃO 3/4 CS - 50 
                
                5	ADPTADOR CURTO 3/4  ROSCA PRA FORA 
                
                1 ADPTADOR CURTO 3/4 COM ROSCA PRA DENTRO 
                
                1	LUVA  25MM LRM - AZUL
                
                4	REG. ESFERA 20MM PVC 
                
                1	REG ESFERA 40MM SOLDAVEL 
                
                1	ADPTADOR FLANGE 40 x 1.1/4
                
                3	ADPTADOR FLANGE 20 x 1/2
                
                8 JOELHO 3/4 AZUL DE ROSCA
                
                4	JOELHO 40MM 90° SOLD
                
                5	ADESIVO PVC 75G CANO (COLA)
                
                1	CAIXA DE HIDRÔMETRO DE PVC 
                
                1	CAIXA D'AGUA 1.000L POLIETILENO 
                
                2	JOELHO LR 20 X 1/2 KRONA 
                
                4	SIFÃO FLEXIVEL UNIV BCO 
                
                1 SIFÃO DUPLO
                 
                1	ANEL DE VED. P/VASO SANIT
                
                1	TANQUE 0,59 X 0,59MT MARM
                 
                1	PARAFUSO P/VASO SANIT Nº10 
                
                3	ENGATE FLEXIVEL PVC 50 CM 
                
                1	ENGATE FLEXIVEL PVC 40 CM 
                
                2	CHUVEIRO BRANCO S/REG. C/HAST 
                
                3	VALVULA P/LAV. E TANQUE (7/8) 
                
                1	VALVULA PIA 3.1/2 INOX 
                
                2	TORN MESA B.MOV PLAST. CROSS BCA 
                
                1	TORN MESA B.MOV PLAST CROSS BCA 
                
                2	VEDA ROSCA 12MM X 25MM
                
                2	BUJÃO 20MM ROSCAVEL 
                
                1	TORN P/JARDIM, PTO 
                
                1 BOIA P/ CAIXA D' AGUA
                
                1	BACIA ACOPLADA PORTO 6LT BRANCO 
                
                1	NICHO DO BANHEIRO 
                
                8 JOELHO LISO 3/4
                
                2 JOELHO DE 100MM`;
                await client.sendMessage(message.from, quantitativoHidraulico);
                break;

            case '2':
                const piso = 'Em atualização, breve esta função estará funcionando 😉';
                await client.sendMessage(message.from, piso);
                break;

            case '3':
                const quantitativoPintura = `
        
                Quantitativo Pintura

        2	Adere Fita Crepe

        10	Lixa 800 -100 Massa

        1	Text Marmorizada Cinza Envelhecido	3,6Kg

        5	Text Standard “Uma Cor”	12,5Kg

        5	Text Standard “Uma Cor”	12,5Kg

        14	Text Lisa Standard “Marfim”	12,5Kg

        1	Verniz Mogno Colonial	1.8L

        1	Massa Corrida PVA	5Kg

        2	Latex BCO BD Neve – Interna	15L`;

                await client.sendMessage(message.from, quantitativoPintura);
                break;

            case '4':
                const quantitativoMadeiramento = `
        Quantitativo Madeiramento	

        LINHA (MADEIRA) 4 MT	10
        LINHA (MADEIRA) 4,50 MT	1
        LINHA (MADEIRA) 1 MT	1
        CAIBO (MADEIRIA) 5,50 MT	14
        CAIBO (MADEIRIA) 4,50 MT	12
        RIPA (MADEIRA) 3,50	1
        RIPA (MADEIRA) 4,50	1
        CAIBO DE 3,50 MT	18
        
        Madeiramento ( Mão Francesa )
        
        
        2 mão francesa
        
        4 caibro de 2,5m 
        
        1Kg prego caiba
        
        4 parafuso 12 - no tamanho grande
        
        4 bucha para parafuso 12 
        
        84 telhas`;
                await client.sendMessage(message.from, quantitativoMadeiramento);
                break;

            case '5':
                const quantitativoPiso = `
               Quantitativo Piso

        49 Pacote de Argamassa

        42 Caixa Piso 46X46 EXT. Araripe Cinza
        
        29 Pacote 1kg de Rejunte Tipo II Cinza
        
        1 Pacote Rejunte Preto
        
        4 Caixa Piso 33x46 EXT HD CARRI BEGE CERBRAS
        
        5m²  Piso  46X46 EXT  TIANGUA CINZA (PISO FRONTAL)`;

                await client.sendMessage(message.from, quantitativoPiso);
                break;
            case '6':
                const quantitativoVergas = `
        
                 Vergas Quantitativo 

        2 vergas 2,70 janela do quarto 
        
        1 verga de 3,00 porta da frente com janela da frente sala 
        
        2 vergas de 1,50 janela da lateral  
        
        1 verga de  1,60 janela do banheiro
        
        4 vergas de 1,20 porta dos quarto, porta da cozinha e porta do banheiro
        
        1 verga de 1,00 janelinha da laje`;
                await client.sendMessage(message.from, quantitativoVergas);
                break;

            case '7':
                const quantitativoColunas = `
             Quantitativo colunas (14x6)

        "COLUNAS DE 4,00 M DE ""8""" 	7 unidade
        
        "VIGA DE 4,5 M ""8""  1 unidade
        
        "VIGA DE 2,5M DE ""8"""	1 unidade
        
        Espaçamento de 20cm entre os estribos`;

                await client.sendMessage(message.from, quantitativoColunas);
                break;

            case '8':
                const quantitativoNervuras = `
        
        QUANTITATIVO DAS NERVURAS 

        25 nervuras de 3,30 
        
        2 nervuras de 2,50 
        
        2 nervuras de 4,40 
        
        3 nervuras de 3,90
        
        3 nervuras 4,30 
        
        3 nervuras 3,40`;

                await client.sendMessage(message.from, quantitativoNervuras);
                break;

            case '9':
                const quantitativoDobradicas = `
                Quantitativo Fechaduras 🚪

        4 - FECHADURA PREMIUM INOC.EXT REF.2600/71 IP
        
        1 - FECHADURA  INOX PREMIUM WC 2800/71 PR ALIANÇA
        
                  Quantitativo Dobradiças

        6 dobradiças ( Sigma ) 

        3 na porta da cozinha

        3 na porta da sala

        9 dobradiças ( Schild ) 

        3 na porta do quarto 1 

        3 na porta do quarto 2 

        3 na porta do banheiro 

        Janelinha da laje

        2 dobradiças 

        1 trinco`;

                await client.sendMessage(message.from, quantitativoDobradicas);
                break;

            case '10':
                const mensagemPendente10 = 'Em atualização, breve esta função estará funcionando 😉';
                await client.sendMessage(message.from, mensagemPendente10);
                break;

            case '11':
                const mensagemPendente11 = 'Em atualização, breve esta função estará funcionando 😉';
                await client.sendMessage(message.from, mensagemPendente11);
                break;

            case '12':
                const quantitativoCimento = `
                Quantitativo Cimento 
                
                160 Sacos de Cimento 50Kg `;
                await client.sendMessage(message.from, quantitativoCimento);
                break;

            case '13':
                const quantitativoBrita = `
                Quantitativo Brita 
                
                2 Carrada de Brita `;

                await client.sendMessage(message.from, quantitativoBrita);
                break;

            case '14':
                const quantitativoAreia = `
        Quantitativo Areia
        
        3 Carrada de Areia 10m³`;

                await client.sendMessage(message.from, quantitativoAreia);
                break;

            case '15':
                const quantitativoTubos = `
           Quantitativo Tubos/ Canos

        18	metros TUBO 40MM PVC SOLDAVEL 	
        
        24	metros TUBO 25MM PVC SOLDAVEL 	
        
        30	metros TUBO 20MM PVC SOLDAVEL 	
        
        24	metros TUBO 100MM PVC ESGOTO 	
        
        18 metros TUBO 40MM PVC ESGOTO 	
        
        18 metros TUBO 50MM PVC ESGOTO
        
        `;
        
                await client.sendMessage(message.from, quantitativoTubos);
                break;

            case '16':
                const estoqueNaBase = `
        
                Estoque NaBase 👇🏻🗃️
   
   
           12 - Cabo Flexivel 6mm Preto ⚫
           
           1- Disjuntor Soprano 20A	 🎚️
           
           1 metro - Fio Vermelho 6mm	 🔴
           
           74 metros- Fio Vermelho 4mm	 🔴
           
           60 metros - Fio Preto 2,5mm	 ⚫
           
           23 metros - Fio Azul 2,5mm 	🔵
           
           143 metros - Fio Vermelho 1,5mm🔴
           
           88 metros - Fio Preto 1,5mm	 ⚫
           
           63 metros - Fio Verde 1,5mm	🟢
           
           100 metros -Fio Azul 1,5mm 🔵
           
           6 - Arandela Externa 💡
           
           2 - Sifão Simples 🚰`;
                await client.sendMessage(message.from, estoqueNaBase);
                break;

            case '17':
                const mensagemPendente17 = 'Em atualização, breve esta função estará funcionando 😉';
                await client.sendMessage(message.from, mensagemPendente17);
                break;

            case '18':
                const mensagemPendente18 = 'Em atualização, breve esta função estará funcionando 😉';
                await client.sendMessage(message.from, mensagemPendente18);
                break;

            case '19':
                const mensagemPendente19 = 'Em atualização, breve esta função estará funcionando 😉';
                await client.sendMessage(message.from, mensagemPendente19);
                break;
                
            default:
                const mensagemPadrao = 'Opção inválida. Por favor, escolha uma opção válida.';
                await client.sendMessage(message.from, mensagemPadrao);
        }
    } else {
        // Usuário ainda não fez a saudação
        const mensagemInicial = 'Olá! Para iniciar seu atendimento automatizado, digite "oiii".';
        await client.sendMessage(message.from, mensagemInicial);
        }
});

client.initialize();