// Your Script here.
function rot13(encryptedstring){
	var lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};


var encystr= "THIS IS A SAMPLE TEXT";
var decrystr= "";
for(let i=0;i<encystr.length;i++){
  if(encystr.charCodeAt(i)==32){
    decrystr+=" ";
  }
   else{
    decrystr+=lookup[encystr.charAt(i)];
   }
}

console.log(decrystr);
}