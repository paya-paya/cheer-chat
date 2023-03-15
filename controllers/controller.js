const express = require("express");
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
            messages: [{ role: "user", content: "Hello world" }],
        });
        console.log(completion.data.choices[0].message);
        res.status(200).json(completion.data.choices[0].message);
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = {
    question,
};

