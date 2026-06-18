let a=['apple','banana','mango'];
a.pop();
console.log(a);
a.push('grape');
console.log(a);
console.log(a.length);
a.shift();
console.log();
a.unshift('orange');
console.log(a);
let numbers=[1,2,3,4,5];
let result=numbers.map(uday=>uday*2);
console.log(result);
let names=['uday','shiva','manohar','vivek','akhil'];
let result1=names.map(name=>name.toUpperCase());
console.log(result1);
let result2=names.filter(name=>name.length>6);
console.log(result2);
let result3=numbers.filter(num=>num >2);
console.log(result3);


let sum = numbers.reduce((total,num)=>{
    return total*num;}
,1);
console.log(sum);
let greater=numbers.find(num=>num>3);
console.log(greater);
let somex=numbers.some(numb=>numb>30);
console.log(somex);