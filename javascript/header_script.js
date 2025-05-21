/*<div id="header">
            <a href="/index.html">
                <h1 id="top_title">KE2DBB</h1>
            </a>
            <table id="link_table">
                <tr id="links_row">
                    <a class="links" href="/programming/index.html">Programming</a>
                    <a class="links" href="/libertas/index.html">Libertas</a>
                    <a class="links" href="/software/index.html">Software</a>   
                </tr>
            </table>
        </div>*/

import {elementGen} from "/javascript/script.js"

document.getElementById("body").hidden = true;

const header = document.createElement("div");
header.id = "header";
document.body.appendChild(header)

//Homepage Link
elementGen("a","header","homepage_link","","","/index.html");
elementGen("h1","homepage_link", "top_title","","KE2DBB");

//Table to organize links
elementGen("div","header","link_div");

//CREATE PROGRAMMING LINKS
elementGen("a","link_div", "programming_link", "top_link", "Programming", "/programming/index.html");


//CREATE LIBERTAS LINKS
elementGen("a", "link_div", "libertas_link", "top_link", "Libertas", "/libertas/index.html");

//CREATE SOFTWARE LINKS
elementGen("a", "link_div", "software_link", "top_link", "Software", "/software/index.html");

