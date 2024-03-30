function generateNickname() {
    var inputName = document.getElementById('inputName').value.trim();
    var shuffledName = shuffleString(inputName);
    document.getElementById('nickname').innerText = 'NickName: ' + shuffledName;
}

function shuffleString(str) {
    var array = str.toLowerCase().split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonants = array.filter(char => !vowels.includes(char));
    var shuffledName = [];

    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0 && vowels.includes(str[i])) {
            // If the character is a vowel and its index is even, keep it in the same position
            shuffledName.push(str[i]);
        } else if (i % 2 !== 0 && consonants.length > 0) {
            // If the index is odd and there are consonants left, use a consonant
            shuffledName.push(consonants.shift());
        } else {
            // If no consonants left or character is not a vowel, shuffle among the remaining characters
            var randomIndex = Math.floor(Math.random() * array.length);
            shuffledName.push(array.splice(randomIndex, 1)[0]);
        }
    }

    return shuffledName.join('');
}