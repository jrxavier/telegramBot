//Utilizamos o plugin CodeRunner para executar
// CTRL + ALT + N para iniciar
// CTRL + ALT + M para parar

const env = require('../.env')
const Telegraf = require('telegraf');

const bot = new Telegraf(env.token);

//Código a ser executado quando digitarmos o /start na janela do bot
bot.start(ctx => {
    const from = ctx.update.message.from;
    console.log(from);
    ctx.reply(`Seja bem-vindo, ${from.first_name}!`);

})

//Monitora o envio de texto
// o uso de async e await garante a ordem da chamada das funções
bot.on(`text`, async(ctx, next) => {
    await ctx.reply(`Mid 1`)
    next()
})

bot.on(`text`, async ctx => {
    await ctx.reply(`Mid 2`)
})


//Pergunta ao servidor se há algo a ser feito
bot.startPolling();