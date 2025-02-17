console.log("this is external javascript file 02 !")
//alert("this is a  pop box!")
value1=100
value2="this is a text"
value3=340
value4=true
value5= value3>value1
value6=["tunde",3400,"wale",true]

//Numeric


//String
txt2="hello world in 2025 !"
txt3="i love apples ,apples are nice"
l = txt2.length
xval = txt2.charAt(4)
yval= txt2.substr(6)
zval= txt2.search("world")

//tosearch=/hello/
//qval=txt2.search(tosearch)

//tosearch=/apples/g
//tval=txt3.search(tosearch)

//match method
//tosearch=/apples/
//tval2=txt2.match(tosearch)

//match method
tosearch=/apples/
tval2=txt3.match(tosearch)

//match method
t2=/apples/g
tval4=txt3.match(t2)

//match method
t3=/APPLES/i
tval3=txt3.match(t3)

//match method
t5=/APPLES/ig
tval5=txt3.match(t5)

//console.log(tval5)

//index operation
console.log(txt2[0])
console.log(txt2[1])
console.log(txt2[2])
console.log(txt2[5])
//looping

for(ival=0;ival<txt2.length;ival++){
console.log(ival,txt2[ival])	
}

tda=""
for(ival=0;ival<txt2.length;ival++){
console.log(ival,txt2[ival])
tda=tda+ival+" "+txt2[ival]+"<br>"	
}









//alert(l)
el=document.getElementById("some_id")
//el.innerHTML=l
//el.innerHTML=xval
//el.innerHTML=yval
//el.innerHTML=zval
//el.innerHTML=qval
el.innerHTML=tda



//Array
//Objects











