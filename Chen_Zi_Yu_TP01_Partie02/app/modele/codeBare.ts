import { Client } from "./client";
import { Option } from "./option";
import { Produit } from "./produit";
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
export class CodeBare {
    id: number;
    code: string;
    description: string;
    client: Client;
    produit: Array<Produit>;
    option: Array<Option>;

    constructor() {
        this.id = undefined;
        this.code = undefined;
        this.description = undefined;
        this.client = undefined;
        this.produit = undefined;
        this.option = undefined;
    }
}