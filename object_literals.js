const person = {

    firstName: "John",
    lastName: "Doe",
    hobbies: ['Painting', 'Writing', 'Movies'],
    address: {
        house: "221B",
        street: "Baker",
        area: "London"
    }
};

const { firstName, lastName, address: { house } } = person;

console.log(person);
console.log("Get Data By The Keys: First_Name = " + firstName + " Last_Name = " + lastName);
console.log("While We Can Access Embedded Objects: House = " + house);

// console.log(person)

// Now, let's see array of objects
const todos = [
    {
        id: 1,
        task: "Going Home",
        type: "Home"
    },
    {
        id: 2,
        task: "Office Task",
        type: "Office"
    },
    {
        id: 3,
        task: "Gardening",
        type: "Home"
    }
]

console.log("Array Of Objects: " + todos[1].task);