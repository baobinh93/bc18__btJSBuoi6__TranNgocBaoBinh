// Input :
// - Số nguyên N

// Xử lý:
// - Dùng vòng lặp từ i = 0 tới  i = n;
// - Dùng toán tử *= cho các giá trị từ i tới n

// Out put:
// - Xuất kết quả
{
  const firstInputEl = document.querySelector("#bt3__first");

  const calculateBtnEl = document.querySelector("#bt3__submitBtn");

  const resultEl = document.querySelector("#bt3__result");

  function checkNum(num) {
    if (num > 0 && num % 1 == 0) {
      return true;
    } else {
      return false;
    }
  }
  calculateBtnEl.onclick = function () {
    const bienN = firstInputEl.value * 1;
    if (checkNum(bienN)) {
      let result = 1;
      for (let i = 1; i <= bienN; i++) {
        result *= i;
      }
      resultEl.value = result;
    } else {
      resultEl.value = null;
      alert("Nhập sai dữ liệu");
    }
  };
}
