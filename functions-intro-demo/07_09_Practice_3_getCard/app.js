// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard(){
    const values = ['2','3','4','5','6','7','8','9','J','Q','K','A'];
    const valIdx = Math.floor(Math.random() * values.length);
    const value = values[valIdx];

    const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
    const suitIdx = Math.floor(Math.random() * suits.length);
    const suit = suit[suitIdx];
   return { value: value, suit: suit};

}