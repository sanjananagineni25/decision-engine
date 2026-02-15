let yearlyData = [];

function calculateComparison(){
  let salary = parseFloat(document.getElementById("salaryInput").value);
      let growthRate = parseFloat(document.getElementById("growthInput").value) / 100;

      let mbaCost = parseFloat(document.getElementById("mbaCostInput").value);
      let mbaDuration = parseInt(document.getElementById("mbaDurationInput").value);

      let postSalary = parseFloat(document.getElementById("postSalaryInput").value);
      let postGrowth = parseFloat(document.getElementById("postGrowthInput").value) / 100;

      let jobTotal = 0;
      let mbaTotal = -mbaCost;

      let currentJobSalary = salary;
      let currentMbaSalary = postSalary; 

      let breakEvenYear = null;

      for (let year = 1; year <= 10; year++) {

    // Job path
    jobTotal += currentJobSalary;
    currentJobSalary = currentJobSalary * (1 + growthRate);

    // MBA path
    if (year > mbaDuration) {
        mbaTotal += currentMbaSalary;
        currentMbaSalary = currentMbaSalary * (1 + postGrowth);
    }

    // Save yearly snapshot
    yearlyData.push({
        year: year,
        jobTotal: jobTotal,
        mbaTotal: mbaTotal
    });

    // Break-even check
    if (breakEvenYear === null && mbaTotal >= jobTotal) {
        breakEvenYear = year;
    }
}

   let resultHTML = `
    <strong>Job Path Total:</strong> ₹${jobTotal.toFixed(2)} <br>
    <strong>MBA Path Total:</strong> ₹${mbaTotal.toFixed(2)} <br>
    <strong>Difference:</strong> ₹${(jobTotal - mbaTotal).toFixed(2)} <br>
    <strong>${breakEvenYear !== null ? 
        "Break-even Year: " + breakEvenYear : 
        "No break-even within 10 years."}
    </strong>
    <br><br>
    <h3>Year-by-Year Comparison</h3>
    <table border="1" cellpadding="5">
        <tr>
            <th>Year</th>
            <th>Job Total (₹)</th>
            <th>MBA Total (₹)</th>
        </tr>
`;

yearlyData.forEach(data => {
    resultHTML += `
        <tr>
            <td>${data.year}</td>
            <td>${data.jobTotal.toFixed(2)}</td>
            <td>${data.mbaTotal.toFixed(2)}</td>
        </tr>
    `;
});

resultHTML += `</table>`;

document.getElementById("result").innerHTML = resultHTML;


    }