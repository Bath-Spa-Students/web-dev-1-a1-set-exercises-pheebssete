function calculate() {
    // to call out the cost and liter so it can be calculate
    var cost = parseFloat(document.getElementById("cost").value);
    var liters = parseFloat(document.getElementById("liters").value);
    
    // to calculate the cost and liters
    var Amount = cost * liters;

    // the totall amount of liters
    document.getElementById("Amount").textContent = "Total Cost: AED " + Amount.toFixed(2);
}