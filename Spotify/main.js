console.log(spotifyPlays);

let array = [];

for (const [key, value] of Object.entries(spotifyPlays)) {
    if (value.artist === 'Eminem') {
        array.push(value)
    }
}

console.log(array)