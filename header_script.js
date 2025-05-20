/*<div id="header">
            <a href="/index.html">
                <h1 id="top_title">KE2DBB</h1>
            </a>
            <table id="link_table">
                <tr id="links_row">
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

import {elementGen} from "/script.js"

const header = document.createElement("div");
header.id = "header";
document.body.appendChild(header)

//Homepage Link
elementGen("a","header","homepage_link","","","/index.html");
elementGen("h1","homepage_link", "top_title","","KE2DBB");

//Table to organize links
elementGen("table","header","link_table");
elementGen("tr","link_table","link_row");

//CREATE PROGRAMMING LINKS
elementGen("td", "link_row", "programming_cell");
elementGen("a","link_row", "programming_link", "top_link", "Programming", "/programming/index.html");


//CREATE LIBERTAS LINKS
elementGen("td", "link_row", "libertas_cell");
elementGen("a", "link_row", "libertas_link", "top_link", "Libertas", "/libertas/index.html");

//CREATE SOFTWARE LINKS
elementGen("td", "link_row", "software_cell");
elementGen("a", "link_row", "software_link", "top_link", "Software", "/software/index.html");

