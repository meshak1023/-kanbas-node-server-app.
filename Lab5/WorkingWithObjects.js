const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
};

const module = {
    id: "101",
    name: "Intro to Node.js",
    description: "Learn the basics of Node.js and Express.",
    course: "Web Development",
    completed:"True",
    score: "0"
};

export default function WorkingWithObjects(app) {
    // Existing assignment routes
    app.get("/lab5/assignment", (req, res) => res.json(assignment));
    app.get("/lab5/assignment/title", (req, res) => res.json(assignment.title));
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });

    // New module routes
    app.get("/lab5/module", (req, res) => res.json(module));
    app.get("/lab5/module/name", (req, res) => res.send(module.name));

    // Update module name with GET request
    app.get("/lab5/module/name/:name", (req, res) => {
        const { name } = req.params;
        module.name = name;
        res.json(module);
    });

    // Update module description with GET request
    app.get("/lab5/module/description/:description", (req, res) => {
        const { description } = req.params;
        module.description = description;
        res.send(`Module description updated to ${module.description}`);
    });

    app.get("/lab5/assignment/score/:score", (req, res) => {
        const { descsription } = req.params;
        assignment.score = parseInt(req.params.score, 10);
        res.send(`Assignment score updated to ${assignment.score}`);
    });
    app.get("/lab5/assignment/completed/:completed", (req, res) => {
        assignment.completed = req.params.completed === "true";
        res.send(`Assignment completed status updated to ${assignment.completed}`);
    });
}
