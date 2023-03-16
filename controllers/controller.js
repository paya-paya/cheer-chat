const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const question = async (req, res) => {
    try {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "日本語で漢字を使用して1行で励ましてください" }],
        });
        console.log(completion.data.choices[0].message);
        res.status(200).json(completion.data.choices[0].message);
    } catch (err) {
        res.status(500).json(err);
    }
}

const  quickReply = async (req, res) => {
    try {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "語尾に「ピヨ」をつけて励ましてください" }],
        });
        console.log(completion.data.choices[0].message);
        res.status(200).json(completion.data.choices[0].message);
    } catch (err) {
        res.status(500).json(err);
    }
}

const greatReply = async (req, res) => {
    try {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "偉人の言葉1つを使用して端的に励ましてください。その上で誰の言葉か教えてください。" }],
        });
        console.log(completion.data.choices[0].message);
        res.status(200).json(completion.data.choices[0].message);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    question,
    quickReply,
    greatReply
};

