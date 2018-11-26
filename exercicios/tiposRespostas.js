const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    const firstName = ctx.update.message.from.first_name

    await ctx.reply(`Seja bem-vindo ${firstName} ao Telegram 😉`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
    <i>de várias</i> <code>formas</code><pre>possíveis</pre>
    <a href="www.google.com">Google</a>`)

    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*' +
        '_de várias_ `formas` ```possíveis```' +
        '[Google](www.google.com)'
    )
    await ctx.replyWithPhoto({ source: `${__dirname}/cat.jpg` })
    await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/gato1.jpg', { caption: 'Olha o estilo!!!' })

    await ctx.replyWithLocation(29.9773008, 31.1303068)

    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()