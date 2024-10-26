const modalOpenBtn = document.querySelector(".controls_shop-open");
const modalContainer = document.querySelector(".modal-upgrade_container");
const modalCloser = document.querySelector(".fa-circle-xmark");
const kyzmaBtn = document.querySelector(".kyzma-button");
const bossHP = document.querySelector(".boss-hp");
const kyzmaRespect = document.querySelector(".points");
const modalCoinsNumber = document.querySelector(".modal-upgrade_coins-number");
const modalDamagePrice = document.querySelector(".modal-upgrade_damage-price");
const modalUpgradeDamage = document.querySelector(".modal-upgrade_damage");
const enemy = document.querySelector(".enemy");

let currentBossHP = +bossHP.innerHTML;
let currentKyzmaRespect = +kyzmaRespect.innerHTML;
let currentModalDamagePrice = +modalDamagePrice.innerHTML;
let damage = 5;
let bossNr = 6;

console.log(enemy.src);

modalOpenBtn.addEventListener("click", () => {
    modalContainer.classList.remove("display-none");

    modalCoinsNumber.innerHTML = currentKyzmaRespect;
});

modalCloser.addEventListener("click", () => {
    modalContainer.classList.add("display-none");
});

kyzmaBtn.addEventListener("click", () => {
    currentBossHP -= damage;
    bossHP.innerHTML = currentBossHP;

    currentKyzmaRespect += damage;
    kyzmaRespect.innerHTML = currentKyzmaRespect;

    if (currentBossHP <= 0) {
        bossNr++;
        enemy.src = `./img/image ${bossNr}.png`;
    }
});

modalUpgradeDamage.addEventListener("click", () => {
    if (currentKyzmaRespect >= currentModalDamagePrice) {
        damage++;
        currentKyzmaRespect = currentKyzmaRespect - currentModalDamagePrice;
        currentModalDamagePrice = (currentModalDamagePrice * 1.3).toFixed(2);
        modalDamagePrice.innerHTML = currentModalDamagePrice;
        modalCoinsNumber.innerHTML = currentKyzmaRespect.toFixed(1);
        kyzmaRespect.innerHTML = currentKyzmaRespect.toFixed(1);
    }
});
