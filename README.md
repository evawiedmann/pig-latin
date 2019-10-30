## Specs

* #### The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  - Example Input: 3
  - Example Output: 3

* #### The program adds "ay" to single-letter words beginning with a vowel.
  - Example Input: i
  - Example Output: iay

* #### The program adds "ay" to words beginning with a vowel.
  - Example Input: eat
  - Example Output: eatay

* #### The program recognizes when "y" is the first letter of a word, it should be considered a consonant.
  - Example Input: year
  - Example Output: earyay

* #### The program recognizes when a word starts with one or more consonants, it should move consecutive consonants to the end of word followed by "ay".
  - Example Input: shallow
  - Example Output: allowshay

* #### The program produces all outputs in lowercase, irrespective of case.
    - Example Input: Christmas
    - Example Output: istmaschray

* #### The program recognizes "qu" and "squ" as a consonants.
  - Example Input: squish
  - Example Output: ishsquay
