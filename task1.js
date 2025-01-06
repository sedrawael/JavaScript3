
for(let  i=0 ; i<=10 ; i++)
{console.log (i);}

{console.log ('__________________')}

/*task2*/
let i=0;
while(i<=10)
{console.log (i++);}
{console.log ('__________________')}

/*task3*/
let Array = ['1, 2, 3, 4, 5']; 
for (let i=0 ; i <Array.length ; i++)
{console.log (Array[i]);}

{console.log ('__________________')}


/*task4*/

for ( let i = 0 ; i <=10 ; i +=2){
    console.log (i);
}
{console.log ('__________________')}
let sum =0;
for (let i = 1; i<=10 ; i++){
    sum +=i;
}
console.log(sum);
{console.log ('__________________')}



 /*task6*/

 let numbers = [1, 2, 3, 4, 5];
let largest = numbers[0];

for ( let i = 1 ; i<numbers.length ; i++){
    if (numbers[i]>largest ){
        largest = numbers[i];
    }

}
console.log( largest);


 /*task7*/

 let numbers1 = [5, 4, 3, 2, 1];
let smallest = numbers[0];

for ( let i = 1 ; i>numbers.length ; i++){
    if (numbers[i]>smallest){
        largest = numbers[i];
    }

}
console.log(smallest );



{console.log ('__________________')}



/*task8*/
var mum = [1, 2, 3, 4 ,5];
var sume = 0;
for (i = 0 ; i<mum.length; i++){
    sume += mum[i];
}
var ave = sume/ mum.length;
console.log(ave)

{console.log ('__________________')}






/*task9*/
let number = 5 ; 
let factorial = 1; 
for (let i = 1 ; i<=number ; i++){
    factorial *= i;
}
console.log (number+ factorial);

{console.log ('__________________')}


// /*task10*/

// var num = prompt ("Enter any number to check if it’prime or not : ");
// for (let i = 1 ; i<= num ; i++){
//   if (num % i ===0)  {

//   }
// }
/*task14*/

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}
/*task15*/
let num4= [1,3, 4, 5];  
for (let i = 0 ; i < num4.length ; i++){
    


    if (num4[i]== (4))
    
    {continue;}
    console.log (num4[i])
}
console.log("____________")
/*task16*/



 for ( i=5; i>=1; i--)
    { console.log(i)}
  
    
 console.log("____________")


/*task17 */
let arr = [1, 2, 3, 4, 5];
let startIndex = 2;  
let endIndex = 4; 
 
for (let i = startIndex; i <= endIndex; i++) {
    console.log(arr[i]);}


/*task18 */

let arr1 = [1, 2, 3, 4, 5];
let numberToFind = 4;
let found = false;


for (let i = 0; i < arr.length; i++) {
    if (arr1[i] === numberToFind) {
        found = true;
        break; 
    }
}

console.log("____________")
console.log(found);
console.log("____________")

/*task19 */
 
let arr6 =[1, 2, 1, 3, 2, 1]

for (let = 0 ; i< arr6.length; i++){

    if (arr6[i] != 3)

        {continue;}
console.log (arr6[i])
}


