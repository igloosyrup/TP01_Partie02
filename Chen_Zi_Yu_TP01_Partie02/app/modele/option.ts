import { CodeBare } from "./codeBare";

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