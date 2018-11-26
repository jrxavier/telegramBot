const env = require('../.env');
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token);

bot.start(ctx => {
    const name = ctx.update.message.from.first_name;

    ctx.reply(`Seja bem-vindo ${name}!`)
})


bot.on('text', ctx => {
    ctx.reply(`Mensagem '${ctx.update.message.text}' recebida com sucesso.`)
})

bot.on('location', ctx => {
    const location = ctx.update.message.location;
    console.log(location)
    ctx.reply(`Entendido: você está em
    LAT: ${location.latitude}
    LONG: ${location.longitude}`)
})

bot.on('contact', ctx => {
    const c = ctx.update.message.contact
    console.log(c)
    ctx.reply(`Vou lembrar do(a) ${c.first_name}: ${c.phone_number}`)
})

bot.on('voice', ctx => {
    const v = ctx.update.message.voice
    console.log(v);

    ctx.reply(`Audio recebido, ele tem ${v.duration} segundos`)
})

bot.on('photo', ctx => {
    const p = ctx.update.message.prhoto
    p.forEach((ph, i) => {
        ctx.reply(`Foto ${i} tem a resolução de ${ph.width} por ${ph.height}`)
    })

})


bot.on('sticker', ctx => {
    const sticker = ctx.update.message.sticker
    console.log(sticker)

    ctx.reply(`Estou vendo que vc enviou o ${sticker.emoji} do conjunto ${sticker.set_name}`)
})

bot.startPolling();