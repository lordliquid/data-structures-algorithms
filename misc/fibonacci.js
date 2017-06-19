// WORSE CASE COMPLEXITY - O(n) ewww
function fibonacci(n){
  var fibo = [0, 1];
  
  if (n <= 2) return 1;

  for (let i = 2; i <= n; i++) {
   fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

 return fibo[n];
} 

fibonacci(12);



// Recursive version - O(n^2)
function fibonacciR(n){
  if(n <= 1)
    return n;
  else
    return fibonacciR(n - 1) + fibonacciR(n - 2);  
}

fibonacciR(12);