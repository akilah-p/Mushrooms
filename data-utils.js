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
    const newPet = {
        name: name || `Animal #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    animals.push(newAnimal);
}