const { Telegraf } = require('telegraf')
const schedule = require("node-schedule");
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
let job;

phrases = [
    `"Believe you can and you're halfway there." - Theodore Roosevelt`,
    `"The only way to do great work is to love what you do." - Steve Jobs`,
    `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
    `"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt`,
    `"Don't watch the clock; do what it does. Keep going." - Sam Levenson`,
    `"We are what we repeatedly do. Excellence, then, is not an act, but a habit." - Aristotle`,
    `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." - Oprah Winfrey`,
    `"Your time is limited, don't waste it living someone else's life." - Steve Jobs`,
    `"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela`,
    `"Success is not how high you have climbed, but how you make a positive difference to the world." - Roy T. Bennett`,
    `"The only real limitation is the one you set for yourself." - Michael Jordan`,
    `"If you want to live a happy life, tie it to a goal, not to people or things." - Albert Einstein`,
    `"Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better." - Jim Rohn`,
    `"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle." - Christian D. Larson`,
    `"Success is the sum of small efforts, repeated day-in and day-out." - Robert Collier`,
    `"There is no substitute for hard work." - Thomas Edison`,
    `"In order to succeed, we must first believe that we can." - Nikos Kazantzakis`,
    `"Successful people are always looking for opportunities to help others. Unsuccessful people are always asking, 'What's in it for me?'" - Brian Tracy`,
    `"A man's greatness lies in his ability to do and act according to his own judgment, without being subject to the will of any other man." - Aristotle`,
    `"Man is the measure of all things." - Protagoras`,
    `"The man who has no inner-life is a slave to his surroundings." - Henri Frederic Amiel`,
    `"The first duty of a man is to think for himself." - Jose Marti`,
    `"A man who cannot endure adversity will not live long in this world." - Horace`,
    `"Man's greatness lies in his power of thought." - Blaise Pascal`,
    `"A man should look for what is, and not for what he thinks should be." - Albert Einstein`,
    `"Man is a thinking being, and though he may think otherwise, he is not a man unless he thinks." - Plato`,
    `"A man who has not passed through the inferno of his passions has never overcome them." - Carl Jung`,
    `"A man who stands for nothing will fall for anything." - Malcolm X`,
    `"A man who is good at making excuses is seldom good for anything else." - Benjamin Franklin`,
    `"A man who does not think for himself does not think at all." - Oscar Wilde`,
    `"A man without ambition is dead. A man with ambition but no love is dead. A man with ambition and love for his blessings here on earth is ever so alive." - Pearl Bailey`,
    `"A man who is not afraid is not aggressive, a man who has no sense of fear of any kind is really a free, a peaceful man." - Dalai Lama`,
    `"A man who is a master of patience is master of everything else." - George Savile`,
    `"Whether you think you can, or you think you can't - you're right." - Henry Ford`,
    `"The mind is everything; what you think, you become." - Buddha`,
    `"Imagination is the preview of life's coming attractions." - Albert Einstein`,
    `"Change your thoughts and you change your world." - Norman Vincent Peale`,
    `"The man who has confidence in himself gains the confidence of others." - Hasidic Proverb`,
    `"If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward." - Martin Luther King Jr.`,
    `"It is not the mountain we conquer, but ourselves." - Edmund Hillary`,
    `"A man who is convinced that he is right is almost impossible to convince that he is wrong." - Anonymous`
]

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello, MF.', {
    })

    job = schedule.scheduleJob('* * 7 * * *', () => {
        bot.telegram.sendMessage("@qteom", phrases[Math.floor(Math.random() * phrases.length)]);
    });
})


bot.command('stop', ctx => {
    console.log(ctx.from);

    if (job) {
        job.cancel()
    }
})



bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

