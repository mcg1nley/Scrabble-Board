# Scrabble-Board

The idea is that the user can create their own customisable board. Like the ones that can be found [here](https://www.etsy.com/uk/listing/957312156/personalised-scrabble-frame-up-to-18?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_uk_en_gb_-home_and_living&utm_custom1=_k_CjwKCAjw8JKbBhBYEiwAs3sxNxc9nGeOj0qb4-YkB_ElNsgAPDY1dkg1oD0s0ts9pp85hcDPHHDHchoCi1MQAvD_BwE_k_&utm_content=go_14821442085_125173007022_549119977872_pla-303628061699_c__957312156engb_118543039&utm_custom2=14821442085&gclid=CjwKCAjw8JKbBhBYEiwAs3sxNxc9nGeOj0qb4-YkB_ElNsgAPDY1dkg1oD0s0ts9pp85hcDPHHDHchoCi1MQAvD_BwE)
The main function of this is so that someone can create their own svirtual board. They will be able to select a background from a bunch of options and then provide a list of words or names that they would like to use for the board along with a starting word or name (eg. AMILY). My wife likes to make these boards as presents so I thought it would be cool to make a virtual one for her so that she can experiment around with making them for people before she purchases the stuff to make real ones.

I want to use Typescript and React for this project. Tpescript because it is new to me and I want to learn how to use it as it seems like something that is used in the industry a lot, and React as i feel that this offers a much better way of handling all the different components and states of this app and again I want to get more practise with React.

Intially I just want to get something that works, ideally just using simple HTML, CSS and Typescript. Once I have worked out the core functionality I plan on refactoring this in to a react app.

- Users should be able to select how big the board is.
- Users should be able to select a starting word eg. "FAMILY"
- User can select how many other words they want
- Users can input those words
- Users should then be able to move the words around to see how they could all fit in together
- The standard rules of Scrabble should apply. i.e words can share a letter but if two letters are next to each other and don't create a word then it should not be valid
- I would like to implement a click and drag system so that users can select the word they want to fit and drag it on to the board
- It should be obvious to the user whether they can fit a word somewhere, and it should be impossible for them to place a word that does not fit
