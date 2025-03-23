
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
let businessData = []; // Array to store business data
// Insert info button click event
document.getElementById("insertBtn").onclick = function () {
// Retrieve values from the input fields
let businessName = document.getElementById("businessName").value;
let address = document.getElementById("address").value;
let contactNumber = document.getElementById("contactNumber").value;
let state = document.getElementById("state").value;
// Check if all fields are filled
if (businessName && address && contactNumber && state) {
// Push the data into the businessData array
businessData.push({ businessName, address, contactNumber, state });
// Display success message
document.getElementById("info").innerText = `Info Inserted: $
{businessName}`;
// Clear input fields
document.getElementById("businessName").value = "";
document.getElementById("address").value = "";
document.getElementById("contactNumber").value = "";
document.getElementById("state").value = "";
} else {
alert("Please fill in all the fields.");
}
};
// Show info button click event
document.getElementById("showBtn").onclick = function () {
let outputDiv = document.getElementById("output");
// Clear any previous output
outputDiv.innerHTML = "<h3>Stored Business Data:</h3>";
// Check if there is any data in businessData
if (businessData.length === 0) {
outputDiv.innerHTML += "<p>No data available.</p>";
} else {
// Loop through the business data and display it
businessData.forEach(function (business, index) {
outputDiv.innerHTML += `<p>${index + 1}. Business Name: $
{business.businessName}, Address: ${business.address}, Contact Number: $
{business.contactNumber}, State: ${business.state}</p>`;
});
}
};
});// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
let businessData = []; // Array to store business data
// Insert info button click event
document.getElementById("insertBtn").onclick = function () {
// Retrieve values from the input fields
let businessName = document.getElementById("businessName").value;
let address = document.getElementById("address").value;
let contactNumber = document.getElementById("contactNumber").value;
let state = document.getElementById("state").value;
// Check if all fields are filled
if (businessName && address && contactNumber && state) {
// Push the data into the businessData array
businessData.push({ businessName, address, contactNumber, state });
// Display success message
document.getElementById("info").innerText = `Info Inserted: $
{businessName}`;
// Clear input fields
document.getElementById("businessName").value = "";
document.getElementById("address").value = "";
document.getElementById("contactNumber").value = "";
document.getElementById("state").value = "";
} else {
alert("Please fill in all the fields.");
}
};
// Show info button click event
document.getElementById("showBtn").onclick = function () {
let outputDiv = document.getElementById("output");
// Clear any previous output
outputDiv.innerHTML = "<h3>Stored Business Data:</h3>";
// Check if there is any data in businessData
if (businessData.length === 0) {
outputDiv.innerHTML += "<p>No data available.</p>";
} else {
// Loop through the business data and display it
businessData.forEach(function (business, index) {
outputDiv.innerHTML += `<p>${index + 1}. Business Name: $
{business.businessName}, Address: ${business.address}, Contact Number: $
{business.contactNumber}, State: ${business.state}</p>`;
});
}
};
});
