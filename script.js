// Create the student object with a name property
const student = {
    name: "navya"
};

// Extend the Object.prototype to add the getKeys() method
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Example usage
console.log(student.getKeys()); // Output: ['name']
