import {Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'CreditCardPipe'})
class CreditCardDash implements PipeTransform{
    transform(value:number,dashed?:number):
    number{
        if(!number)
        {
            return error;
        }
        if(number.length<16)
        {
            return error
        }
        if(number==16)
        {
            dashed = number.join('-');
            return dashed;
        }
    }
}
