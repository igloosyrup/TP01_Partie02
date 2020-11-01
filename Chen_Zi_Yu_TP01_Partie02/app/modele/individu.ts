import { Client } from "./client";
import { Details } from "./details";
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
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