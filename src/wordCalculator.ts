
export class WordCalculator {
  private sum = 0;

  add(input: string): number {
    if (input.length > 0) {
      const numbers = this.splitInput(input);
      numbers.forEach((value) => (this.sum += value));
    }
    return this.sum;
  }

  /**
   * Transforme la chaîne d'entrée en un tableau de nombres.
   * @param input La chaîne d'entrée à parser.
   * @returns Un tableau de nombres extraits de la chaîne d'entrée.
   */
  private splitInput(input: string): number[] {
    const defaultDelimiters = /[,\n]/;
    let customDelimiter: string | undefined;

    // Vérifie si un délimiteur personnalisé est spécifié
    if (input.startsWith('//')) {
      customDelimiter = this.extractCustomDelimiter(input);
      // Retire la ligne de définition du délimiteur personnalisé
      input = input.split('\n').slice(1).join('\n');
    }

    const inputArray = customDelimiter 
      ? input.split(customDelimiter) 
      : input.split(defaultDelimiters);

    return inputArray.map(Number);
  }

  /**
   * Extrait le délimiteur personnalisé de la chaîne d'entrée.
   * @param input La chaîne d'entrée contenant le délimiteur personnalisé.
   * @returns Le délimiteur personnalisé.
   */
  private extractCustomDelimiter(input: string): string {
    return input[2];
  }
}