//your JS code here. If required.
function createPromise(promiseNumber) {
 return new Promise((resolve) => {
   // Generate a random time between 1 and 3 seconds
   const time = Math.floor(Math.random() * 3 + 1);
   // Explanation:
   // - Math.random() generates a number between 0 and 1 (e.g., 0.675)
   // - Multiplying by 2 scales it to a range of 0 to 2 (e.g., 0.675 * 2 = 1.35)
   // - Adding 1 shifts it to a range of 1 to 3 (e.g., 1.35 + 1 = 2.35)


   // Set a timeout to resolve the promise after the random time
   setTimeout(() => {
     resolve({ promiseNumber, time }); // Resolve the promise with the promise number and time taken
   }, time * 1000); // Convert time to milliseconds
 });
}
// Create three promises
const promise1 = createPromise(1); // Promise for the first task
const promise2 = createPromise(2); // Promise for the second task
const promise3 = createPromise(3); // Promise for the third task


// Capture the start time to measure the total time taken for all promises
const startTime = Date.now(); // Date.now() returns the current timestamp in milliseconds


// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3]).then((results) => {
 // Calculate the total time taken to resolve all promises
 const totalTime = (Date.now() - startTime) / 1000; // Calculate total time in seconds by subtracting start time from current time and dividing by 1000
 // Get the output element (table body)
 const outputElement = document.getElementById("output");


 // Remove the loading row
 outputElement.innerHTML = ""; // Clear the content of the table body


 // Iterate over each resolved promise result
 results.forEach((result) => {
   // Create a new table row
   const row = document.createElement("tr");
   // Set the inner HTML of the row with promise details
   row.innerHTML = `<td>Promise ${
     result.promiseNumber
   }</td><td>${result.time.toFixed(3)}</td>`; // toFixed(3) formats the time to 3 decimal places
   // Append the row to the table body
   outputElement.appendChild(row); // Add the new row to the table
 });

 // Create a row for the total time taken
 const totalRow = document.createElement("tr");
 // Set the inner HTML of the total row
 totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`; // Display the total time taken for all promises
 // Append the total row to the table body
 outputElement.appendChild(totalRow); // Add the total row to the table
});
