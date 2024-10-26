const modalOpenBtn = document.querySelector(".controls_shop-open");
const modalContainer = document.querySelector(".modal-upgrade_container");
const modalCloser = document.querySelector(".fa-circle-xmark");
const kyzmaBtn = document.querySelector(".kyzma-button");
const bossHP = document.querySelector(".boss-hp");
const kyzmaRespect = document.querySelector(".points");

let currentBossHP = +bossHP.innerHTML;
let currentKyzmaRespect = +kyzmaRespect.innerHTML;

modalOpenBtn.addEventListener("click", () => {
    modalContainer.classList.remove("display-none");
});

modalCloser.addEventListener("click", () => {
    modalContainer.classList.add("display-none");
});

kyzmaBtn.addEventListener("click", () => {
    currentBossHP--;
    bossHP.innerHTML = currentBossHP;

    currentKyzmaRespect++;
    kyzmaRespect.innerHTML = currentKyzmaRespect;
});
