const env = require('../.env')
const Telegraf = require('telegraf')
const axios = require('axios')

const bot = new Telegraf(env.token)

bot.on('voice', async ctx => {
    const id = ctx.update.message.voice.file_id
        //Pega o arquivo diretamente da API do Telegram
    const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
    ctx.replyWithVoice({ url: `${env.apiFileUrl}/${res.data.result.file_path}` })
})

//No exercicio tb há a recuperação de foto

bot.startPolling()