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


// For
console.log("Printing With For Loop");
for (let i = 0 ; i < todos.length ; ++i)
{
    console.log(todos[i].task);
}

// While
console.log("Printing With While Loop");
i = 0;
while(i < todos.length)
{
    console.log(todos[i].task);
    ++i;
}

// For but without indexing
console.log("Printing With For Loop: No Indexing");
for (let todo of todos)
{
    console.log(todo.task);
}

// For Each to print all
console.log("Sample of forEach");
todos.forEach(function(todo) {
    console.log(todo.task);
});

// Using Map
console.log("Sample of map");
const tasks = todos.map(function(todo){
    return todo.task;
});
console.log(tasks);

// Using Filter
console.log("Sample of Filter");
const homeTasks = todos.filter(function(todo) {
    return todo.type === "Home";
});
console.log(homeTasks);

// Hybridization: Filter with Map
console.log("Hybrid: Filter With Map");
const filtHomeTasks = todos.filter(function(todo) {
    return todo.type === "Home";
}).map(function(todo){
    return todo.id;
});
console.log(filtHomeTasks);