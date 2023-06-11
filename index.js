// Create a new Date object
var initialTime = new Date();

// Set the initial time to 12:00 AM
initialTime.setHours(12);
initialTime.setMinutes(0);

// Add 40 minutes
initialTime.setMinutes(initialTime.getMinutes() + 40);

// Format the time as a string
var updatedTimeString = initialTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// Display the updated time
console.log(updatedTimeString);