"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let lista = [];
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    // AlapÉrték adás:
    let darabSzam = 0;
    let osszesErtek = 0;
    let joNevhez = /^[A-Za-z, ]{1,}$/;
    (_a = document.getElementById('felvetel')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        // error deletes:
        document.getElementById('rNev').textContent = '';
        document.getElementById('rEv').textContent = '';
        document.getElementById('rAr').textContent = '';
        document.getElementById('rMagassag').textContent = '';
        // ertekek:
        let joNev = joNevhez.test(document.getElementById('nev').value);
        let joEv = parseInt(document.getElementById('ev').value) <= 2022;
        let joAr = parseInt(document.getElementById('ar').value) >= 1;
        let joMagassag = parseInt(document.getElementById('magassag').value) > 10;
        // ellenorzes:
        if (joNev && joEv && joAr && joMagassag) {
            // FelsoErtek adas:
            darabSzam++;
            osszesErtek += parseInt(document.getElementById('ar').value);
            document.getElementById('darabSzam').textContent = darabSzam.toString();
            document.getElementById('osszesAra').textContent = osszesErtek.toString();
            // Listához adás:
            lista.push(new Statue_1.Statue(document.getElementById('nev').value, parseInt(document.getElementById('ev').value), parseInt(document.getElementById('ar').value), parseInt(document.getElementById('magassag').value)));
            // Form urites:
            document.getElementById('nev').value = '';
            document.getElementById('ev').value = '';
            document.getElementById('ar').value = '';
            document.getElementById('magassag').value = '';
        }
        else if (!joNev) {
            document.getElementById('rNev').textContent = 'Rossz nevet adott meg!(Csak angol ABC karaktereket, szőköz ill. vessző karaktereket tartalmazhat csak)';
        }
        else if (!joEv) {
            document.getElementById('rEv').textContent = 'Rossz évjáratot adott meg!';
        }
        else if (!joAr) {
            document.getElementById('rAr').textContent = 'Rossz áratt adott meg (min 1)!';
        }
        else if (!joMagassag) {
            document.getElementById('rMagassag').textContent = 'Rossz magasságot adott meg (min 10)!';
        }
    });
});
