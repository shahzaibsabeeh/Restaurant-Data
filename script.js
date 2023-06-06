// script.js

document.getElementById("customerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;

  // Perform API request or further processing here
  // You can use libraries like Axios or fetch to make API requests to your back-end server
  // For example:
  // axios.post("/api/invoices", { name, email, phone, item, quantity })
  //   .then(function(response) {
  //     // Handle successful response
  //   })
  //   .catch(function(error)
