import { Client } from "./client";
import { DroitType } from "./droitType";
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
export class Droit {

    id: string;
    type: DroitType;
    dateDebut: Date;
    dateFin: Date;
    client: Client;

    constructor() {
        this.id = undefined;
        this.type = undefined;
        this.dateDebut = undefined;
        this.dateFin = undefined;
        this.client = undefined;
    }
}