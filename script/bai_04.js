// Input :
// - Không có đầu vào

// Xử lý:
// - Tạo vòng lăp với i từ 1 tới 10
// - Với mỗi i tạo ra 1 thẻ div
// - Dựa vào i chẵn hay lẻ cài thuộc tính background

// Out put:
// - Xuất các thẻ được tạo ra màn hình
{
  const calculateBtnEl = document.querySelector("#bt4__submitBtn");

  const resultEl = document.querySelector("#bt4__result");

  let danhSachCacThe = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
      danhSachCacThe += `<div id=${i} class="mt-3 p-1 text-white bg-primary"> Thẻ ${i} </div>`;
    } else {
      danhSachCacThe += `<div id=${i} class="mt-3 p-1 text-white bg-danger"> Thẻ ${i} </div>`;
    }
  }

  calculateBtnEl.onclick = function () {
    resultEl.innerHTML = danhSachCacThe;
  };
}
