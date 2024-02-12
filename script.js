const student = {
    name: "navya",
    __proto__: {
        getKeys() {
            return Object.keys(this);
        }
    }
};

console.log(student.getKeys()); // Output: ['name']
