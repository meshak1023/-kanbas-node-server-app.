import Database from "../Database/index.js";

// Update an assignment

// Create a new assignment
export function createAssignment(assignment) {
    const newAssignment = {
        _id: Date.now().toString(), // Unique ID
        title: assignment.title || "", // Title from input
        course: assignment.course || "", // Course ID
        dueDate: assignment.dueDate || null, // Due date from input
        points: assignment.points || 0, // Points from input
        assignTo: assignment.assignTo || "", // Assigned to (optional)
        notAvailableUntil: assignment.notAvailableUntil || null, // Available from date
        description: assignment.description || "", // Description from input
        group: assignment.group || "Assignments", // Group (default: Assignments)
        submissionType: assignment.submissionType || "Offline", // Submission type
    };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

// Find assignments for a specific course
export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
}


// Delete an assignment
export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;

    // Find the assignment by ID
    const assignmentIndex = assignments.findIndex((assignment) => assignment._id === assignmentId);

    if (assignmentIndex === -1) {
        throw new Error(`Assignment with ID ${assignmentId} not found`);
    }

    // Merge the existing assignment with the updated fields
    Database.assignments[assignmentIndex] = {
        ...Database.assignments[assignmentIndex], // Existing assignment
        ...assignmentUpdates, // Updated fields
    };

    // Return the updated assignment
    return Database.assignments[assignmentIndex];
}
