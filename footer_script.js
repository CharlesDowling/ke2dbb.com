import {elementGen} from "/script.js"

const footer = document.createElement("div");
footer.id = "footer";
document.body.appendChild(footer)

const para = document.createElement("p");
para.textContent = "Test Texts";
document.getElementById("footer").appendChild(para);