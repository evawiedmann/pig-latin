//Business Logic
var vowels = ["a","i","o","u","e"];

var pigLatin = function(letters, vowels){
  var newArray = [];
do{
  var joinedLetters =  letters.join('')
  newArray.push(joinedLetters + 'ay');
// console.log(letters)
} while(letters[0] === vowels);

return newArray;

}


//UI
$(document).ready(function () {
  $('form#wordForm').submit(function(event){
    var word = $('input#wordInput').val();
    var letters = word.split('');
    var newArray = pigLatin(letters, vowels);


    console.log("split letter: ", letters);
    console.log("newArray:" , newArray);
    event.preventDefault();
  });
});
