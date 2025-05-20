export function elementGen(elementType, parent, ident, class_name="",  textContent="",  href=""){
    let new_element = document.createElement(elementType);
    new_element.id = ident;
    new_element.className = class_name;
    new_element.textContent = textContent;
    new_element.href = href;
    document.getElementById(parent).appendChild(new_element);
}