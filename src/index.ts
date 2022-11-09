import { Artwork } from "./Artwork";
import { Statue } from "./Statue";

let lista: Artwork[]=[];

document.addEventListener('DOMContentLoaded', () => {
    // AlapÉrték adás:
    let darabSzam = 0;
    let osszesErtek = 0;

    let joNevhez = /^[A-Z, ]{1,}/


    document.getElementById('felvetel')?.addEventListener('click', () => {
        // error deletes:
        (document.getElementById('rNev') as HTMLElement).textContent = '';
        (document.getElementById('rEv') as HTMLElement).textContent = '';
        (document.getElementById('rAr') as HTMLElement).textContent = '';
        (document.getElementById('rMagassag') as HTMLElement).textContent = '';

        // ertekek:
        let joNev = joNevhez.test((document.getElementById('nev') as HTMLInputElement).value);
        let joEv = parseInt((document.getElementById('ev') as HTMLInputElement).value) <= 2022;
        let joAr = parseInt((document.getElementById('ar') as HTMLInputElement).value) >= 1;
        let joMagassag = parseInt((document.getElementById('magassag') as HTMLInputElement).value) > 10;

        // ellenorzes:
        if(joNev && joEv && joAr && joMagassag){

            // FelsoErtek adas:
            darabSzam++;
            osszesErtek += parseInt((document.getElementById('ar') as HTMLInputElement).value);

            (document.getElementById('darabSzam') as HTMLElement).textContent = darabSzam.toString();
            (document.getElementById('osszesAra') as HTMLElement).textContent = osszesErtek.toString();
            // Listához adás:
            lista.push(new Statue((document.getElementById('nev') as HTMLInputElement).value, 
            parseInt((document.getElementById('ev') as HTMLInputElement).value),
            parseInt((document.getElementById('ar') as HTMLInputElement).value),
            parseInt((document.getElementById('magassag') as HTMLInputElement).value)
            ));
            // Form urites:
            (document.getElementById('nev') as HTMLInputElement).value = '';
            (document.getElementById('ev') as HTMLInputElement).value = '';
            (document.getElementById('ar') as HTMLInputElement).value = '';
            (document.getElementById('magassag') as HTMLInputElement).value = '';

        }else if(!joNev){
            (document.getElementById('rNev') as HTMLElement).textContent = 'Rossz nevet adott meg!(Csak angol ABC karaktereket, szőköz ill. vessző karaktereket tartalmazhat csak)';
        }else if(!joEv){
            (document.getElementById('rEv') as HTMLElement).textContent = 'Rossz évjáratot adott meg!';
        }else if(!joAr){
            (document.getElementById('rAr') as HTMLElement).textContent = 'Rossz áratt adott meg (min 1)!';
        }else if(!joMagassag){
            (document.getElementById('rMagassag') as HTMLElement).textContent = 'Rossz magasságot adott meg (min 10)!';
        }
    })
})
