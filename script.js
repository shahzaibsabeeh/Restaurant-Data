// script.js

document.getElementById("customerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;

  // Make an AJAX request
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "generate_invoice.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Handle the response
      const invoiceHTML = xhr.responseText;
      // Display the invoice HTML on another page or dynamically inject it into the current page
      // For example, you can redirect to another page and pass the invoice HTML as a query parameter
      window.location.href = "invoice.html?invoice=" + encodeURIComponent(invoiceHTML);
    }
  };
  const data = "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone) + "&item=" + encodeURIComponent(item) + "&quantity=" + encodeURIComponent(quantity);
  xhr.send(data);
});
