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

          // Break-even check
          if (breakEvenYear === null && mbaTotal >= jobTotal) {
              breakEvenYear = year;
          }
      }

      let resultText =
          "Job Path Total: ₹" + jobTotal.toFixed(2) +
          "\nMBA Path Total: ₹" + mbaTotal.toFixed(2);

      if (breakEvenYear !== null) {
          resultText += "\nBreak-even Year: " + breakEvenYear;
      } else {
          resultText += "\nNo break-even within 10 years.";
      }
      if (
    isNaN(salary) || isNaN(growthRate) ||
    isNaN(mbaCost) || isNaN(mbaDuration) ||
    isNaN(postSalary) || isNaN(postGrowth)
) {
    document.getElementById("result").innerHTML =
        "<strong style='color:red;'>Please fill all fields correctly.</strong>";
    return;
}


      document.getElementById("result").innerHTML = `
    <strong>Job Path Total:</strong> ₹${jobTotal.toFixed(2)} <br>
    <strong>MBA Path Total:</strong> ₹${mbaTotal.toFixed(2)} <br>
    <strong>Difference:</strong> ₹${(jobTotal - mbaTotal).toFixed(2)} <br>
    <strong>${breakEvenYear !== null ? 
        "Break-even Year: " + breakEvenYear : 
        "No break-even within 10 years."}
    </strong>
`;

    }