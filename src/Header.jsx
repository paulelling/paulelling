import { Link } from "react-router-dom"

export default function Header() {
    function hamburgerIconClick() {
        var hamburgerIcon = document.getElementById("hamburgerIcon");
        var mobileMenuLinks = document.getElementById("mobileMenuLinks");

        if (hamburgerIcon.className == "hamburgerIconHide") {
            hamburgerIcon.className = "hamburgerIconShow";
            mobileMenuLinks.className = "mobileMenuLinksShow";
        }
        else {
            hamburgerIcon.className = "hamburgerIconHide";
            mobileMenuLinks.className = "mobileMenuLinksHide";
        }
    }

    function mobileMenuLinkClick() {
        var hamburgerIcon = document.getElementById("hamburgerIcon");
        var mobileMenuLinks = document.getElementById("mobileMenuLinks");
        hamburgerIcon.className = "hamburgerIconHide";
        mobileMenuLinks.className = "mobileMenuLinksHide";
    }

    return (
        <div className="header">
            <img src="/PaulElling.png" height="100px" width="100px"></img>
            <div id="menu" className="menuShow">
                <Link to="/Home/Index">Home</Link>
                <a href="http://machineprograms.org">Machine Programs</a>
                <Link to="/Leadership/Guidelines">Leadership</Link>
                <Link to="/Writing/Essays">Writing</Link>
                <Link to="/Drawing/Sketches">Drawing</Link>
                <Link to="/About/Profile">About</Link>
            </div>
            <div className="mobileMenu">
                <img id="hamburgerIcon" className="hamburgerIconHide" height="50px" width="50px" onClick={hamburgerIconClick}></img>
                <div id="mobileMenuLinks" className="mobileMenuLinks">
                    <Link to="/Home/Index" onClick={mobileMenuLinkClick}>Home</Link>
                    <br />
                    <a href="http://machineprograms.org">Machine Programs</a>
                    <br />
                    <Link to="/Leadership/Guidelines" onClick={mobileMenuLinkClick}>Leadership</Link>
                    <br />
                    <Link to="/Writing/Essays" onClick={mobileMenuLinkClick}>Writing</Link>
                    <br />
                    <Link to="Drawing/Sketches" onClick={mobileMenuLinkClick}>Drawing</Link>
                    <br />
                    <Link to="/About/Profile" onClick={mobileMenuLinkClick}>About</Link>
                </div>
            </div>
        </div>
    )
}