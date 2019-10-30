//Business Logic

var pigLatin = function(words, vowels){
  var newArray = [];

  words.forEach(function(word){
    vowels.forEach(function(vowel, i){
      // console.log(i);

      if (word[0] === vowel[i]){
        console.log(words);
        var result = words.join('')
        // console.log(testVar);

        newArray.push(result + 'ay');
        // newArray.join('')
      } else {
        // console.log(word);
        // console.log(vowel);
      }
    });
  });
  return newArray;
  console.log("function newArray:", newArray);

}


//UI
$(document).ready(function () {
  $('form#sentenceForm').submit(function(event){
    var sentence = $('input#sentenceInput').val();
    var splitWord = sentence.split('');
    var vowels = ["a","i","o","u","e"];
    var newArray = pigLatin(splitWord, vowels);


    console.log("split word: ", splitWord);
    console.log("newArray:" , newArray);
    console.log(typeof newArray);
    event.preventDefault();
  });
});
