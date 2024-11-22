import { StringCalculator } from "./stringCalculator";
import { TextCalculator } from "./textCalculator";
import { WordCalculator } from "./wordCalculator";

export class ClasseCreateur{
    static creerClasse(){
    
        const nom = process.env.CLASS_NAME;
        
        if(nom){
            if(nom == 'StringCalculator'){
                return new StringCalculator();
            }
            else if(nom == 'WordCalculator'){
                return new WordCalculator();
            }
            else if( nom == 'TextCalculator'){
                return new TextCalculator();
            }
            return null;
        }
    }
}