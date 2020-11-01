import { Client } from "../modele/client";
import { ClientType } from "../modele/clientType";
import { Contact } from "../modele/contact";
import { Details } from "../modele/details";
import { Entreprise } from "../modele/entreprise";
import { Individu } from "../modele/individu";
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
const FAKER = require('faker');
const FS = require('fs');
const MIN_OPTION = 1;
const MAX_OPTION = 3;
const OPTION_CLIENT = 1;
const OPTION_INDIVIDU = 2;
const OPTION_ENTREPRISE = 3;

function generateClientEnfantParentJsonFile() {
    const MAX_INSTANCE = 5;
    let tab: Array<any> = new Array();
    let client;

    for (let index = 1; index <= MAX_INSTANCE; index++) {
        let randomOption = FAKER.random.number({
            'min': MIN_OPTION,
            'max': MAX_OPTION
        });

        switch (randomOption) {
            case OPTION_CLIENT:
                client = new Client();
                client.type = ClientType.CLIENT;
                break;
            case OPTION_INDIVIDU:
                client = getIndividu();
                break;
            case OPTION_ENTREPRISE:
                client = getEntreprise();
                break;
            default:
                console.log("Valeur entre " + MIN_OPTION + " et " + MAX_OPTION + " sont depasse.");
                break;
        }

        client.id = index;
        client.adresse = generateAddress();
        client.details = generateDetails();
        tab.push(client);
    }
    return { "restClientsEnfantsParents": tab };

}
function generateAddress(): string {
    let address: string;
    let street: string;
    let city: string;
    let state: string;
    let zipCode: string;
    let country: string;

    street = FAKER.address.streetAddress();
    city = FAKER.address.city();
    state = FAKER.address.state();
    zipCode = FAKER.address.zipCode();
    country = FAKER.address.country();
    address = street + "," + city + "," + state + "," + zipCode + "," + country;
    return address;
}

function generateDetails(): Details {
    let details: Details;
    details = new Details();
    details.rue = FAKER.address.streetAddress();
    details.ville = FAKER.address.city();
    details.province = FAKER.address.state();
    return details;
}

function generateContact(): Contact {
    let contact: Contact;
    contact = new Contact();
    contact.prenom = FAKER.name.firstName();
    contact.nom = FAKER.name.lastName();
    contact.email = FAKER.internet.email();
    return contact;
}

function getIndividu(): Individu {
    let client = new Individu();
    client.type = ClientType.INDIVIDU;
    client.prenom = FAKER.name.firstName();
    client.nom = FAKER.name.lastName();
    client.email = FAKER.internet.email();
    return client;
}

function getEntreprise(): Entreprise {
    let client = new Entreprise(generateContact());
    client.type = ClientType.ENTREPRISE;
    client.nom = FAKER.company.companyName();
    client.phone = FAKER.phone.phoneNumber();
    client.fax = FAKER.phone.phoneNumber();
    return client;
}
let webservice = generateClientEnfantParentJsonFile();
FS.writeFileSync("../../dataBase/clientsEnfantsParents.json", JSON.stringify(webservice, null, '\t'));