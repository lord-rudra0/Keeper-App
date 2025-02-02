//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

import React from "react";

function Footer()
{
    const current_date=new Date();
    const years=current_date.getFullYear();
    return (<div>
        <footer>
        <p>Created By <a href="#">Me</a></p>;
            <p>copyright {years}</p>
            </footer>
    </div>);
}

export default Footer;