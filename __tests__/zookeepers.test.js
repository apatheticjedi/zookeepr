const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper
} = require('../lib/zookeepers');
const { zookeepers } = require('../data/zookeepers.json');

jest.mock('fs');

test("creates an zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        {name: "Darlene", id: "jhgdja3ng2"}, 
        zookeepers
    );

    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe('jhgdja3ng2');
});

test("filters by query", () => {
    const startingZookeepers = [
        {
            "id": "0",
            "name": "Kim",
            "age": 28,
            "favoriteAnimal": "dolphin"
          },
          {
            "id": "1",
            "name": "Raksha",
            "age": 31,
            "favoriteAnimal": "penguin"
          },
    ];

    const updatedZookeepers = filterByQuery({ age: "31" }, startingZookeepers);

    expect(updatedZookeepers.length).toEqual(1);

});

test("finds by id", () => {
    const startingzookeepers = [
        {
            "id": "0",
            "name": "Kim",
            "age": 28,
            "favoriteAnimal": "dolphin"
          },
          {
            "id": "1",
            "name": "Raksha",
            "age": "31",
            "favoriteAnimal": "penguin"
          },
    ];

    const result = findById("1", startingzookeepers);

    expect(result.name).toBe("Kim");
});

test("validates age", () => {
    const zookeeper = {
            "id": "0",
            "name": "Kim",
            "age": 28,
            "favoriteAnimal": "dolphin"
          }
    
    const invalidZookeeper = {
        "id": "1",
        "name": "Raksha",
        "age": 31,
        "favoriteAnimal": "penguin"
          }

    const result = validateZookeeper(animal);
    const result2 = validateZookeeper(invalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});