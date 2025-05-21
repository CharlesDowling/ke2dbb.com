export function elementGen(elementType, parent, ident, class_name="",  textContent="",  href="", src="", alt=""){
    //function elementGen (ElementType, Parent, Id, Class, TextContent, href, src, alt)
    //ElementType : Type of HTML element to generate
    //Parent : Parent object to appendChild()
    //Ident : Element ID
    //Class : Optional element class
    //TextContent : textContent for object
    //href : Link
    //src : File source
    //alt : Alternative text for images 
    let new_element = document.createElement(elementType);
    new_element.id = ident;
    new_element.className = class_name;
    new_element.textContent = textContent;
    new_element.setAttribute("href", href);
    if (elementType == "img"){
        new_element.setAttribute("src",src);
        new_element.setAttribute("alt", alt);
    }
    document.getElementById(parent).appendChild(new_element);
}

export async function jsonElementLinkGen(type, parent, source){
    //function jsonElementLinkGen (Type, Parent, Source)
    //Type : Type of HTML element to generate
    //Parent : Parent object
    //Source : URL link for the json file
    fetch(source)
    .then((response) => response.json())
    .then((json) => {
        for (let x in Object.keys(json.links)){
            console.log(json.links[x].id);
            console.log(json.links[x].href);
            console.log(json.links[x].textContent);
            let id = json.links[x].id;
            let href = json.links[x].href;
            let textContent = json.links[x].textContent;
            elementGen(type, parent,id,"",textContent,href);
        }
    });
}