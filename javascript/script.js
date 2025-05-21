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
        let json_links = json;

        let header_link = Object.keys(json_links.links);

        header_link.forEach(key => {

            const language = Object.keys(json_links.links[key]);
            
            elementGen("h3",parent,"","",key);

            language.forEach(language => {               
                
                let id = json_links.links[key][language].id;
                let href = json_links.links[key][language].href;
                let textContent = json_links.links[key][language].textContent;
                elementGen(type, parent,id,"",textContent,href);

            });
        }
        );

    });
}