document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get customer input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var item = document.getElementById("item").value;
    var quantity = document.getElementById("quantity").value;
  
    // Calculate totals
    var price = 10; // Assuming a constant price of $10 per item
    var subtotal = price * quantity;
    var tax = 0.1 * subtotal;
    var total = subtotal + tax;
  
    // Populate invoice table
    var invoiceTable = document.getElementById("invoiceItems");
    invoiceTable.innerHTML = "";
    var row = document.createElement("tr");
    var itemCell = document.createElement("td");
    itemCell.textContent = item;
    row.appendChild(itemCell);
    var quantityCell = document.createElement("td");
    quantityCell.textContent = quantity;
    row.appendChild(quantityCell);
    var priceCell = document.createElement("td");
    priceCell.textContent = "$" + price.toFixed(2);
    row.appendChild(priceCell);
    var totalCell = document.createElement("td");
    totalCell.textContent = "$" + subtotal.toFixed(2);
    row.appendChild(totalCell);
    invoiceTable.appendChild(row);
  
    // Update totals
    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("tax").textContent = "$" + tax.toFixed(2);
    document.getElementById("total").textContent = "$" + total.toFixed(2);
  
    // Show invoice container
    document.getElementById("invoiceContainer").style.display = "block";
  });
  
  
  
  
