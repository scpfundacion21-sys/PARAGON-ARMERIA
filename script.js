/* =========================================
   PARAGON // STRIKE DIVISION
   ARMERÍA
========================================= */


/* =========================================
   BASE DE DATOS DE ARMAS
========================================= */

const weapons = [

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
    }

];


/* =========================================
   ELEMENTOS DE LA PÁGINA
========================================= */

const weaponsGrid =
    document.getElementById("weaponsGrid");

const weaponModal =
    document.getElementById("weaponModal");

const closeModal =
    document.getElementById("closeModal");

const modalWeaponImage =
    document.getElementById("modalWeaponImage");

const modalWeaponName =
    document.getElementById("modalWeaponName");

const modalWeaponCategory =
    document.getElementById("modalWeaponCategory");

const modalDesignation =
    document.getElementById("modalDesignation");

const modalCategory =
    document.getElementById("modalCategory");

const modalManufacturer =
    document.getElementById("modalManufacturer");

const modalCountry =
    document.getElementById("modalCountry");

const modalCaliber =
    document.getElementById("modalCaliber");

const modalSystem =
    document.getElementById("modalSystem");

const modalCapacity =
    document.getElementById("modalCapacity");

const modalWeight =
    document.getElementById("modalWeight");


/* =========================================
   CREAR TARJETAS
========================================= */

function createWeaponCards() {

    weaponsGrid.innerHTML = "";

    weapons.forEach((weapon) => {

        const card =
            document.createElement("article");

        card.className = "weapon-card";


        card.innerHTML = `

            <div class="weapon-card-image">

                <img
                    src="${weapon.image}"
                    alt="${weapon.name}"
                >

            </div>


            <div class="weapon-card-info">

                <span class="weapon-card-code">
                    ARM // ${weapon.id.toUpperCase()}
                </span>

                <h2>
                    ${weapon.name}
                </h2>

                <p>
                    ${weapon.category}
                </p>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                openWeapon(weapon);

            }
        );


        weaponsGrid.appendChild(card);

    });

}


/* =========================================
   ABRIR INFORMACIÓN DEL ARMA
========================================= */

function openWeapon(weapon) {

    modalWeaponImage.src =
        weapon.image;

    modalWeaponImage.alt =
        weapon.name;


    modalWeaponName.textContent =
        weapon.name;


    modalWeaponCategory.textContent =
        weapon.category;


    modalDesignation.textContent =
        weapon.designation;


    modalCategory.textContent =
        weapon.category;


    modalManufacturer.textContent =
        weapon.manufacturer;


    modalCountry.textContent =
        weapon.country;


    modalCaliber.textContent =
        weapon.caliber;


    modalSystem.textContent =
        weapon.system;


    modalCapacity.textContent =
        weapon.capacity;


    modalWeight.textContent =
        weapon.weight;


    weaponModal.classList.add(
        "active"
    );

}


/* =========================================
   CERRAR VENTANA
========================================= */

function closeWeapon() {

    weaponModal.classList.remove(
        "active"
    );

}


/* =========================================
   BOTÓN X
========================================= */

closeModal.addEventListener(
    "click",
    closeWeapon
);


/* =========================================
   CERRAR AL HACER CLICK FUERA
========================================= */

weaponModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === weaponModal
        ) {

            closeWeapon();

        }

    }
);


/* =========================================
   ESC PARA CERRAR
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeWeapon();

        }

    }
);


/* =========================================
   INICIAR ARMERÍA
========================================= */

createWeaponCards();
