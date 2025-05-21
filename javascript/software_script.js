import { elementGen } from "/javascript/script.js";
import { jsonElementLinkGen } from "/javascript/script.js";

//function elementGen (ElementType, Parent, Id, Class, TextContent, href, src, alt)

//Top three boxes
//Manuals
//Tutorials
//Software
elementGen("div","body","top_body_div");
elementGen("div","body","top_body_manuals");
elementGen("h2","top_body_manuals","manuals_header","","Manuals & Books");
elementGen("div","body","top_body_tutorial");
elementGen("h2","top_body_tutorial","tutorial_header","","Tutorials & Guides");
elementGen("div","body","top_body_software");
elementGen("h2","top_body_software","software_header","","Software");

//Bottom single box
//Personal Software
elementGen("div","body","bottom_body_div");
elementGen("div","body","bottom_body_self");

jsonElementLinkGen("a","top_body_tutorial","/software/tutorial_links.json");
jsonElementLinkGen("a","top_body_manuals","/software/manuals_links.json");
jsonElementLinkGen("a","top_body_software","/software/software_links.json");