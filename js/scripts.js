// function addAy(word) {
//
// }


$(document).ready(function () {
  $('form#sentenceForm').submit(function(event){
    var sentence = $('input#sentenceInput').val();
    var splitWord = sentence.split('');
    var vowels = ["a","i","o","u","e"];
    splitWord.forEach(function(word, vowels){
      var newArray = []
      vowels.forEach(function(vowel, i){
        if (word[0] === vowel[i]){
          newArray.push('ay');
        }
        return newArray;

    });
    });
    // for (var i = 0; i < splitWord.length; i++) {
    //   if (splitWord[0] === "a", "i", "o", "u", "e") {
    //      var addAy = splitWord.append('ay');
    //   }
    //   return addAy;
    // }
    console.log(newArray);
    event.preventDefault();
  });
});


// function alphaOnly(event) {
//   var key = event.keyCode;
//   if ((key >= 65 && key <= 90) || key == 8){
//     return true;
//   } else {
//     return false
//   }
// }
