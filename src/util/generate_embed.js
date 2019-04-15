const d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');

module.exports = async function generate_simple_embed(name, value, color = Math.floor(Math.random() * 16777215)){
    return new Promise((resolve, reject) => {
        resolve({
                    embed: {
                    "url": "https://discordapp.com",
                    "color": color,
                    "timestamp": dformat,
                    "footer": {
                        "text": "Text.io | @The3DSquare"
                    },
                    "fields": [
                        {
                            "name": name,
                            "value": value
                        }
                    ]
                }
            }
        );
    });
}