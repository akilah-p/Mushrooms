export function addFriend(name, friends) {
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    friends.push(newFriend);
}

export function findFriendByName(name, friends) {
    for (let friend of friends) {
        if (friend.name === name) {
            return friend;
        }
    }
}

export function addAnimal(name, animals) {
    const newAnimal = {
        name: name || `Animal #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    animals.push(newAnimal);
}

export function findAnimalByName(name, animals) {
    for (let animal of animals) {
        if (animal.name === name) {
            return animal;
        }
    }
}