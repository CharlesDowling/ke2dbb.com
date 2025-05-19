/*<div id="header">
            <a href="/index.html">
                <h1 id="top_title">KE2DBB</h1>
            </a>
            <table id="link_table">
                <tr id="links">
                    <th>
                        <a class="links" href="/programming/index.html">Programming</a>
                    </th>
                    <th>
                        <a class="links" href="/libertas/index.html">Libertas</a>
                    </th>
                    <th>
                        <a class="links" href="/software/index.html">Software</a>
                    </th>
                </tr>
            </table>
        </div>*/

const header = document.createElement("div");
header.id = "header";
document.body.appendChild(header)

//Homepage Link
let homepage_link = document.createElement("a");
homepage_link.id = "homepage_link";
homepage_link.href = "/index.html";
document.getElementById("header").appendChild(homepage_link);

let top_title = document.createElement("h1");
top_title.textContent = "KE2DBB";
top_title.id = "top_title";
document.getElementById("homepage_link").appendChild(top_title);

//Table to organize links
let link_table = document.createElement("table");
link_table.id = "link_table";
document.getElementById("header").appendChild(link_table);

let link_row = document.createElement("tr");
link_row.id = "link_row";
document.getElementById("link_table").appendChild(link_row);


//CREATE PROGRAMMING LINKS
let programming_row = document.createElement("td");
programming_row.id = "programming_cell";
document.getElementById("link_row").appendChild(programming_row);

let programming_link = document.createElement("a");
programming_link.id = "programming_link";
programming_link.textContent = "Programming";
programming_link.href = "/programming/index.html";
document.getElementById("programming_cell").appendChild(programming_link);


//CREATE LIBERTAS LINKS
let libertas_row = document.createElement("td");
libertas_row.id = "libertas_cell";
document.getElementById("link_row").appendChild(libertas_row);

let libertas_link = document.createElement("a");
libertas_link.id = "libertas_link";
libertas_link.textContent = "Libertas";
libertas_link.href = "/libertas/index.html";
document.getElementById("libertas_cell").appendChild(libertas_link);


//CREATE SOFTWARE LINKS
let software_row = document.createElement("td");
software_row.id = "software_cell";
document.getElementById("link_row").appendChild(software_row);

let software_link = document.createElement("a");
software_link.id = "software_link";
software_link.textContent = "Software";
software_link.href = "/software/index.html";
document.getElementById("software_cell").appendChild(software_link);