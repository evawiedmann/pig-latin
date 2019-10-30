//Business Logic

var pigLatin = function(letters, vowels){
  console.log('hello');
  var newArray = [];
console.log(letters[0] === vowels)
do{
  var joinedLetters =  letters.join('')
  newArray.push(joinedLetters + 'ay');
// console.log(letters)
} while(vowels.includes(letters[0]));
// } while(letters[0] === vowels);

  return newArray;

}


//UI
$(document).ready(function () {
  $('form#wordForm').submit(function(event){
    var word = $('input#wordInput').val();
    var vowels = ["a","i","o","u","e"];
    var letters = word.split('');
    var newArray = pigLatin(letters, vowels);


    console.log("split letter: ", letters);
    console.log("newArray:" , newArray);
    event.preventDefault();
  });
});
