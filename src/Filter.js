// - create list of words
// - get words as an array
// - filter words by desired number of letters
// - filter words containing the letter in the word
// - filter words that do not contain letters known to not occur in the word
// - filter according to the letters known to occur in the word

import React from 'react'
import words from './Words' // list of words

function Filter() {

    let wordLength = 4; // The length of the word we are looking for
    let includedLetters = ["o"]; //Letters included in the word but whose location is unknown
    let lettersNotIncluded = ["f","r","k"]; // Letters that we know are not included in the word
    let lettersWithLocation = [ // Letters with known exact location
        {
            'letter': "o", 
            'index':"1"
        }
    ]
    
  return (
    <div>
        Result
    </div>
  )
}

export default Filter