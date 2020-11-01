import { Client } from "./client";
import { Contact } from "./contact";
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
export class Entreprise extends Client {
    nom: string;
    phone: string;
    fax: string;
    contact: Contact;

    constructor(contact : Contact) {
        super();
        this.nom = undefined;
        this.phone = undefined;
        this.fax = undefined;
        this.contact = contact;
    }
}