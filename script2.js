let navigation=document.createElement("nav")
    navigation.setAttribute("id", "navbar")

let navbox=document.createElement("div")
    navbox.setAttribute("id", "navbar-box")

let content=document.createElement("div")
    content.innerText="wt"

navbox.append(content)







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
navbox.append(container1)

navigation.append(navbox)
document.querySelector("#head-body").append(navigation)




