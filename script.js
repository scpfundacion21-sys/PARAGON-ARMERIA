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
        weight: "SEGÚN CONFIGURACIÓN"
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
    },


    /* =========================================
       SUBFUSILES / PDW
    ========================================= */

    {
        id: "mp5",
        name: "MP5",
        category: "SUBFUSIL / PDW",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/MP5.jpeg",
        designation: "MP5",
        manufacturer: "HECKLER & KOCH",
        country: "ALEMANIA",
        caliber: "9×19 mm",
        system: "RETROCESO RETARDADO",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "mp7",
        name: "MP7",
        category: "SUBFUSIL / PDW",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/MP7.jpeg",
        designation: "MP7",
        manufacturer: "HECKLER & KOCH",
        country: "ALEMANIA",
        caliber: "4.6×30 mm",
        system: "OPERADO POR GAS",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "p90",
        name: "P90",
        category: "SUBFUSIL / PDW",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/P90.jpeg",
        designation: "P90",
        manufacturer: "FN HERSTAL",
        country: "BÉLGICA",
        caliber: "5.7×28 mm",
        system: "OPERADO POR GAS",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "sig-mpx",
        name: "SIG MPX",
        category: "SUBFUSIL / PDW",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/SIG-MPX.jpeg",
        designation: "SIG MPX",
        manufacturer: "SIG SAUER",
        country: "ESTADOS UNIDOS",
        caliber: "9×19 mm",
        system: "OPERADO POR GAS",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "apc9",
        name: "APC9",
        category: "SUBFUSIL / PDW",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/APC9.jpeg",
        designation: "APC9",
        manufacturer: "B&T",
        country: "SUIZA",
        caliber: "9×19 mm",
        system: "OPERADO POR RETROCESO",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },


    /* =========================================
       AMETRALLADORAS
    ========================================= */

    {
        id: "fn-minimi-m249",
        name: "FN MINIMI / M249",
        category: "AMETRALLADORA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/FN-MINIMI-M249.jpeg",
        designation: "MINIMI / M249",
        manufacturer: "FN HERSTAL",
        country: "BÉLGICA / ESTADOS UNIDOS",
        caliber: "5.56×45 mm NATO",
        system: "OPERADO POR GAS",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "fn-mag",
        name: "FN MAG",
        category: "AMETRALLADORA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/FN-MAG.jpeg",
        designation: "FN MAG",
        manufacturer: "FN HERSTAL",
        country: "BÉLGICA",
        caliber: "7.62×51 mm NATO",
        system: "OPERADO POR GAS",
        capacity: "CINTA",
        weight: "SEGÚN CONFIGURACIÓN"
    },

    {
        id: "hk-mg5",
        name: "HK MG5",
        category: "AMETRALLADORA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/HK-MG5.jpeg",
        designation: "MG5",
        manufacturer: "HECKLER & KOCH",
        country: "ALEMANIA",
        caliber: "7.62×51 mm NATO",
        system: "OPERADO POR GAS",
        capacity: "CINTA",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "m240",
        name: "M240",
        category: "AMETRALLADORA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/M240.jpeg",
        designation: "M240",
        manufacturer: "FN HERSTAL",
        country: "BÉLGICA / ESTADOS UNIDOS",
        caliber: "7.62×51 mm NATO",
        system: "OPERADO POR GAS",
        capacity: "CINTA",
        weight: "SEGÚN VARIANTE"
    },


    /* =========================================
       ESCOPETAS
    ========================================= */

    {
        id: "benelli-m4",
        name: "BENELLI M4",
        category: "ESCOPETA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/BENELLI-M4.jpeg",
        designation: "M4",
        manufacturer: "BENELLI",
        country: "ITALIA",
        caliber: "12 GA",
        system: "SEMIAUTOMÁTICA",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "mossberg-590",
        name: "MOSSBERG 590",
        category: "ESCOPETA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/MOSSBERG-590.jpeg",
        designation: "590",
        manufacturer: "MOSSBERG",
        country: "ESTADOS UNIDOS",
        caliber: "12 GA",
        system: "ACCIÓN DE BOMBA",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "remington-870",
        name: "REMINGTON 870",
        category: "ESCOPETA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/REMINGTON-870.jpeg",
        designation: "870",
        manufacturer: "REMINGTON",
        country: "ESTADOS UNIDOS",
        caliber: "12 GA",
        system: "ACCIÓN DE BOMBA",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },


    /* =========================================
       PISTOLAS
    ========================================= */

    {
        id: "glock-17",
        name: "GLOCK 17",
        category: "PISTOLA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/GLOCK-17.jpeg",
        designation: "GLOCK 17",
        manufacturer: "GLOCK",
        country: "AUSTRIA",
        caliber: "9×19 mm",
        system: "SEMIAUTOMÁTICA",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "glock-19",
        name: "GLOCK 19",
        category: "PISTOLA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/GLOCK-19.jpeg",
        designation: "GLOCK 19",
        manufacturer: "GLOCK",
        country: "AUSTRIA",
        caliber: "9×19 mm",
        system: "SEMIAUTOMÁTICA",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "sig-p320",
        name: "SIG SAUER P320",
        category: "PISTOLA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/SIG-P320.jpeg",
        designation: "P320",
        manufacturer: "SIG SAUER",
        country: "ESTADOS UNIDOS",
        caliber: "9×19 mm",
        system: "SEMIAUTOMÁTICA",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
    },

    {
        id: "hk-vp9",
        name: "HK VP9",
        category: "PISTOLA",
        image: "https://scpfundacion21-sys.github.io/PARAGON-ARMERIA/HK-VP9.jpeg",
        designation: "VP9",
        manufacturer: "HECKLER & KOCH",
        country: "ALEMANIA",
        caliber: "9×19 mm",
        system: "SEMIAUTOMÁTICA",
        capacity: "SEGÚN CONFIGURACIÓN",
        weight: "SEGÚN VARIANTE"
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

    let currentCategory = "";

    weapons.forEach((weapon, index) => {


        /* =========================================
           TÍTULO DE CATEGORÍA
        ========================================= */

        if (weapon.category !== currentCategory) {

            currentCategory = weapon.category;

            const categoryTitle = document.createElement("div");

            categoryTitle.className = "weapon-category-title";

            categoryTitle.innerHTML = `
                <span>
                    ${currentCategory}
                </span>
            `;

            weaponsGrid.appendChild(categoryTitle);
        }


        /* =========================================
           CREAR TARJETA
        ========================================= */

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

                <button
                    class="weapon-button"
                    data-id="${weapon.id}">
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
