document.getElementById("submit-form").addEventListener("click", function() {
      const weight = parseFloat(document.getElementById("berat").value);
      const height = parseFloat(document.getElementById("tinggi").value);

      if (!isNaN(weight) && !isNaN(height)) {
          const bmi = calculateBMI(weight, height);
          const category = getBMICategory(bmi);

          document.getElementById("bmiValue").textContent = `BMI: ${bmi.toFixed(2)}`;
          document.getElementById("bmiCategory").textContent = `Category: ${category}`;
      } else {
          alert("Please enter valid weight and height.");
      }
      
      document
      .getElementsByTagName("form")[0]
      .addEventListener("submit", function(event){
      event.preventDefault();
      submit();
      });
  });

  function calculateBMI(weight, height) {
      const heightInMeters = height / 100;
      return weight / (heightInMeters ** 2);
  }

  function getBMICategory(bmi) {
      if (bmi < 18.5) {
          return "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
          return "Normal weight";
      } else if (bmi >= 25 && bmi <= 29.9) {
          return "Overweight";
      } else {
          return "Obesity";
      }
  }
