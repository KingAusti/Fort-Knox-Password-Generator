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
      if(usrSelection.length !== 0) {
        var pwLength = retrievePwLength();
        for(var i = 0; i < pwLength; i++){
          newPw += usrSelection[Math.floor(Math.random() * usrSelection.length)];
        }
      }
      return newPw;
    }
};

//user prompts for password parameters
function pwStructure(userPrompt, allInfo, pwPrompt){
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
  if (lwrCase === true){
    pwPrompt = allInfo.push(...userPrompt[0].slice(0))
  } 
  //if user wants uppercase add to array
  if (upCase === true){
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
    window.alert("<read in germanic accent>ACHTUNG:YOU MUST SELECT YES ON AT LEAST ONE PROMPT");
    pwStructure(userPrompt, allInfo, pwPrompt);
  }
};
//prompt for desired password length
function retrievePwLength() {
  pwLength = prompt("How long would you like your password to be?", "Min 8 char, Max 128 char.");
  if(pwLength !== null){
    parseInt(pwLength);
    //if statement for password not meeting requirement
    if(isNaN(pwLength) || (pwLength < 8 || pwLength > 128)){
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


//abandoning randomizer as most everyone I am talking to is using an array of characters. Having a lot of trouble outputting the generated data into anything readable 
//Hoping that will help me more earily parse the parameters into something that I can output.


// putting old code here as a reminder of past stuggles so I can convince myself to not give up.

// function writePassword() {
//   var password = generatePw();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
//   return password;  
//     }

//prompt for length question to user
// function = retrieve(pwPrompt, userChar); {
//   
  
//     function lengthConf(){ 
    
//     lengthConf = prompt("How long would you like your password to be?", "Min 8 char, Max 128 char.");
    
//     parseInt(lengthConf !==null)
    
//     if(isNaN(lengthConf) (lengthConf < 8 || lengthConf > 128)) {
//       window.alert("INVALID - Password must be between 8 and 128 char.");
//       return lengthConf();
//      }
//      console.log(lengthConf)
//      return lengthConf;
//     } else {
//       return;
//   } 

//     //prompt user for included character type. 
//     var randomLw = window.confirm("Would you like LOWERCASE characters? Okay for YES, Cancel for NO.");
//     if(pwPrompt !== null){
//       if(pwPrompt.toLowerCase() === true || pwPrompt.toLowerCase() === true){
//           randomLw(userChar.push(...dynamicArray[0].slice(0)));
//       };      
//     }
//     else {
//       return userChar.splice(0,userChar.length);
//     };    
//     var randomUp = window.confirm("Would you like UPPERCASE characters? Okay for YES, Cancel for NO.");
//     if(pwPrompt !== null){
//       if(pwPrompt.toLowerCase() === true || pwPrompt.toLowerCase() === true){
//         randomUp(userChar.push(...dynamicArray[1].slice(0)));
//       };      
//     }

//     var randomSpc = window.confirm("Would you like SPECIAL characters? Okay for YES, Cancel for NO.");
//     if(pwPrompt !== null){
//       if(pwPrompt.toLowerCase() === true || pwPrompt.toLowerCase() === true){
//         randomSpc(userChar.push(...dynamicArray[2].slice(0)));
//       };      
//     }     
//     var randomNm = window.confirm("Would you like NUMERIC characters? Okay for YES, Cancel for NO.");
//     if(pwPrompt !== null){
//       if(pwPrompt.toLowerCase() === true || pwPrompt.toLowerCase() === true){
//         randomNm(userChar.push(...dynamicArray[3].slice(0)));
//       };      
//     }
//     else {
//       return userChar.splice(0,userChar.length);
//     };
// }

// var generatePw = function() {
//   retrieve();
// }

//DynamicArray = [
  //   [randomLw()]
  //   [randomUp()]
  //   [randomNm()]
  //   [randomSpc()]
  // ]
  
  // function generatePw() {
  //   var userPw = [];
  //   var container = "";
  
  //   retrieve(userChar, userPw);
  //   if(userPw.length !== 0){
  //     var pwLength = getPwLength();
  
  //     //for function to print
  //     for (let i = 0; i < passwordLength; i++) {
  //       generatedPassword += passwordTypes[Math.random() * passwordTypes.length)];      
      
  //     }
  //   }
  //   console.log(generatedPassword);
  //   return generatedPasswordl;
  //   };
  // };

// // //let arr = ([randomLw(), + randomUp(), + randomSpc(), + randomNm()], + (Math.floor(Math.random() * 200)));
// // //console.log(arr)

// // //data dump from randomizer
// // const container = {
  
// //   LwrCase: randomLw,
// //   UpCase: randomUp,
// //   Spec: randomSpc,
// //   Num: randomNm

// //   console.log(container)

// }

//go go gadget randomizer

// //math for randomizing lowercase letters
// function randomLw() {  
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
// }
// console.log(randomLw())

// //math for randomizing uppercase letters
// function randomUp() {  
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);   
// }
// console.log(randomUp())

// //array for randomizing numbers
// function randomNm() {  
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// console.log(randomNm())

// //array for special characters
// function randomSpc(){
//   return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
// }
// console.log(randomSpc())

// // const withoutCommas = symbolSet.replace(/,/g, '');

// // console.log(withoutCommas);

// const randomFunc = {
//   lower: randomLw,
//   upper: randomUp,
//   number: randomNm,
//   special: randomSpc
// };

// generateEl.addEventListener('click', () => {
  
//   const length = +lengthEl.value;
//   const hasLower = lowercaseEl.true;
//   const hasUpper = lowercaseEl.true;
//   const hasNumber = numberEl.true;
//   const hasSymbol = symbolEl.true;

//   resultEl.innerText = generatePassword (
//   hasLower,
//   hasUpper,
//   hasNumber,
//   hasSymbol,
//   length
//   );
// });

// function generatePassword(lower,upper,number,special) {
//   let generatedPassword = '';

//   const typesCount = lower + upper + number + special;

//   const typesArr = [{lower}, {upper}, {number}, {special}].filter
//   (
//     item => Object.values(item)[0]
//   );

//   if (typesCount === 0) {
//     return '';
//   }

//   for(let i = 0; i < length; i += typesCount) {
//     typesArr.forEach(type=> {

//       const funcName = Object.keys(type)[0]

//       generatedPassword += randomFunc[funcName]();

//     });
//   }

//   const finalPassword = generatedPassword.slice(0, length);

//   return finalPassword;

// }