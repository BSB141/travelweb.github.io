
let navigation=document.createElement("nav")
    navigation.setAttribute("id", "navbar")

let content=document.createElement("div")
    content.innerText="wt"

navigation.append(content)
document.querySelector("#body-head").append(navigation)





let container1=document.createElement("div")
   container1.setAttribute("id", "container")

let box1=document.createElement("div")
    
let anchor1=document.createElement("a")
    anchor1.setAttribute("href", "index.html")
    anchor1.innerText="home"
box1.append(anchor1)

let box2=document.createElement("div")

let anchor2=document.createElement("a")
    anchor2.setAttribute("href", "index1.html")
    anchor2.innerText="about"
box2.append(anchor2)

let box3=document.createElement("div") 
    
let anchor3=document.createElement("a")
    anchor3.setAttribute("href", "index2.html")
    anchor3.innerText="contact"
box3.append(anchor3)

container1.append(box1, box2, box3)
navigation.append(container1)





let container2=document.createElement("div")
    container2.setAttribute("id", "container3")

let heading=document.createElement("h1")
    heading.innerText="travel the world"

let p1=document.createElement("p")
    p1.innerText="travel the world, experience the greatness, it's the best gift given by nature"

let p2=document.createElement("p")
let anchor=document.createElement("a")
    anchor.setAttribute("href", "#showcase")
    anchor.innerText="explore places"

    p2.append(anchor)
container2.append(heading, p1, p2)
document.querySelector("#body-head").append(container2)

