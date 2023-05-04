// Creating message holding data structure.
const fortunes = { 
    commoner: ['you will be rich', 
                'you have the potential to be a great leader',
                'try again!!',
                'you will make a good family leader',
                'you will succeed on your career',
                'you have to work harder to achieve your goals',
                'you will own an expensive car',
                'you will live longer',
                'you will be career-wise successfully by age 35',
                'you will meet a great partner to make life together',
                'yoor a true magician!!'
        ],
    
};

// A random number generator function
// This accept an array and generate a random number within the range of the input array
const randomAccessor = array => {
    let randNum = Math.floor(Math.random() * array.length);
    if (randNum === array.length) {
        return randNum - 1;
    } else {
        return randNum;
    }
};


// A function to return a message based on an input index number and an array of msg's
const randMessg = (index, msgArray) => {
    return msgArray[index];
};


// The final encapsulating function
const fortuneTeller = () => {
    let messages = fortunes.commoner;
    let index = randomAccessor(messages);

    // display the result to the console
    console.log(randMessg(index, messages));  
};


fortuneTeller();
