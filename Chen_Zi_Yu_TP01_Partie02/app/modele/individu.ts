import { Client } from "./client";
import { Details } from "./details";

export class Individu extends Client {
    prenom: string;
    nom: string;
    email: string;

    constructor() {
        super();
        this.prenom = undefined;
        this.nom = undefined;
        this.email = undefined;
    }
}