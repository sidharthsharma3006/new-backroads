import logo from "../images/logo.svg"; 
import { socialLinks } from "../Data.js"; 
import { PageLinks } from "./pageLinks";
const Navbar = ()=>{
    return(
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" subClass="nav-link"/>
       

        <ul className="nav-icons"> 
          {
            socialLinks.map((x)=>{
              return (
                <li>
                  <a
                    href={x.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={x.icon}></i>
                  </a>
                </li>
              );
            })
          }
         </ul>
      </div>
    </nav>
    );
}

export default Navbar; 