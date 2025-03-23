function gradeCalculator() {
  let score = parseFloat(document.getElementById("ff").value); 
  let grade = "";
  if (score >= 80) {
      grade = "A";
  } else if (score >= 60) {
      grade = "B";
  } else if (score >= 40) {
      grade = "C";
  } else {
      grade = "F";
  }
  
  document.getElementById("ee").innerText = grade; 
}