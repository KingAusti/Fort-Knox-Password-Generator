// Assignment code below
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// character array
const charray = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
];

function pwCreation() {
    var pwBuild = pwBuilder();
    var pwDom = document.querySelector("#password");
    pwDom.value = pwBuild;

    function pwBuilder() {
        var usrSelection = [];

        pwStructure(charray, usrSelection, newPw);
        var newPw = "";
        if (usrSelection.length !== 0) {
            var pwLength = retrievePwLength();
            for (var i = 0; i < pwLength; i++) {
                newPw += usrSelection[Math.floor(Math.random() * usrSelection.length)];
            }
        }
        return newPw;
    }
};
//user prompts for password parameters
function pwStructure(userPrompt, allInfo, pwPrompt) {
    //window prompts output to user
    //prompt for lowercase characters
    var lwrCase = window.confirm("Would you like LOWERCASE characters? Okay for YES, Cancel for NO.");
    //prompt for uppercase characters
    var upCase = window.confirm("Would you like UPPERCASE characters? Okay for YES, Cancel for NO.");
    //prompt for special characters
    var spcCase = window.confirm("Would you like SPECIAL characters? Okay for YES, Cancel for NO.");
    //prompt for numbers
    var nmCase = window.confirm("Would you like NUMERIC characters? Okay for YES, Cancel for NO.");


    //if user wants lowercase add  to array
    if (lwrCase === true) {
        pwPrompt = allInfo.push(...userPrompt[0].slice(0))
    }
    //if user wants uppercase add to array
    if (upCase === true) {
        pwPrompt = allInfo.push(...userPrompt[1].slice(0))
    }
    //if user wants special add to array
    if (spcCase === true) {
        pwPrompt = allInfo.push(...userPrompt[2].slice(0))
    }
    //if user wants number add to array
    if (nmCase === true) {
        pwPrompt = allInfo.push(...userPrompt[3].slice(0))
    }
    //final if just in case the user is cheeky and selects NO to all prompts
    if (userPrompt.length === 0) {
        window.alert("<<read in germanic accent>> ACHTUNG:YOU MUST SELECT YES ON AT LEAST ONE PROMPT");
        pwStructure(userPrompt, allInfo, pwPrompt);
    }
};
//prompt for desired password length
function retrievePwLength() {
    pwLength = prompt("How long would you like your password to be?", "Min 8 char, Max 128 char.");
    if (pwLength !== null) {
        parseInt(pwLength);
        //if statement for password not meeting requirement
        if (isNaN(pwLength) || (pwLength < 8 || pwLength > 128)) {
            window.alert('ERROR: Length does not meet requirement; PW must be 8-128char in length')
            retrievePwLength();
        }
        return pwLength;
    } else {
        return;
    }
};
// Add event listener to generate button
generateBtn.addEventListener("click", pwCreation);