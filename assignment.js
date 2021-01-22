
// first function
 
function kilometerToMeter(kilo){
    if (kilo<0 || typeof(kilo) !== 'number'){ 
        return ("please input a valid number");
        }
    else{
        return kilo*1000;
        }
}


// second function

function budgetCalculator(watch, phone, laptop){
    if(watch<0 || phone<0 || laptop<0){
        return ("all numbers must be positive")
        }
    else{
        var watchPrice = watch*50;
        var phonePrice = phone*100;
        var laptopPrice= laptop*500;
        return totalPrice = watchPrice + phonePrice + laptopPrice;
       }
}


// third function

function hotelCost(days){
   if(days<0){
       return ("days cant be negetive")
       }
   else if(days<=10){
       return totalCost = days*100;
       }
   else if(days<=20){
       var firstTenDay = 10*100;
       var DiscountDays = days-10;
       var firstDiscount = DiscountDays*80;
       return totalCost = firstTenDay + firstDiscount;
       }
   else{
       var tweentyDaysP = 10*100 + 10*80;
       var DiscountDays = days - 20;
       var secondDiscount =  DiscountDays*50;
       return totalCost = tweentyDaysP + secondDiscount;       
       }
}
 

// fourth function

function megaFriend(names){

 var LongestWord = " ";
 for (let i = 0; i < names.length; i++) {
   if (LongestWord.length < names[i].length) {
     LongestWord = names[i];
   }
   }
return LongestWord;    
}
