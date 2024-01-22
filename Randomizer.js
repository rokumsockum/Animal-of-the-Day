export class Randomizer {
    /*Class for various randomization tasks.  Refer to the methods below.
      randIndex - Accepts an array and returns a random index number from the array.
      randArray - Accepts an array and returns a random member from the array.
      randomNum - Accepts an integer and returns a random number between 0 and the integer.
    */
    
      Constructor(array, number){
        this.array = array;
        this.number = number;
    }

    randIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    randArray(array) {
        return array[this.randIndex()];
    }

    randomNum(num) {
        return Math.floor(Math.random() * num);
    }

}