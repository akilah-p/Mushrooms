// import functions and grab DOM elements
import { renderMushroom, renderFriend, renderBerry, renderAnimal } from './render-utils.js';
import { findAnimalByName, findFriendByName, } from './data-utils.js';


const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');

const animalsEl = document.querySelector('.animals');
const animalInputEl = document.getElementById('animal-input');
const berriesEl = document.querySelector('.berries');
const addBerryButton = document.getElementById('add-berry-button');
const addAnimalButton = document.getElementById('add-animal-button');

// initialize state

let mushroomCount = 3;
let berryCount = 3;

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


const animalData = [
    {
        name: 'Scooby Doo',
        satisfaction: 2,
    }

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
        alert('found a berry!');

        berryCount++;
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
});

function displayFriends() {
    friendsEl.textContent = '';

    for (let friend of friendData) {
        const friendEl = renderFriend(friend);

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

    }
}

function displayMushrooms() {

    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) {

        const mushroomEl = renderMushroom();

        mushroomsEl.append(mushroomEl);
    }
}

function displayAnimals() {
    animalsEl.textContent = '';

    for (let animal of animalData) {
        const petEl = renderAnimal(animal);

        petEl.addEventListener('click', () => {
            const animalInState = findAnimalByName(animal.name, animalData);

            if (berryCount === 0) {
                alert('no berries left! go look for some more');
            }

            if (berryCount > 0 && animalInState.satisfaction < 3) {
                animalInState.satisfaction++;
                berryCount--;

                displayBerries();
                displayAnimals();
            }
        });
        animalsEl.append(petEl);
    }
}

function displayBerries() {
    berriesEl.textContent = '';

    for (let i = 0; i < berryCount; i++) {
        const berryEl = renderBerry();

        berriesEl.append(berryEl);
    }
}

displayFriends();
displayMushrooms();
displayBerries();
displayAnimals();
