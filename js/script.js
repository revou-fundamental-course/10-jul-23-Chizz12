var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 2000); // 1000 milliseconds = 1 detik
});

function calculate() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  const bmi = weight / (height * height);
  const resultDiv = document.getElementById('result');

  let category = '';
  if (bmi < 18.5) {
    category = 'Kurus';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Gemuk';
  } else {
    category = 'Obesitas';
  }

  const resultMessage = `BMI Anda:  ${bmi.toFixed(2)}<br>(Kategori: ${category})`;
  resultDiv.innerHTML = resultMessage;
}

var reset = document.getElementById("reset").addEventListener("click", function() {
  location.reload(); 
});