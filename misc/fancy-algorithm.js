function greatestCommonDivisor(a, b){
   if(b == 0)
     return a;
   else 
     return greatestCommonDivisor(b, a%b);
}

var gcd = greatestCommonDivisor(14, 21);
console.log(gcd);