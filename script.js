one=document.getElementById(`1`)
two=document.getElementById(`2`)
three=document.getElementById(`3`)
four=document.getElementById(`4`)
five=document.getElementById(`5`)
six=document.getElementById(`6`)
sev=document.getElementById(`7`)
eig=document.getElementById(`8`)
nin=document.getElementById(`9`)
zero=document.getElementById(`0`)
plus=document.getElementById(`plus`)
minus=document.getElementById(`minus`)
power=document.getElementById(`power`)
frac=document.getElementById(`percent`)
s=document.getElementById(`screen`)
ac=document.getElementById(`ac`)
del=document.getElementById(`del`)
dot=document.getElementById(`dot`)
divide=document.getElementById(`divide`)
multi=document.getElementById(`multi`)
let p=``
one.addEventListener("click",function () {
    s.innerHTML+=`<h1>1</h1>`
    p+=`1`
})
two.addEventListener("click",function () {
    s.innerHTML+=`<h1>2</h1>`
    p+=`2`
})
three.addEventListener("click",function () {
    s.innerHTML+=`<h1>3</h1>`
    p+=`3`
})
four.addEventListener("click",function () {
    s.innerHTML+=`<h1>4</h1>`
    p+=`4`
})
five.addEventListener("click",function () {
    s.innerHTML+=`<h1>5</h1>`
    p+=`5`
})
six.addEventListener("click",function () {
    s.innerHTML+=`<h1>6</h1>`
    p+=`6`
})
sev.addEventListener("click",function () {
    s.innerHTML+=`<h1>7</h1>`
    p+=`7`
})
eig.addEventListener("click",function () {
    s.innerHTML+=`<h1>8</h1>`
    p+=`8`
})
nin.addEventListener("click",function () {
    s.innerHTML+=`<h1>9</h1>`
    p+=`9`
})
zero.addEventListener("click",function () {
    s.innerHTML+=`<h1>0</h1>`
    p+=`0`
})
ac.addEventListener("click",function () {
    s.innerHTML=`<h1></h1>`
    p=``
})
del.addEventListener("click",function () {
    if (s.innerHTML.length > 0) {
    s.innerHTML = s.innerHTML.slice(0, s.innerHTML.lastIndexOf('<h1>'))}
    p=p.slice(0,-1)
    
})
power.addEventListener("click",function () {
    s.innerHTML+=`<h1>^</h1>`
    p+=`**`
})
divide.addEventListener("click",function () {
    s.innerHTML+=`<h1>/</h1>`
    p+=`/`
})
plus.addEventListener("click",function () {
    s.innerHTML+=`<h1>+</h1>`
    p+=`+`
})
minus.addEventListener("click",function () {
    s.innerHTML+=`<h1>-</h1>`
    p+=`-`
})
multi.addEventListener("click",function () {
    s.innerHTML+=`<h1>*</h1>`
    p+=`*`
})
dot.addEventListener("click",function () {
    s.innerHTML+=`<h1>.</h1>`
    p+=`.`
})
equal.addEventListener("click",function () {
    ans=eval(p)
    s.innerHTML=`<h1>=${ans}</h1>`
    console.log(p);
    p=`${ans}`
    
})
frac.addEventListener("click",function () {
    s.innerHTML+=`<h1>%</h1>`
    p+=`%`
})
