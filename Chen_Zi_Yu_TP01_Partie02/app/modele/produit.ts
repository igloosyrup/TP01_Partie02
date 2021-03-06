import { CodeBare } from "./codeBare";
import { Option } from "./option";
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
export class Produit {
    id: number;
    nom: string;
    description: string;
    codeBar: CodeBare;
    option: Option;
    produit: Produit;

    constructor() {
        this.id = undefined;
        this.nom = undefined;
        this.description = undefined;
        this.codeBar = undefined;
        this.option = undefined;
        this.produit = undefined;
    }
}