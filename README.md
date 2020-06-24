# Haiku Checker

#### User inputs a haiku and program checks to see if it is actually a haiku

#### By: Janet Karpenske, Mook Dang, Emma Hellman

##### The user can input a haiku and the program will check the poem to see if it follows proper haiku formatting and rules.

### Link to Site on Github Pages
#### Not Applicable

### Specifications

| Behavior | Input | Output |
|----------|-------|--------|
| Program stores a poem line in an array | "Dogs are really cute" | line1Array = ["Dogs are really cute"] |
| Program splits the array by spaces | line1Array.split(" ") | line1Array = ["Dogs", "are", "really", "cute"] |
| Program contains arrays of vowels and consonants | vowelsArray = ["a", "e", "i", "o", "u", "y"] and consArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"] |
| Program loops through array elements one at a time to look for vowel and consonant patterns, and splitting the element as follows in the syllable rules | for(let i = 0; i <= line1Array.length; i++>) {if ...} |
| If a word contains only one letter it is a syllable | "a" or "I" | syllable |
| If a word does not contain a vowel program returns false | "k" | false |
| Every syllable contains at least one vowel | dog, cat
| When there is a double consonant the syllable rule is to split between consonants | Yel-low bal-loon
| When a word has just one vowel, it is a one syllable word | egg, plant, flag
| When a word ends with "ing", split before the "ing" | "hugging" | hugg-ing |
| When a word end with "le", split after the preceeding consonant | "pickle" | pick-le |
| When a consonant is in the middle of a word split the word in front of a consonant | pa-per spi-der pro-ject
| The program returns true if the first line has five syllables| "Dogs are really cute" | true |
| The program checks the second line for seven syllables | "They like to get lots of treats" | true |
| The program checks the third line for five syllables | "They are such good boys" | true |

## Setup/Installation Requirements

1. Enter a number into the text box to see numbers 0 to (inputted number) displayed back.
2. To Download the file for this webpage: Download as a .zip file from the Github repository and then extract OR clone a copy of the project to personal desktop using the .git URL.
3. Navigate to the downloaded folder and open the file titled index.html.

## Known Bugs
No Known Bugs

## Support & Contact Details
For additional information or to contact Janet Karpenske, Mook Dang, Emma Hellman:

## Technologies Used
A combination of HTML, CSS, and Javascript were used to create the page. Bootstrap and JQuery libraries were also used to style the page.

## Licensing
Copyright (c) 2020 **_{Janet Karpenske, Mook Dnag, Emma Hellman}_**

This software is licensed under MIT license.
