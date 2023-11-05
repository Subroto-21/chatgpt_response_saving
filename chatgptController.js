const { OpenAIApi, Configuration } = require('openai');
const Article = require('./chatgptModel');

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
});

const openai = new OpenAIApi(configuration);

exports.postUserInput = async (req, res) => {
    const { prompt } = req.params;
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }]
        });
        try {
            const article = await Article.create({
                name: prompt,
                content: response.data.choices[0].message.content
            });
        } catch (error) {
            console.log(error);
        }
        return res.status(200).json({
            success: true,
            data: response.data.choices[0].message.content
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.response ? error.response.data : "There was an issue on the server"
        });
    }
};

exports.getOutput = async (req, res) => {
    const { question } = req.params;
    try {
        const article = await Article.find({ name: question });

        return res.status(200).json({
            success: true,
            data: article
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.response ? error.response.data : "There was an error"
        });
    }
};
