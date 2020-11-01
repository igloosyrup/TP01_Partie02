import { CodeBare } from "./codeBare";
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
export class Option{
    id:number;
    nom:string;
    description: string;
    codeBare: CodeBare;

    constructor(){
        this.id = undefined;
        this.nom = undefined;
        this.description = undefined;
        this.codeBare = undefined;
    }
}