function loanCalculator() {
  
  var loanAmount = parseFloat(prompt("Enter the loan amount:"));
  var interestRate = parseFloat(prompt("Enter the interest rate (%):"));
  var loanTerm = parseFloat(prompt("Enter the loan term (in years):"));

  
  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) ||
      loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
    
    alert("Invalid input. Please enter numeric values greater than zero.");
    return; 
  }

  var monthlyInterestRate = interestRate / 100 / 12;
  var numberOfPayments = loanTerm * 12;
  var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  monthlyPayment = Math.round(monthlyPayment * 100) / 100; 

  var table = "<table><tr><th>Loan Amount</th><th>Interest Rate</th><th>Loan Term</th><th>Monthly Payment</th></tr>";
  table += "<tr><td>$" + loanAmount.toFixed(2) + "</td><td>" + interestRate.toFixed(2) + "%</td><td>" + loanTerm + " years</td><td>$" + monthlyPayment.toFixed(2) + "</td></tr>";
  table += "</table>";
  document.getElementById("result").innerHTML = table;
}

loanCalculator();
