export function elementGen(elementType, parent, ident, class_name="",  textContent="",  href="", src="", alt=""){
    //function elementGen (ElementType, Parent, Id, Class, TextContent, href, src, alt)
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