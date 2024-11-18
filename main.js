

//ways of arrays
//1 way
let a=["red",12,true,null]
console.log(a)

//2way
const b=[]
console.log(b)

b[0]="red"
console.log(b)

b[1]=null
console.log(b)

b[20]="ram"
console.log(b)

//3way
let c=new Array("red","yellow",true,null)
console.log(c)

//to access the elements
let d=["red","pink","yellow","green",true]
console.log(d)
console.log(d[0])
console.log(d[6])

//1.push()
let e=["red","yellow","orange"]
console.log(e)
e.push("violet")
console.log(e)
e.push("ram",12,true)
console.log(e)

//2.pop()
let f=["red","yellow","orange"]
console.log(f)
console.log(f.pop())
console.log(f)

//3.unshift()
let g=["red","yellow","orange"]
console.log(g)
g.unshift("violet")
console.log(g)
g.unshift(true)
console.log(g)

//4.shift()
let h=["red","yellow","orange"]
console.log(h)
h.shift()
console.log(h)
h.shift()
console.log(h)

//5.indexOf()
let i=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(i)
console.log(i.indexOf("yellow"))
console.log(i.indexOf("violet"))
console.log(i.indexOf("red"))

//6.lastIndexOf()
let j=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(j)
console.log(j.lastIndexOf("red"))
console.log(j.lastIndexOf("purple"))
console.log(j.lastIndexOf(true))

//7.reverse()
let k=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(k)
console.log(k.reverse())

//8.includes()
let l=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(l)
console.log(l.includes("yellow"))
console.log(l.includes(false))

//9.toString()
let m=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(m)
console.log(m.toString())

//10.slice()
let n=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(n)
console.log(n.slice(1))
console.log(n.slice(-8))
console.log(n.slice(-2))
console.log(n.slice(1,7))
console.log(n.slice(-4,-1))
console.log(n.slice(0,-4))

//11.splice()
let o=["red","yellow","orange"]
console.log(o)
//console.log(o.splice(1)) 
//console.log(o)

//console.log(o.splice(-2))
//console.log(o)

//console.log(o.splice(0,3))
//console.log(o)

console.log(o.splice(1,2,true,null,12))
console.log(o)

//12.join()
let p=["ram","raj"]
console.log(p)
console.log(p.join())
console.log(p.join(" and "))



//for of loop
let q=[1,2,3,4,5,6,7,8,9,10]
for(x of q)
{
    console.log(x)
}

let r=["pink","yellow","red"]
for(x of r)
{
    console.log(x)
}

//13.keys()
let s=["pink","yellow",12,14,true,null]
let keys1=s.keys()
for(y of keys1)
{
    console.log(y)
}

//14.values()
let t=["pink","yellow",12,14,true,null]
let values1=t.values()
for(y of values1)
{
    console.log(y)
}

//15.entries()
let u=["pink","yellow",12,14,true,null]
let entries1=u.entries()
for(y of entries1)
{
    console.log(y)
}

//16.filter()
let v=[12,34,56,9,2,18]
console.log(v.filter(checkAdult))
function checkAdult(age)
{
    return age>18
}
checkAdult()

//17.map()
let w=[1,2,3,4,5]
console.log(w.map(num=>num*2))

let w1=[1,4,9,16,25]
console.log(w1.map(Math.sqrt))

let w2=[1,2,3,4,5]
console.log(w2.map(demo))
function demo(num)
{
    return num*10
}
demo()

let fruits=["apple","banana"]
let results=fruits.map((fruits,index)=>`${index+1}:${fruits}`)
console.log(results)


//18.flat()
let a1=[1,2,[3,4,[5,6,[7,8,[9,10]]]]]
console.log(a1.flat())
console.log(a1.flat(2))
console.log(a1.flat(4))

//19.fill()
let a2=["pink","yellow","blue"]
//console.log(a2)
//console.log(a2.fill("violet"))
console.log(a2.fill("violet",0,2))
//console.log(a2.fill("violet",0,1))

//20.find()
let a3=[2,5,13,85.24]
console.log(a3.find(element=>element>2))
console.log(a3.find(num=>num>90))

//21.findIndex()
let a4=[2,3,5,13,85,24]
console.log(a4.findIndex(num=>num>7))
console.log(a4.findIndex(element=>element>90))

let a41=[2,3,5,13,85,24]
console.log(a41.findIndex(demo))
function demo(num)
{
    return num>5
}
demo()

//22.some()
let a5=[2,8,11,10,4]
console.log(a5.some(num=>num>4))
console.log(a5.some(element=>element<1))

//23.every()
let a6=[2,8,11,10,4]
console.log(a6.every(num=>num>11))
console.log(a6.every(num=>num>1))

//24sort()
let a7=["banana","apple","cherry"]
console.log(a7)
console.log(a7.sort())

let a8=[12,5,24,13,2]
console.log(a8)
console.log(a8.sort())
console.log(a8.sort((a,b)=>a-b)) //converts ascending order
console.log(a8.sort((a,b)=>b-a)) //converts descending order