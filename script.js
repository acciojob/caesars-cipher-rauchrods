// Your Script here.

var lookup = {
  "A": "N",
  "B": "O",
  "C": "P",
  "D": "Q",
  "E": "R",
  "F": "S",
  "G": "T",
  "H": "U",
  "I": "V",
  "J": "W",
  "K": "X",
  "L": "Y",
  "M": "Z",
  "N": "A",
  "O": "B",
  "P": "C",
  "Q": "D",
  "R": "E",
  "S": "F",
  "T": "G",
  "U": "H",
  "V": "I",
  "W": "J",
  "X": "K",
  "Y": "L",
  "Z": "M",
  "?": "?",
  ",": ",",
};



function rot13(encryptedstring){
	
var decrystr= "";
for(let i=0;i<encryptedstring.length;i++){
  if(encryptedstring.charCodeAt(i)==32){
    decrystr+=" ";
  }
   else{
    decrystr+=lookup[encryptedstring.charAt(i)];
   }
}

 return decrystr;
	
}

module.exports = rot13;