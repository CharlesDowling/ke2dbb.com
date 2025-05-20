export function elementGen(elementType, parent, ident, class_name="",  textContent="",  href="", src="", alt=""){
    //function elementGen (ElementType, Parent, Id, Class, TextContent, href, src, alt)
    let new_element = document.createElement(elementType);
    new_element.id = ident;
    new_element.className = class_name;
    new_element.textContent = textContent;
    new_element.href = href;
    new_element.src = src;
    new_element.alt = alt;
    document.getElementById(parent).appendChild(new_element);
}