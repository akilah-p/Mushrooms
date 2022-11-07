// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import { addFriend, findFriendByName } from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');

const animalsEl = document.querySelector('.animals');
const animalInputEl = document.getElementById('animal-input');
const berryEl = document.querySelector('.berries');
const addBerryButton = document.getElementById('add-berry-button');
const addAnimalButton = document.getElementById('add-animal-button');

// initialize state

let mushroomCount = 3;
let berryCount = 2;

const friendData = [
    {
        name: 'Dulce',
        satisfaction: 2,
    },
    {
        name: 'Simba',
        satisfaction: 3,
    },
    {
        name: 'Jasper',
        satisfaction: 1,
    },
    {
        name: 'Benito',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addBerryButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('fount a berry!');

        berryCount++
        displayBerries();
    } else {
        alert('no luck!');
    }

});

addAnimalButton.addEventListener('click', () => {
    const name = animalInputEl.value;
    const newAnimal = {
        name: name || `Animal #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };

    animalData.push(newAnimal);

    animalInputEl.value = '';

    displayAnimals();
});

addFriendButton.addEventListener('click', () => {
    const name = friendInputEl.value;
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };

    friendData.push(newFriend);

    friendInputEl.value = '';

    displayFriends();
    // get the name from the input
    // create a new friend object
    // push it into the friends state array, passed in as an argument
    // reset the input
    // display all the friends (use a function here)
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';

    // for each friend in state . . .
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);
        // use renderFriend to make a friendEl
        // this is a clickable list, so . . .
        //     add an event listener to each friend
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        //             increment the friends satisfaction and decrement your mushrooms
        friendEl.addEventListener('click', () => {
            const friendInState = findFriendByName(friend.name, friendData);
            if (mushroomCount === 0) {
                alert('no mushrooms left! go forage for some more');
            }
            if (mushroomCount > 0 && friendInState.satisfaction < 3) {
                friendInState.satisfaction++;
                mushroomCount--;
                //             then display your friends and mushrooms with the updated state
                displayFriends();
                displayMushrooms();
            }

        });
        friendsEl.append(friendEl);
        // append the friendEl to the friends list in DOM
    }
}

function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        const mushroomEl = renderMushroom();

        mushroomsEl.append(mushroomEl);
    }
}

displayFriends();
displayMushrooms();
displayBerries();
displayAnimals();
