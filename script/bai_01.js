// Input :
// - Số 10000

// Xử lý:
// - Cho i chạy từ 0 tới 10000;
// - Tính tổng các số i cho tới khi vừa lớn hơn 10000 thì dừng lại và xuất số i cuối cùng
// - Gán giá trị i đó cho n

// Out put:
// - Số N cần tìm
{
  const firstInputEl = document.querySelector(" #bt1__first");

  const calculateBtnEl = document.querySelector(" #bt1__submitBtn");

  const resultEl = document.querySelector(" #bt1__result");

  function timN(gioiHan) {
    let tong = 0;
    let n;
    for (let i = 0; i < gioiHan; i++) {
      tong += i;
      if (tong > gioiHan) {
        n = i;

        break;
      }
    }
    return n;
  }

  calculateBtnEl.onclick = function () {
    const gioiHan = firstInputEl.value * 1;

    resultEl.value = timN(gioiHan);
  };
}
