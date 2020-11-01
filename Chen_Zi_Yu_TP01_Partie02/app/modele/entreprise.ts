import { Client } from "./client";
import { Contact } from "./contact";

export class Entreprise extends Client {
    nom: string;
    phone: string;
    fax: string;
    contact: Contact;

    constructor() {
        super();
        this.nom = undefined;
        this.phone = undefined;
        this.fax = undefined;
        this.contact = new Contact();
    }
}