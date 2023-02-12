module.exports = Phrase;

// Adds 'reverse()' to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  // #1
  // this.letters = function letters() {
  //   let theLetters = [];
  //   const letterRegex = /[a-z]/i;
  //   Array.from(this.content).forEach((character) => {
  //     if (character.match(letterRegex)) {
  //       theLetters.push(character);
  //     }
  //   });
  //   return theLetters.join("");
  // }
  // #2
  // this.letters = function letters() {
  //   return Array.from(this.content).filter( c => c.match(/[a-z]/gi)).join("");
  // }
  // #2
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Returns a LOUDER version of the phrase.
  this.louder = function () {
    return this.content.toUpperCase();
  }
}


// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

TranslatedPhrase.prototype = new Phrase();