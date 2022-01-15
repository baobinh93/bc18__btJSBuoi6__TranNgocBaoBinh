// Input :
// - Số Nguyên N

// Xử lý:
// - Xét định nghĩa số NT: Một số tự nhiên lớn hơn 1, nếu như ngoài bản thân nó và 1 ra, nó không chia hết cho số nào khác nữa thì nó là số nguyên tố.
// - Tạo hàm kiểm tra một số có phải số nguyên tố hay không ,
// bằng cách chia lần lượt nó cho các số tăng dần từ 2 tới chính nó, nếu có một số nào phù hợp số đó không phải số nguyên tố
// - Tạo vòng lăp từ i = 1 tới N, bỏ i vào hàm kiểm tra số nguyên tố nếu i nào phù hợp gán nó vào kết quả

// Out put:
// - Xuất kết quả
{
  const firstInputEl = document.querySelector("#bt5__first");

  const calculateBtnEl = document.querySelector("#bt5__submitBtn");

  const resultEl = document.querySelector("#bt5__result");

  function checkNum(num) {
    if (num >= 0) {
      return true;
    } else {
      return false;
    }
  }

  function kiemTraSoNT(num) {
    let result = true;
    if (num <= 1) {
      result = false;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          result = false;
          break;
        }
      }
    }
    return result;
  }

  function xuatSoNT(num) {
    let result = "";
    for (let i = 2; i <= num; i++) {
      if (kiemTraSoNT(i)) {
        result += i + ", ";
      }
    }
    return result;
  }

  calculateBtnEl.onclick = function () {
    const bienN = firstInputEl.value * 1;

    resultEl.innerText = xuatSoNT(bienN);
  };
}
