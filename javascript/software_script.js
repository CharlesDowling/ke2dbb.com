import { elementGen } from "/javascript/script.js";

//function elementGen (ElementType, Parent, Id, Class, TextContent, href, src, alt)

//Top three boxes
//Manuals
//Tutorials
//Software
elementGen("div","body","top_body_div");
elementGen("div","body","top_body_manuals");
elementGen("div","body","top_body_tutorial");
elementGen("div","body","top_body_software");


elementGen("h1","top_body_div","wip","","WORK IN PROGRESS");

//Bottom single box
//Personal Software
elementGen("div","body","bottom_body_div");
elementGen("div","body","bottom_body_self");

let host = window.location.hostname;

let json_links

fetch('/software/tutorial_links.json')
    .then((response) => response.json())
    .then((json) => lson_links = json);

console.log(json);
