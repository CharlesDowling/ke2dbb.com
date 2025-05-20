/*<figure id="homepage_figure">
            <img id="homepage_image" src="/images/Colosus_Computer.jpg" alt="Image of Colossus Computer"/>
            <figcaption id="homepage_image_caption">
                (<a href="https://commons.wikimedia.org/wiki/File:Colosus_Computer.jpg">The Colossus Computer </a>
                
                on display at Bletchley Park by Farai Gandiya is marked 

                <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a>

                <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;" alt="CC">
                <img src="https://mirrors.creativecommons.org/presskit/icons/zero.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;" alt="0">)

            </figcaption>
        </figure> 
        <div id="summary">
            <p>
            Hello, I'm Charles Dowling (KE2DBB). 
            <br/>
            I'm a software enthusiast who's programs in JavaScript, Python, and Visual Basic—tools I've used to build automation,
            create open-source projects, and help others learn how to code responsibly. But beyond the code, I'm an advocate for 
            free and open-source software (FOSS).
            <br/>
            I believe that software should be a right, not a privilege. That's why I've dedicated my time to promoting ethical 
            development, supporting communities, and sharing knowledge that empowers people to take control of their own tools 
            and data. 
            <br/>
            Whether I'm writing documentation, contributing to open-source projects, or mentoring others, my goal is to make 
            technology accessible, transparent, and free from corporate control.
            <br/>
            This is my space to share what I've learned, collaborate with like-minded individuals, and work toward a future where
            software serves everyone—fairly, freely, and with integrity.
            <br/>
            If you're a developer, a student, or someone who values open-source principles, I welcome you here.
            </p>
        </div>*/

import { elementGen } from "/javascript/script.js";

elementGen("div","body","body_div");
elementGen("figure","body_div","homepage_figure");
elementGen("img","homepage_figure","homepage_image","","","","/images/Colosus_Computer.jpg","Image of Colossus Computer");

//Homepage Image
elementGen("div", "homepage_figure", "homepage_figure_div");
elementGen("figcaption","homepage_figure_div","homepage_image_caption");
elementGen("a", "homepage_image_caption", "homepage_source_image","","The Colossus Computer by Farai Gandiya","https://commons.wikimedia.org/wiki/File:Colosus_Computer.jpg")
elementGen("a","homepage_image_caption","cc0","","CC0 1.0","https://creativecommons.org/publicdomain/zero/1.0/");
elementGen("img","homepage_image_caption","","cc","","","/images/cc.svg","CC")
elementGen("img","homepage_image_caption","","cc","","","/images/zero.svg","0")

//Text Summary
elementGen("div","body_div","summary");
elementGen("p","summary","paragraph_summary","","Hello, I'm Charles Dowling (KE2DBB). \r\n"+
    "I'm a software enthusiast who's programs in JavaScript, Python, and Visual Basic — tools I've used to build automation, create open-source projects, and help others learn how to code responsibly. " +
    "But beyond the code, I'm an advocate for free and open-source software (FOSS). \r\nI believe that software should be a right, not a privilege. That's why I've dedicated my time to promoting " + 
    "ethical development, supporting communities, and sharing knowledge that empowers people to take control of their own tools and data. \r\nWhether I'm writing documentation, contributing to open-"+
    "source projects, or mentoring others, my goal is to make technology accessible, transparent, and free from corporate control.\r\n This is my space to share what I've learned, collaborate with " + 
    "like-minded individuals, and work toward a future where software serves everyone—fairly, freely, and with integrity.\r\n If you're a developer, a student, or someone who values open-source " + 
    "principles, I welcome you here."); //Contains NewLine Carriage Returns "\r\n"