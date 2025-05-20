export function elementGen(elementType, parent, ident, class_name="",  textContent="",  href=""){
    switch (elementType){
        case "table":
            let table = document.createElement("table");
            table.id = ident;
            document.getElementById(parent).appendChild(table);
            break;
        case "tr":
            let row = document.createElement("tr");
            row.id = ident;
            document.getElementById(parent).appendChild(row);
            break;
        case "td":
            let cell = document.createElement("td");
            cell.id = ident;
            document.getElementById(parent).appendChild(cell);
            break;
        case "a":
            let anch = document.createElement("a");
            anch.id = ident;
            anch.textContent = textContent;
            anch.href = href;
            anch.className = class_name;
            document.getElementById(parent).appendChild(anch);
            break;
        case "h1":
            let header1 = document.createElement("h1");
            header1.textContent = textContent;
            header1.id = ident;
            document.getElementById(parent).appendChild(header1);
            break;
    }
}