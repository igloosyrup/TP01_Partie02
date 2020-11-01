import { ClientType } from "./clientType";
import { CodeBare } from "./codeBare";
import { Details } from "./details";
import { Droit } from "./droit";
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
export class Client {

    id: number;
    type: ClientType;
    adresse: string;
    droit: Array<Droit>;
    codeBare: CodeBare;
    details: Details;

    constructor(){
        this.id = undefined;
        this.type = undefined;
        this.adresse = undefined;
        this.droit = undefined;
        this.codeBare = undefined;
        this.details = undefined;
    }
}