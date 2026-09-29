/* =========================================
   PARAGON // STRIKE DIVISION
   ARMERÍA
========================================= */


/* =========================================
   BASE DE DATOS DE ARMAS
========================================= */

const weapons = [

    /* =========================================
       FUSILES DE ASALTO
    ========================================= */

    {
        id: "hk416",
        name: "HK416",
        category: "FUSIL DE ASALTO",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/HK416.jpeg",
        designation: "HK416",
        manufacturer: "HECKLER & KOCH",
        country: "ALEMANIA",
        caliber: "5.56×45 mm NATO",
        system: "OPERADO POR GAS",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "sig-mcx",
        name: "SIG MCX",
        category: "FUSIL DE ASALTO",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/SIG-MCX.jpeg",
        designation: "SIG MCX",
        manufacturer: "SIG SAUER",
        country: "ESTADOS UNIDOS",
        caliber: "SEGÚN VARIANTE",
        system: "OPERADO POR GAS",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "fn-scar-l",
        name: "FN SCAR-L",
        category: "FUSIL DE ASALTO",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/FN-SCAR-L.jpeg",
        designation: "FN SCAR-L",
        manufacturer: "FN HERSTAL",
        country: "BÉLGICA",
        caliber: "5.56×45 mm NATO",
        system: "OPERADO POR GAS",
        capacity: "30 CARTUCHOS",
        weight: "SEGÚN CONFIGURACIÓN"
    },

    {
        id: "fn-scar-h",
        name: "FN SCAR-H",
        category: "FUSIL DE ASALTO",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/FN-SCAR-H.jpeg",
        designation: "FN SCAR-H",
        manufacturer: "FN HERSTAL",
        country: "BÉLGICA",
        caliber: "7.62×51 mm NATO",
        system: "OPERADO POR GAS",
        capacity: "30 CARTUCHOS",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "m4a1",
        name: "M4A1",
        category: "FUSIL DE ASALTO",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/M4A1.jpeg",
        designation: "M4A1",
        manufacturer: "COLT",
        country: "ESTADOS UNIDOS",
        caliber: "5.56×45 mm NATO",
        system: "OPERADO POR GAS",
        capacity: "30 CARTUCHOS",
        weight: "SEGÚN CONFIGURACIÓN"
    },

    {
        id: "hk-g36",
        name: "HK G36",
        category: "FUSIL DE ASALTO",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/HK-G36.jpeg",
        designation: "G36",
        manufacturer: "HECKLER & KOCH",
        country: "ALEMANIA",
        caliber: "5.56×45 mm NATO",
        system: "OPERADO POR GAS",
        capacity: "30 CARTUCHOS",
        weight: "SEGÚN VARIANTE"
    },


    /* =========================================
       FUSILES DE PRECISIÓN
    ========================================= */

    {
        id: "axmc",
        name: "ACCURACY INTERNATIONAL AXMC",
        category: "FUSIL DE PRECISIÓN",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/AXMC.jpeg",
        designation: "AXMC",
        manufacturer: "ACCURACY INTERNATIONAL",
        country: "REINO UNIDO",
        caliber: "SEGÚN CONFIGURACIÓN",
        system: "CERROJO MANUAL",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN CONFIGURACIÓN"
    },

    {
        id: "barrett-mrad",
        name: "BARRETT MRAD",
        category: "FUSIL DE PRECISIÓN",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/BARRETT-MRAD.jpeg",
        designation: "MRAD",
        manufacturer: "BARRETT FIREARMS",
        country: "ESTADOS UNIDOS",
        caliber: "SEGÚN CONFIGURACIÓN",
        system: "CERROJO MANUAL",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN CONFIGURACIÓN"
    },

    {
        id: "sig-cross",
        name: "SIG SAUER CROSS",
        category: "FUSIL DE PRECISIÓN",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/SIG-CROSS.jpeg",
        designation: "CROSS",
        manufacturer: "SIG SAUER",
        country: "ESTADOS UNIDOS",
        caliber: "SEGÚN CONFIGURACIÓN",
        system: "CERROJO MANUAL",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN CONFIGURACIÓN"
    },

    {
        id: "hk417",
        name: "HK417",
        category: "FUSIL DE PRECISIÓN",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/HK417.jpeg",
        designation: "HK417",
        manufacturer: "HECKLER & KOCH",
        country: "ALEMANIA",
        caliber: "7.62×51 mm NATO",
        system: "OPERADO POR GAS",
        capacity: "20 CARTUCHOS",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "cheytac-m200",
        name: "CHEYTAC M200",
        category: "FUSIL DE PRECISIÓN",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/CHEYTAC-M200.jpeg",
        designation: "M200 INTERVENTION",
        manufacturer: "CHEYTAC USA",
        country: "ESTADOS UNIDOS",
        caliber: ".408 CHEYTAC",
        system: "CERROJO MANUAL",
        capacity: "7 CARTUCHOS",
        weight: "SEGÚN CONFIGURACIÓN"
    }

];


/* =========================================
   ELEMENTOS DEL DOM
========================================= */

const weaponsGrid = document.getElementById("weaponsGrid");

const weaponModal = document.getElementById("weaponModal");
const closeModal = document.getElementById("closeModal");

const modalWeaponImage = document.getElementById("modalWeaponImage");
const modalWeaponCategory = document.getElementById("modalWeaponCategory");
const modalWeaponName = document.getElementById("modalWeaponName");

const modalDesignation = document.getElementById("modalDesignation");
const modalCategory = document.getElementById("modalCategory");
const modalManufacturer = document.getElementById("modalManufacturer");
const modalCountry = document.getElementById("modalCountry");
const modalCaliber = document.getElementById("modalCaliber");
const modalSystem = document.getElementById("modalSystem");
const modalCapacity = document.getElementById("modalCapacity");
const modalWeight = document.getElementById("modalWeight");


/* =========================================
   CREAR TARJETAS DE ARMAS
========================================= */

function createWeaponCards() {

    weaponsGrid.innerHTML = "";

    weapons.forEach((weapon, index) => {

        const card = document.createElement("article");

        card.className = "weapon-card";

        card.innerHTML = `
            
            <div class="weapon-card-image">

                <img
                    src="${weapon.image}"
                    alt="${weapon.name}"
                    loading="lazy"
                >

            </div>

            <div class="weapon-card-info">

                <span class="weapon-number">
                    ARM // ${String(index + 1).padStart(3, "0")}
                </span>

                <span class="weapon-category">
                    ${weapon.category}
                </span>

                <h2>
                    ${weapon.name}
                </h2>

                <p>
                    ${weapon.manufacturer}
                </p>

                <button class="weapon-button" data-id="${weapon.id}">
                    VER INFORMACIÓN
                </button>

            </div>

        `;

        weaponsGrid.appendChild(card);

    });

}


/* =========================================
   ABRIR INFORMACIÓN DEL ARMA
========================================= */

function openWeapon(id) {

    const weapon = weapons.find(item => item.id === id);

    if (!weapon) {
        return;
    }

    modalWeaponImage.src = weapon.image;
    modalWeaponImage.alt = weapon.name;

    modalWeaponCategory.textContent = weapon.category;
    modalWeaponName.textContent = weapon.name;

    modalDesignation.textContent = weapon.designation;
    modalCategory.textContent = weapon.category;
    modalManufacturer.textContent = weapon.manufacturer;
    modalCountry.textContent = weapon.country;
    modalCaliber.textContent = weapon.caliber;
    modalSystem.textContent = weapon.system;
    modalCapacity.textContent = weapon.capacity;
    modalWeight.textContent = weapon.weight;

    weaponModal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================================
   CERRAR INFORMACIÓN
========================================= */

function closeWeapon() {

    weaponModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* =========================================
   EVENTOS DE LAS TARJETAS
========================================= */

weaponsGrid.addEventListener("click", function(event) {

    const button = event.target.closest(".weapon-button");

    if (!button) {
        return;
    }

    const weaponId = button.dataset.id;

    openWeapon(weaponId);

});


/* =========================================
   CERRAR MODAL
========================================= */

closeModal.addEventListener("click", function() {

    closeWeapon();

});


/* =========================================
   CERRAR AL HACER CLICK FUERA
========================================= */

weaponModal.addEventListener("click", function(event) {

    if (event.target === weaponModal) {

        closeWeapon();

    }

});


/* =========================================
   CERRAR CON ESCAPE
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeWeapon();

    }

});


/* =========================================
   INICIALIZAR ARMERÍA
========================================= */

createWeaponCards();
