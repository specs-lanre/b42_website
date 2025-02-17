
var val1=100
console.log(val1)
var val1=340
console.log(val1)
var val1=900
console.log(val1)

let val2=670
/*
console.log(val2)
val2=8870
console.log(val2)
val2=680
console.log(val2)
*/
const val3=670
console.log(val3)
//val3=970


let names1=['bola','kemi']
let names2=['kola','yemi']
//console.log(names1[0])
//console.log(names1[1])
//console.log(names1.concat(names2))

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

var x= ages.every(checkAdult)
//console.log(x)


const ages2 = [3, 10, 18, 20,23,45,19];
function checkAge(age) {
  return age > 18;
}
var x = ages2.find(checkAge)
//console.log(x)



var p1 = { name:"Jamiu Adeleke",
skill:"python,html,css",
details:function(){
	return this.name+"<br>"+ this.skill
} }; // object literal syntax 

//alternative
var p2 = new Object(); 
// Object() constructor function
p2.name = "Jamiu Adeleke"; 
// property

console.log(p1.name)
console.log(p1.skill)
console.log(p1.details())

document.getElementById("rsp").innerHTML=p1.details()









