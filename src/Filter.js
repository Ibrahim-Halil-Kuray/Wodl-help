// - create list of words
// - get words as an array
// - filter words by desired number of letters
// - filter words containing the letter in the word
// - filter words that do not contain letters known to not occur in the word
// - filter according to the letters known to occur in the word

import React from 'react'
import words from './Words' // list of words

function Filter() {

    // test data for word "england"
    let wordLength = 7; // The length of the word we are looking for
    let includedLetters = ["e", "d"]; //Letters included in the word but whose location is unknown
    let lettersNotIncluded = ["f","r","k"]; // Letters that we know are not included in the word
    let lettersWithLocation = [ // Letters with known exact location
        {
            'letter': 'l',
            'index': '3'
        }
    ]

    // get words as an array
    let wordsArray = words.split('\n');
   
    // filter words by desired number of letters
    function lenFilter(myArray, len) {
        return  myArray.filter((word) => word.length === len);
            
    }
    wordsArray = lenFilter(wordsArray, wordLength)

    // filter words containing the letter in the word
    function containFilter (myArray, containLetters) {
        return myArray.filter((word)=>{
        
            for (let index = 0; index < containLetters.length; index++) {
                if(word.indexOf(containLetters[index])=== -1){
                    return false
                }
            }
            return true
        })
    }

    if(includedLetters.length > 0) wordsArray = containFilter(wordsArray, includedLetters);

    // filter words that do not contain letters known to not occur in the word
    function notContainFilter(myArray, notContainLetters){
        return myArray.filter((word)=>{
            for (let index = 0; index < word.length; index++) {
                if(notContainLetters.includes(word[index])){
                    return false
                }
            }
            return true
        })
    }
    if(lettersNotIncluded.length > 0) wordsArray = notContainFilter(wordsArray, lettersNotIncluded);

    // filter Letters with known exact location
    function filterByLocation(myArray, lettersWithLocation) {
        return myArray.filter(word => {

          for (let i = 0; i < lettersWithLocation.length; i++) {
            const { letter, index } = lettersWithLocation[i];

            if (word[index] !== letter) {
              return false;
            }
          }
          return true;
        });
    };
    if(lettersWithLocation.length > 0) wordsArray = filterByLocation(wordsArray, lettersWithLocation);

  return (
    <div>
        {wordsArray.map((word, index) => {
        return (
            <div key={index}> {word}</div>
            )

        })}
    </div>
  )
}

export default Filter