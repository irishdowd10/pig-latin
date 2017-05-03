//looks for vowels in input
var isVowel = function (letterMatch) {
  var vowels = ["a", "e", "i", "o", "u"];
  var test = vowels.indexOf(letterMatch);
  if (test === -1) {
    return false;
  }else if (test >= 0){
    return true;
  }else {}
}
//adding "way" to end of string
var addAy = function(tmpStr) {
  var newStr = tmpStr.concat("way");
  return newStr;
}
//turning user input into array
var solution = function (userSentence) {
  var userArray = userSentence.split(' ');
  console.log(userArray);
  var wordArray = [];
  var finalArray = [];
  userArray.forEach(function(userWord){
    letterArray = userWord.split('');
    letterArray.forEach(function(userLetter){
      var check = isVowel(userLetter);

      console.log(userLetter);
    })
  })
  return finalArray
}




//-----------------------------------------------------
$(document).ready(function(){
  $("#piglatin").submit(function(event){
    event.preventDefault();

    var userSentence = $("input#userSentence").val();
    solution(userSentence);
    console.log(solution(userSentence));
  });
});
