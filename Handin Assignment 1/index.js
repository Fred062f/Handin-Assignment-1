// 1 - What to wear

function whatClothesToWear(temperature) {
    if (temperature < 0) {
        return "Warm jacket, beanie and scarf";
    }
    else if (temperature < 10) {
        return "Warm jacket";
    }
    else if (temperature < 15) {
        return "Light jacket";
    }
    else if (temperature < 20) {
        return "T-Shirt, shorts (optional)";
    }
    else if (temperature < 25) {
        return "T-Shirt and shorts";
    }
    else {
        return "Swim trunks or swimsuit";
    }
}

const clothesToWear = whatClothesToWear(18);
console.log(clothesToWear);

// 2 - Dice game 🎲

const rollTheDice = number => {
    let count = 0;
    for (let i = 0; i < number; i++) {
        const n = Math.floor(Math.random() * 6) + 1;
        if (n === 6) {
            count++;
        }
    }
    if (count === number) {
        console.log("Jackpot 🎉");
    }
    else {
        for (let i = 0; i < count; i++) {
            console.log("You just hit 6!");
        }
    }
};

rollTheDice(3);

// 3 - Build a sentiment analyzer

function getSentimentScore(string) {
    const array = string.split(" ");
    const positiveWords = ['happy', 'awesome', 'super'];
    const negativeWords = ['hate', 'boring'];
    const Sentiment = {
        score: 0,
        positiveWords: [],
        negativeWords: []
    }
    array.forEach(word => {
        if (positiveWords.includes(word)) {
            Sentiment.score++;
            Sentiment.positiveWords.push(word);
        }
        else if (negativeWords.includes(word)) {
            Sentiment.score--;
            Sentiment.negativeWords.push(word);
        }
    })
    return Sentiment;
}

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject);

// 4 - Character frequencies - optional

function getCharacterFrequencies(string) {
    const CharacterFrequencies = {};
    const characters = [];

    for (const char of string) {
        if (characters[char]) {
            characters[char]++;
        }
        else {
            characters[char] = 1;
        }
    }
    CharacterFrequencies.characters = Object.keys(characters).map((char) => ({
        character: char,
        count: characters[char],
    }));
    CharacterFrequencies.length = string.length;
    return CharacterFrequencies;
}

console.log(getCharacterFrequencies('happy'));

// 5 - Credit card number formatter - optional

function  formatCreditCardNumber(number) {
    const original = number;
    if (typeof(number) === "number") {
        number = number.toString();
        number = `${number.substring(0, 4)} ${number.substring(4, 8)} ${number[8]}`;
    }
    else {
        return "Invalid argument"
    }
    return `original: ${original},\nformatted: ${number}`;
}

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);