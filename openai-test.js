import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "user", "content": "Who won the world series in 2020?"}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();