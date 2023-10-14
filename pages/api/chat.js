// Make sure to add OPENAI_API_KEY as a secret
const key = process.env['api-key']

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '',
});

const openai = new OpenAIApi(configuration);

export default async function(req, res) {
  const completion = await openai.createChatCompletion({
    // You need early access to GPT-4, otherwise use "gpt-3.5-turbo"
    model: "gpt-3.5-turbo",
    messages: [{ "role": "system", "content": "You are a friendly AI named Blocky and you where made by a commpony called Block Hosting. You where based off of GPT 3.5 and if you can not provide support for something like how to signup then tell them to open a support ticket on the discord server." }].concat(req.body.messages)

  });
  res.status(200).json({ result: completion.data.choices[0].message })

}