let todos = [
    { id: 1, title: "Task 1", description: "Description 1", completed: false },
    { id: 2, title: "Task 2", description: "Description 2", completed: true },
    { id: 3, title: "Task 3", description: "Description 3", completed: false },
    { id: 4, title: "Task 4", description: "Description 4", completed: true },
];

export default function WorkingWithArrays(app) {
    // Existing routes

    app.get("/lab5/todos/create", (req, res) => {
        const newTodo = {
            id: new Date().getTime(),
            title: "New Task",
            description: "New description",
            completed: false,
        };
        todos.push(newTodo);
        res.json(todos);
    });

    app.get("/lab5/todos", (req, res) => {
        const { completed } = req.query;
        if (completed !== undefined) {
            const completedBool = completed === "true";
            const completedTodos = todos.filter((t) => t.completed === completedBool);
            res.json(completedTodos);
            return;
        }
        res.json(todos);
    });

    app.get("/lab5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (!todo) {
            return res.status(404).json({ message: `Todo with ID ${id} not found` });
        }
        res.json(todo);
    });

    app.get("/lab5/todos/:id/delete", (req, res) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
        if (todoIndex === -1) {
            return res.status(404).json({ message: `Unable to delete Todo with ID ${id}` });
        }
        todos.splice(todoIndex, 1);
        res.json(todos);
    });

    app.delete("/lab5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
        if (todoIndex === -1) {
            return res.status(404).json({ message: `Unable to delete Todo with ID ${id}` });
        }
        todos.splice(todoIndex, 1);
        res.sendStatus(200);
    });

    app.get("/lab5/todos/:id/title/:title", (req, res) => {
        const { id, title } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (!todo) {
            return res.status(404).json({ message: `Unable to update title for Todo with ID ${id}` });
        }
        todo.title = title;
        res.json(todos);
    });

    // New routes for editing description and completed status

    app.get("/lab5/todos/:id/description/:description", (req, res) => {
        const { id, description } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (!todo) {
            return res.status(404).json({ message: `Unable to update description for Todo with ID ${id}` });
        }
        todo.description = description;
        res.json(todos);
    });

    app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
        const { id, completed } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (!todo) {
            return res.status(404).json({ message: `Unable to update completed status for Todo with ID ${id}` });
        }
        todo.completed = completed === "true";
        res.json(todos);
    });

    app.post("/lab5/todos", (req, res) => {
        const newTodo = { ...req.body, id: new Date().getTime() };
        todos.push(newTodo);
        res.json(newTodo);
    });

    // New PUT route for updating a todo
    app.put("/lab5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
        if (todoIndex === -1) {
            return res.status(404).json({ message: `Unable to update Todo with ID ${id}` });
        }
        todos[todoIndex] = { ...todos[todoIndex], ...req.body };
        res.sendStatus(200);
    });
}
