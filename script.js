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
const damageSpan = document.querySelector(".damage");
const bossNumber = document.querySelector(".boss-number");

let currentBossHP = +bossHP.innerHTML;
let currentKyzmaRespect = +kyzmaRespect.innerHTML;
let currentModalDamagePrice = +modalDamagePrice.innerHTML;
let damage = 1;
let bossNr = 6;
let currentDamageSpan = damageSpan.innerHTML;

console.log(enemy.src);

modalOpenBtn.addEventListener("click", () => {
    modalContainer.classList.remove("display-none");

    modalCoinsNumber.innerHTML = currentKyzmaRespect;

    if (bossNr == 14) {
        modalDamagePrice.innerHTML = "-999999999999";
        modalCoinsNumber.innerHTML = "-999999999999";
    }
});

modalCloser.addEventListener("click", () => {
    modalContainer.classList.add("display-none");
});

kyzmaBtn.addEventListener("click", () => {
    currentBossHP -= damage;
    bossHP.innerHTML = Math.floor(currentBossHP);

    currentKyzmaRespect += damage;
    kyzmaRespect.innerHTML = Math.floor(currentKyzmaRespect);

    if (currentBossHP <= 0) {
        bossNr++;
        enemy.src = `./img/image ${bossNr}.jpg`;
        currentBossHP = 4 * bossNr * bossNr * bossNr;
        bossNumber.innerHTML = bossNr - 5;

        if (bossNr == 13) {
            currentBossHP = 15000;
        }
        if (bossNr == 14) {
            currentBossHP = "Game Over.";
            kyzmaRespect.innerHTML = "-999999999999";
            damageSpan.innerHTML = "-999999999999";
            currentModalDamagePrice = 1000000000000000000000000000n;
            kyzmaBtn.classList.add("display-none");
        }
        bossHP.innerHTML = currentBossHP;
    }
});

modalUpgradeDamage.addEventListener("click", () => {
    if (currentKyzmaRespect >= currentModalDamagePrice) {
        damage++;
        currentDamageSpan = damage;
        currentKyzmaRespect = currentKyzmaRespect - currentModalDamagePrice;
        currentModalDamagePrice = (currentModalDamagePrice * 1.3).toFixed(2);
        modalDamagePrice.innerHTML = currentModalDamagePrice;
        modalCoinsNumber.innerHTML = Math.floor(currentKyzmaRespect);
        kyzmaRespect.innerHTML = Math.floor(currentKyzmaRespect);
        damageSpan.innerHTML = currentDamageSpan;
    }
});
