let allbutton = document.querySelectorAll(".nutnhan");
let nut_m = allbutton[0];
let nut_clear_all = allbutton[1];
let nut_del = allbutton[2];
let nut_chia = allbutton[3];
let nut_7 = allbutton[4];
let nut_8 = allbutton[5];
let nut_9 = allbutton[6];
let nut_x = allbutton[7];
let nut_4 = allbutton[8];
let nut_5 = allbutton[9];
let nut_6 = allbutton[10];
let nut_tru = allbutton[11];
let nut_1 = allbutton[12];
let nut_2 = allbutton[13];
let nut_3 = allbutton[14];
let nut_cong = allbutton[15];
let nut_0 = allbutton[16];
let nut_phay = allbutton[17];
let nut_cm = allbutton[18];
let nut_bang = allbutton[19];
let bien_nho=0;
let bit_nho=0;
//khai báo đối tượng công thức
let congthuc_tinh_toan = document.querySelector(".congthuc");

//khai báo đối tượng kết quả
let manhinh_ketqua = document.querySelector(".ketqua");

let chuoi_tinh_toan = "";
//nhấn nút memory
nut_m.addEventListener("click", function () {
  bien_nho = bien_nho+eval(manhinh_ketqua.textContent);
  bit_nho = 1;
  congthuc_tinh_toan.textContent = "Đã nhớ "+bien_nho;
});

//nhấn nút clear all
nut_clear_all.addEventListener("click", function () {
  chuoi_tinh_toan = "";
  manhinh_ketqua.textContent = chuoi_tinh_toan;
  congthuc_tinh_toan.textContent = "";
});

//nhấn nút del
nut_del.addEventListener("click", function () {
  let do_dai_cong_thuc = chuoi_tinh_toan.length;
  chuoi_tinh_toan = chuoi_tinh_toan.substring(0, do_dai_cong_thuc - 1);
  manhinh_ketqua.textContent = chuoi_tinh_toan;
});

nut_0.addEventListener("click", function () {
  chuoi_tinh_toan = chuoi_tinh_toan + nut_0.textContent.trim();
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});

nut_1.addEventListener("click", function () {
  chuoi_tinh_toan = chuoi_tinh_toan + nut_1.textContent.trim();
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});

nut_2.addEventListener("click", function () {
  chuoi_tinh_toan = chuoi_tinh_toan + nut_2.textContent.trim();
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
nut_3.addEventListener("click", function () {
  chuoi_tinh_toan = chuoi_tinh_toan + nut_3.textContent.trim();
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
nut_4.addEventListener("click", function () {
  chuoi_tinh_toan = chuoi_tinh_toan + nut_4.textContent.trim();
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
nut_5.addEventListener("click", function () {
  chuoi_tinh_toan = chuoi_tinh_toan + nut_5.textContent.trim();
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
nut_6.addEventListener("click", function () {
  chuoi_tinh_toan = chuoi_tinh_toan + nut_6.textContent.trim();
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
nut_7.addEventListener("click", function () {
  chuoi_tinh_toan = chuoi_tinh_toan + nut_7.textContent.trim();
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
nut_8.addEventListener("click", function () {
  chuoi_tinh_toan = chuoi_tinh_toan + nut_8.textContent.trim();
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
nut_9.addEventListener("click", function () {
  chuoi_tinh_toan = chuoi_tinh_toan + nut_9.textContent.trim();
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
//Dấu phẩy
nut_phay.addEventListener("click", function () {
  if (
    ((chuoi_tinh_toan.indexOf("+") >= chuoi_tinh_toan.indexOf(".")) |
      (chuoi_tinh_toan.indexOf("-") >= chuoi_tinh_toan.indexOf(".")) |
      (chuoi_tinh_toan.indexOf("*") >= chuoi_tinh_toan.indexOf(".")) |
      (chuoi_tinh_toan.indexOf("/") >= chuoi_tinh_toan.indexOf("."))) &
    (chuoi_tinh_toan.substring(
      chuoi_tinh_toan.length - 1,
      chuoi_tinh_toan.length
    ) !=
      ".")
  ) {
    chuoi_tinh_toan = chuoi_tinh_toan + nut_phay.textContent.trim();
  }
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
let thoi_gian_cho;

//Ham xoa bo nho
function xoa_bo_nho(){
  bien_nho = 0;
  bit_nho = 0;
  // nut_m.style.backgroundColor = rgb(9, 172, 236);
  congthuc_tinh_toan.textContent = "Đã xóa bộ nhớ.";
}

//Nút cm
nut_cm.addEventListener("mousedown", function () {
 thoi_gian_cho=setTimeout(xoa_bo_nho,1000);
});

nut_cm.addEventListener("mouseup", function () {
  clearTimeout(thoi_gian_cho); //lệnh này có thể làm cho bit nhớ =1 trở lại, ko hiểu vì sao.
  if (bit_nho==1){
    chuoi_tinh_toan = chuoi_tinh_toan + bien_nho;
    document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
  }
  else{
    congthuc_tinh_toan.textContent = "Bộ nhớ rỗng";
  }
});
//Nút dấu cộng
nut_cong.addEventListener("click", function () {
  if (
    chuoi_tinh_toan.substring(
      chuoi_tinh_toan.length - 1,
      chuoi_tinh_toan.lenght
    ) != "+"
  ) {
    chuoi_tinh_toan = chuoi_tinh_toan + nut_cong.textContent.trim();
  }
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
//Nút dấu trừ
nut_tru.addEventListener("click", function () {
  if (
    chuoi_tinh_toan.substring(
      chuoi_tinh_toan.length - 1,
      chuoi_tinh_toan.length
    ) != "-"
  ) {
    chuoi_tinh_toan = chuoi_tinh_toan + nut_tru.textContent.trim();
  }
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
//Nút dấu nhân
nut_x.addEventListener("click", function () {
  if (
    chuoi_tinh_toan.substring(
      chuoi_tinh_toan.length - 1,
      chuoi_tinh_toan.length
    ) != "*"
  ) {
    chuoi_tinh_toan = chuoi_tinh_toan + nut_x.textContent.trim();
  }
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
//Nút dấu chia
nut_chia.addEventListener("click", function () {
  if (
    chuoi_tinh_toan.substring(
      chuoi_tinh_toan.length - 1,
      chuoi_tinh_toan.length
    ) != "/"
  ) {
    chuoi_tinh_toan = chuoi_tinh_toan + nut_chia.textContent.trim();
  }
  document.querySelector(".ketqua").textContent = chuoi_tinh_toan;
});
// Dấu bằng
nut_bang.addEventListener("click", function () {
  congthuc_tinh_toan.textContent = chuoi_tinh_toan;
  manhinh_ketqua.textContent = eval(chuoi_tinh_toan);
  chuoi_tinh_toan = "";
});
