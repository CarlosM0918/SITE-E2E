export class Utilities{
    number=1
    setQuantity(num){
        if (num) this.number=num;
        else this.number=2;
    }

    getQuantity(){
        return this.number
    }


}