import React from "react";

function Footer()
{
    const current_date=new Date();
    const years=current_date.getFullYear();
    return (<div>
        <footer>
        <p>Created By <a href="https://my-portfolio-wine-one-81.vercel.app/">Me</a></p>
            <p>copyright {years}</p>
            </footer>
    </div>);
}

export default Footer;