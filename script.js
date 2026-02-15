
function calculateProjection(){
    let salary=parseFloat(document.getElementById("salaryInput").value);

    let growthRate=parseFloat(document.getElementById("growthInput").value)/100 ;

    let totalEarnings=0;

    for(let year=1;year<=10;year++){
        totalEarnings+=salary;
        salary=salary*(1+growthRate);
    }
    document.getElementById("result").innerText =
    "Total earnings after 10 years: ₹" + totalEarnings.toFixed(2);
}
