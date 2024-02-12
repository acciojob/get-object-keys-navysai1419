// Create an object called student with a property called name
const student = {
    name: "John"
};

// Add a utility function to get keys of an object
function getKeys(obj) {
    return Object.keys(obj);
}

// Example usage
console.log(getKeys(student)); // Output: ['name']
