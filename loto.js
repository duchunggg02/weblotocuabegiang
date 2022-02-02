var soloto = new Array(
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
);
var dem = 0;
function chay() {
  dem += 1;
  if (dem < 91) {
    tinh();
  } else {
    // document.getElementById("kq").innerHTML = "Đéo đứa nào kinh, dẹp mẹ đi =))";
    let confirm = document.getElementById("endgame");
    confirm.classList.add("popup-open");
  }
}
function tinh() {
  var kiemtra = 0;
  var so = 0;
  while (kiemtra == 0) {
    var x = Math.floor(Math.random() * 90 + 1);
    if (soloto[x - 1] != x) {
      soloto[x - 1] = x;
      so = x;
      kiemtra = 1;
    }
  }
  document.getElementById(x).innerHTML = so;
  document.getElementById("soxo").innerHTML = so;
}
function reset() {
  let confirm = document.getElementById("popup");
  if (!confirm.classList.contains("popup-open")) {
    confirm.classList.add("popup-open");
  }
}

function onOk() {
  let confirm = document.getElementById("endgame");
  confirm.classList.remove("popup-open");
}

function onCancel() {
  let confirm = document.getElementById("popup");
  confirm.classList.remove("popup-open");
}

function onConfirm() {
  location.reload();
}
