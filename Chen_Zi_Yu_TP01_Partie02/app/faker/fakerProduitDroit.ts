import { Produit } from "../modele/produit";
import { Droit } from "../modele/droit";
import { DroitProduit } from "../modele/droitProduit";
import { DroitType } from "../modele/droitType";
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
const FAKER = require('faker');
const FS = require('fs');
const MAX_INSTANCE = 5;
const MIN_OPTION = 1;
const MAX_OPTION = 3;
const DROIT_UN = 1;
const DROIT_DEUX = 2;
const DROIT_TROIS = 3;

function generateDroitProduitJsonFile() {
    let tabDroitProduit: Array<DroitProduit> = new Array();
    let tabProduit: Array<Produit>;
    let tabDroit: Array<Droit>;
    let droitProduit: DroitProduit;
    let compteur: number;

    tabDroit = generateTabDroit(MAX_INSTANCE);
    tabProduit = generateTabProduit(MAX_INSTANCE);
    compteur = 1;

    while (compteur <= MAX_INSTANCE) {
        let randomDroit: Droit = getRandom(tabDroit);
        let randomProduit: Produit = getRandom(tabProduit);
        let isNotDuplicate: boolean = true;

        if (!isTabEmpty(tabDroitProduit)) {
            tabDroitProduit.forEach(droitProduitCourant => {
                if (randomDroit.id == droitProduitCourant.droit.id &&
                    randomProduit.id == droitProduitCourant.produit.id)
                    isNotDuplicate = false;
            });
        }
        if (isTabEmpty(tabDroitProduit) || isNotDuplicate) {
            droitProduit = new DroitProduit(randomDroit, randomProduit);
            droitProduit.id = compteur;
            compteur++;
            tabDroitProduit.push(droitProduit);
        }
    }
    return { "restDroitProduit": tabDroitProduit };
}

function getRandom(tab: Array<any>) {
    let randomIndex = FAKER.random.number({
        'max': tab.length - 1
    });
    return tab[randomIndex];
}

function generateDroitType(): DroitType {
    let rdnNumber = FAKER.random.number({
        'min': MIN_OPTION,
        'max': MAX_OPTION
    });
    let type: DroitType;
    switch (rdnNumber) {
        case DROIT_UN:
            type = DroitType.DROIT_01;
            break;
        case DROIT_DEUX:
            type = DroitType.DROIT_02;
            break;
        case DROIT_TROIS:
            type = DroitType.DROIT_03;
            break;
        default:
            console.log("Valeur invalide. Seulement (" + DROIT_UN + ", "
                + DROIT_DEUX + " et " + DROIT_TROIS + " sont acceptes.");
            break;
    }
    return type;
}

function generateFutureDate(): Date {
    let futureDate: Date;
    let randomFutureDays: number;
    randomFutureDays = FAKER.random.number();
    futureDate = new Date();
    futureDate.setDate(new Date().getDate() + randomFutureDays);

    return futureDate;
}

function generateTabDroit(maxInstances: number): Array<Droit> {
    let tabDroit: Array<Droit> = new Array();
    let droit: Droit;
    for (let index = 1; index <= maxInstances; index++) {
        droit = new Droit();
        droit.id = FAKER.hacker.noun() + index;
        droit.type = generateDroitType();
        droit.dateDebut = new Date();
        droit.dateFin = generateFutureDate();
        droit.client = undefined;
        tabDroit.push(droit);
    }
    return tabDroit;
}

function generateTabProduit(maxInstances: number): Array<Produit> {
    let tabProduit: Array<Produit> = new Array();
    let produit: Produit;
    for (let index = 1; index <= maxInstances; index++) {
        produit = new Produit();
        produit.id = index;
        produit.nom = FAKER.commerce.product();
        produit.description = FAKER.commerce.productDescription();
        produit.produit = new Produit();
        tabProduit.push(produit);
    }
    return tabProduit;
}

function isTabEmpty(tab: Array<any>): boolean {
    let start: number = 0;
    return tab[0] == null;
}
let webservice = generateDroitProduitJsonFile();
FS.writeFileSync("../../dataBase/produitDroits.json", JSON.stringify(webservice, null, '\t'));