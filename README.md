# Scrabble-Board

## Project Overview

The idea is that the user can create their own customisable board. Like the ones that can be found [here](https://www.etsy.com/uk/listing/957312156/personalised-scrabble-frame-up-to-18?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_uk_en_gb_-home_and_living&utm_custom1=_k_CjwKCAjw8JKbBhBYEiwAs3sxNxc9nGeOj0qb4-YkB_ElNsgAPDY1dkg1oD0s0ts9pp85hcDPHHDHchoCi1MQAvD_BwE_k_&utm_content=go_14821442085_125173007022_549119977872_pla-303628061699_c__957312156engb_118543039&utm_custom2=14821442085&gclid=CjwKCAjw8JKbBhBYEiwAs3sxNxc9nGeOj0qb4-YkB_ElNsgAPDY1dkg1oD0s0ts9pp85hcDPHHDHchoCi1MQAvD_BwE)
The main function of this is so that someone can create their own virtual board. They will be able to select a background from a bunch of options and then provide a list of words or names that they would like to use for the board. My wife likes to make these boards as presents so I thought it would be cool to make a virtual one for her so that she can experiment around with making them for people before she purchases the stuff to make real ones.

## Technologies

I want to use Typescript and eventually React for this project. Typescript because it is something new and a useful skill to aquire, and React as I feel that this offers a much better way of handling all the different components and states of this app and I want to get more practise working with React.

Intially I just want to get something that works, ideally just using simple HTML, CSS and Typescript. Once I have worked out the core functionality I plan on refactoring this in to a react app.

To install Typescript you can find instructions [here](https://www.typescriptlang.org/download)

## Features of the project

- Users should be able to select how big the board is, ideally from a list of pre-set dimensions.
- Users will be able to provide a list of words they want to use.
- Users should then be able to move the words around to see how they could all fit in together. I want to use colour highlights to demonstrate if a word fits or not.
- The standard rules of Scrabble should apply. i.e words can share a letter but two letters can't be next to each other if they don't create a word. In this version it is highly unlikely that two letters will create an extra word by being next to each other as the only words we want to spell on the board are those that the user has provided.
- I would like to implement a click and drag system so that users can select the word they want to fit and drag it on to the board.
- It should be obvious to the user whether they can fit a word somewhere, and it should be impossible for them to place a word that does not fit.

## Future of the project

- Once I have a fully working React application I might tweak this to create an actual game of scrabble. Most of the functionality should already exsist by this point like tile creation and placement, I will probably need to import some sort of dictionary at this point and work out how I manage more complex rules around tile placement.
