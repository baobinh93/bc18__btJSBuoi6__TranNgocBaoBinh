// Input :
// - Giá trị của x và n

// Xử lý:
// - Cho i tăng từ 1 tới n
// - Tính tổng các biên x^i

// Out put:
// - Tổng tìm được
{
  const firstInputEl = document.querySelector(" #bt2__first");
  const secondInputEl = document.querySelector("  #bt2__second");

  const calculateBtnEl = document.querySelector("  #bt2__submitBtn");

  const resultEl = document.querySelector(" #bt2__result");

  function checkNum(num) {
    if (num >= 0 && num % 1 == 0) {
      return true;
    } else {
      return false;
    }
  }
  function tinhSn(x, n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += Math.pow(x, i);
    }
    return sum;
  }

  calculateBtnEl.onclick = function () {
    const bienX = firstInputEl.value * 1;
    const bienN = secondInputEl.value * 1;

    if (checkNum(bienX) && checkNum(bienN)) {
      resultEl.value = tinhSn(bienX, bienN);
    } else {
      resultEl.value = null;
      alert(" Nhập sai dữ liệu");
    }
  };
}
