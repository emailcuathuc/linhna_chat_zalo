// Hiển thị nội dung tooltip chat theo điều kiện
document.addEventListener("DOMContentLoaded", function () {
  const helloCustomer = document.getElementById("hello-customer");
  const pageView = getCookie("linhna_page_view");
  const zaloCustomer = localStorage.getItem("linhna_zalo_customer");
  const phoneCustomer = localStorage.getItem("linhna_phone_customer");

  function showContent(content) {
    let currentIndex = 0;

    setInterval(function () {
      helloCustomer.innerHTML = content[currentIndex % content.length];
      currentIndex++;
    }, 3000);
  }

  if (pageView && (zaloCustomer || phoneCustomer)) {
    let content = [
      `Hoan nghênh <span style="color: red;"><strong>${
        zaloCustomer || phoneCustomer
      }</strong></span> quay trở lại`,
      "Tư vấn 24/24 kể cả lễ tết qua Zalo",
      "Chat ngay để được tư vấn"
    ];
    showContent(content);
  } else if (pageView > 1) {
    let content = [
      "Tư vấn 24/24 kể cả lễ tết qua Zalo",
      "Bạn đang xếp thứ <span style='color: red;'>1</span> trong hàng đợi",
      "Chat ngay để được tư vấn"
    ];
    showContent(content);
  } else {
    let content = [
      "Tư vấn 24/24 kể cả lễ tết qua Zalo",
      "Chat ngay để được tư vấn"
    ];
    showContent(content);
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
});

// Các giá trị $pf
const phoneNumbers = [
  "0947779***",
  "0837777***",
  "0362526***",
  "0375757***",
  "0352506***",
  "0984095***",
  "0356774***",
  "0328540***",
  "0388898***",
  "0917880***",
  "0901405***",
  "0389958***",
  "0976012***",
  "0989996***",
  "0977152***",
  "0977737***",
  "0989749***",
  "0988580***",
  "0762111***",
  "0963576***",
  "0964086***",
  "0964270***",
  "0399979***",
  "0936299***",
  "0961553***",
  "0849651***",
  "0973946***",
  "0977291***",
  "0967891***",
  "0985375***",
  "0979891***",
  "0382203***",
  "0376200***",
  "0329345***",
  "0916701***",
  "0986286***",
  "0903164***",
  "0917079***",
  "0375483***",
  "0979637***",
  "0979637***",
  "0903886***",
  "0335968***",
  "0912645***",
  "0973856***",
  "0986167***",
  "0984378***",
  "0976359***",
  "0833253***",
  "0905919***",
  "0936822***",
  "0937274***",
  "0935117***",
  "0344009***",
  "0985648***",
  "0934159***",
  "0967001***",
  "0338313***",
  "0372839***",
  "0825778***",
  "0986461***",
  "0976566***",
  "0367723***",
  "0933830***",
  "0367370***",
  "0975947***",
  "0981063***",
  "0904524***",
  "0906003***",
  "0942218***",
  "0853144***",
  "0906533***",
  "0778662***",
  "0969583***",
  "0777006***",
  "0912965***",
  "0984673***",
  "0344824***",
  "0965215***",
  "0906481***",
  "0386571***",
  "0936546***",
  "0911458***",
  "0912389***",
  "0707864***",
  "0984360***",
  "0905320***",
  "0968765***",
  "0985556***",
  "0912108***",
  "0336284***",
  "0336284***",
  "0973474***",
  "0974154***",
  "0974154***",
  "0359197***",
  "0386850***",
  "0867345***",
  "0766396***",
  "0787984***",
  "0938907***",
  "0338960***",
  "0933282***",
  "0977406***",
  "0975239***",
  "0972441***",
  "0944070***",
  "0918423***",
  "0988132***",
  "0982189***",
  "0982455***",
  "0969689***",
  "0364311***",
  "0976927***",
  "0979598***",
  "0963666***",
  "0968125***",
  "0989419***",
  "0974930***",
  "0983993***",
  "0987136***",
  "0988356***",
  "0979675***",
  "0979380***",
  "0397890***",
  "0968119***",
  "0337977***",
  "0349625***",
  "0868924***",
  "0968091***",
  "0989391***",
  "0973276***",
  "0977767***",
  "0985812***",
  "0915591***",
  "0354134***",
  "0374640***",
  "0347775***",
  "0367406***",
  "0936322***",
  "0984771***",
  "0984771***",
  "0982518***",
  "0963183***",
  "0963611***",
  "0906535***",
  "0986880***",
  "0989895***",
  "0877784***",
  "0906466***",
  "9073085***",
  "0919564***",
  "0902536***",
  "0798347***",
  "0965197***",
  "0963655***",
  "0328356***",
  "0933739***",
  "0779092***",
  "0843015***",
  "0974475***",
  "0914384***",
  "0976384***",
  "0866555***",
  "0903290***",
  "0981594***",
  "0369410***",
  "0357939***",
  "0792228***",
  "0708888***",
  "0939567***",
  "0918904***",
  "0977974***",
  "0837352***",
  "0983890***",
  "0812365***",
  "0913646***",
  "0389969***",
  "0978675***",
  "0868628***"
];

function getRandomPhoneNumber() {
  const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
  return phoneNumbers[randomIndex];
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updatePhoneNumber() {
  const pfls = localStorage.getItem("linhna_phone_customer") || localStorage.getItem("linhna_zalo_customer");
  const newPf = getRandomPhoneNumber();

  const slidePhoneElement = document.getElementById("slide_phone");

  if (pfls) {
    slidePhoneElement.innerHTML = `<span style="color: #b64545;">${pfls}</span> - <span class="lnPf">${newPf}</span>`;
  } else {
    slidePhoneElement.innerHTML = `<span class="lnPf">${newPf}</span>`;
  }

  const pfElement = slidePhoneElement.querySelector(".lnPf");
  pfElement.style.color = getRandomColor();
}

setInterval(updatePhoneNumber, 4000);

updatePhoneNumber();