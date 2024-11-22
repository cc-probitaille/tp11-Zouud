import { StringCalculator } from "../stringCalculator";
import { ClasseCreateur } from "../ClasseCreateur";
import { WordCalculator } from "../wordCalculator";
import { TextCalculator } from "../textCalculator";


describe("Verifier creation de classe par reflexion",  async() => {

    it('Creation de la classe StringCalculator',  async() => {

        process.env.CLASS_NAME = 'StringCalculator';
        const Exemple = ClasseCreateur.creerClasse();
        expect( Exemple instanceof StringCalculator).toBeTruthy();
    });

    it('Creation de la classe WordCalculator',  async() => {

        process.env.CLASS_NAME = 'WordCalculator';
        const Exemple = ClasseCreateur.creerClasse();
        expect( Exemple instanceof WordCalculator).toBeTruthy();
    });

    it('Creation de la classe TextCalculator',  async() => {

        process.env.CLASS_NAME = 'TextCalculator';
        const Exemple = ClasseCreateur.creerClasse();
        expect( Exemple instanceof TextCalculator).toBeTruthy();
    });

    it('Aucune creation de classe',  async() => {

        process.env.CLASS_NAME = 'Bonjour';
        const Exemple = ClasseCreateur.creerClasse();
        expect( Exemple).toBe(null);
    });

});
