/*
/ This function generates the password. 
/ Different versions to randomized the order of characters and guarantees that it mets all the requirements of a password.
/ If versions are not used and the randomization is limited to selecting from the three types, it chances that there can be
/ instances where the nonAlphabetic characters are selected the entire time or vice versa.
*/
export function generatePassword() {
  let password = "";
  let index = 0;
  while (index < 6) {
    let version = Math.floor(Math.random() * 3);
    let ascii = 0;

    if (version == 0) {
      // ascii: !-@ or [-` or {-~
      password += String.fromCharCode(asciiNonLetters());
      // ascii: A-Z
      ascii = Math.floor(Math.random() * 26 + 65);
      password += String.fromCharCode(ascii);
      // ascii: a-z
      ascii = Math.floor(Math.random() * 26 + 97);
      password += String.fromCharCode(ascii);
    } else if (version == 1) {
      // ascii: A-Z
      ascii = Math.floor(Math.random() * 26 + 65);
      password += String.fromCharCode(ascii);
      // ascii: a-z
      ascii = Math.floor(Math.random() * 26 + 97);
      password += String.fromCharCode(ascii);
      // ascii: !-@ or [-` or {-~
      password += String.fromCharCode(asciiNonLetters());
    } else {
      // ascii: a-z
      ascii = Math.floor(Math.random() * 26 + 97);
      password += String.fromCharCode(ascii);
      // ascii: !-@ or [-` or {-~
      password += String.fromCharCode(asciiNonLetters());
      // ascii: A-Z
      ascii = Math.floor(Math.random() * 26 + 65);
      password += String.fromCharCode(ascii);
    }
    index++;
  }
  return password;
}
/* 
/ This function randomly selects the nonAlphabetic characters. It was created given the three seperate ranges
/ that exist on the ASCII table. While it is important to have nonAlphabetic letters many 
/ instances where password are created do not care which nonAlphabetic characters are selected in comparison 
/ to requiring both a lowercase and uppercase letter. 
*/
function asciiNonLetters() {
  let range = Math.floor(Math.random() * 3);
  let asciiNonLetter = 0;
  // ascii: !-@
  if (range == 0) {
    asciiNonLetter = Math.floor(Math.random() * 32 + 33);
  }
  // ascii: [-`
  else if (range == 1) {
    asciiNonLetter = Math.floor(Math.random() * 6 + 91);
  }
  // ascii: {-~
  else {
    asciiNonLetter = Math.floor(Math.random() * 4 + 123);
  }
  return asciiNonLetter;
}
