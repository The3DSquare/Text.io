const diacretics = [
    "̀",
    "́",
    "̂",
    "̃",
    "̄",
    "̅",
    "̆",
    "̇",
    "̈",
    "̉",
    "̊",
    "̋",
    "̌",
    "̍",
    "̎",
    "̏",
    "̐",
    "̑",
    "̒",
    "̓",
    "̔",
    "̕",
    "̖",
    "̗",
    "̘",
    "̙",
    "̚",
    "̛",
    "̜",
    "̝",
    "̞",
    "̟",
    "̠",
    "̡",
    "̢",
    "̣",
    "̤",
    "̥",
    "̦",
    "̧",
    "̨",
    "̩",
    "̪",
    "̫",
    "̬",
    "̭",
    "̮",
    "̯",
    "̰",
    "̱",
    "̲",
    "̳",
    "̴",
    "̵",
    "̶",
    "̷",
    "̸",
    "̹",
    "̺",
    "̻",
    "̼",
    "̽",
    "̾",
    "̿",
    "̀",
    "́",
    "͂",
    "̓",
    "̈́",
    "ͅ",
    "͆",
    "͇",
    "͈",
    "͉",
    "͊",
    "͋",
    "͌",
    "͍",
    "͎",
    "͏",
    "͐",
    "͑",
    "͒",
    "͓",
    "͔",
    "͕",
    "͖",
    "͗",
    "͘",
    "͙",
    "͚",
    "͛",
    "͜",
    "͝",
    "͞",
    "͟",
    "͠",
    "͡",
    "͢",
    "ͣ",
    "ͤ",
    "ͥ",
    "ͦ",
    "ͧ",
    "ͨ",
    "ͩ",
    "ͪ",
    "ͫ",
    "ͬ",
    "ͭ",
    "ͮ",
    "ͯ"
];

const generate_embed = require('../util/generate_embed.js');

module.exports = async (text) => {
    const characters = [...text];
    const creepy_chars = characters.map(char => {
        if(/\s/i.test(char)) return char;
        else {
            let diacretic_string = char;
            if(Math.random() > 0.7) diacretic_string += diacretics[Math.floor(Math.random() * diacretics.length)];

            return diacretic_string;
        }
    });

    const embed = await generate_embed(
        'Cr̓e̋ep̹i̅fied͋ Text:',
        creepy_chars.join('')
    );

    return embed;
}