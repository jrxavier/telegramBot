const env = require('../.env')
const Telegraf = require('telegraf')
const moment = require('moment')

const bot = new Telegraf(env.token)

bot.hears('pizza', ctx => ctx.reply(`Eu quero!`))

bot.hears([`Fígado`, `Chuchu`], ctx => ctx.reply(`Passo !`))

bot.hears('😀', ctx => ctx.reply('Bacon 😍'))

//Identifica qualquer forma de escrita de BURGUER
bot.hears(/burguer/i, ctx => ctx.reply(`Adoro!`))

bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx => {
    moment.locale('pt-BR')
    const data = moment(ctx.match[1], 'DD/MM/YYYY')
    ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`)
})

bot.startPolling()