function setAmount(value) {
  document.getElementById("amount").value = value;
}

function createQR() {
  const amount = document.getElementById("amount").value;
  if (!amount || amount <= 0) {
    alert("Vui lòng nhập số tiền");
    return;
  }

  const message = document.getElementById("message").value || "DONATE";

  const bankCode = "MB";
  const accountNumber = "0383438198"; // STK của bạn
  const template = "compact2";

  const qrUrl =
    `https://img.vietqr.io/image/${bankCode}-${accountNumber}-${template}.png` +
    `?amount=${amount}&addInfo=${encodeURIComponent(message)}`;

  document.getElementById("qr").src = qrUrl;
  document.getElementById("qrBox").style.display = "block";
}
