import { Droit } from "./droit";
import { Produit } from "./produit";
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
export class DroitProduit {
    id: number;
    droit: Droit;
    produit: Produit;

    constructor(droit: Droit, produit: Produit) {
        this.id = undefined;
        this.droit = droit;
        this.produit = produit;
    }
}