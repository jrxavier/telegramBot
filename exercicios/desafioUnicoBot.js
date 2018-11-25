//Utilizamos o plugin CodeRunner para executar
// CTRL + ALT + N para iniciar
// CTRL + ALT + M para parar

const env = require('../.env')
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

//Código a ser executado quando digitarmos o /start na janela do bot
bot.start(ctx => {
    const from = ctx.update.message.from;

    if (ctx.update.message.from.id == env.userId) {
        ctx.reply(`Olá mestre!`);
    } else {
        ctx.reply(`Sinto muito, só falo com meu mestre!`);
    }

})



//Pergunta ao servidor se há algo a ser feito
bot.startPolling();