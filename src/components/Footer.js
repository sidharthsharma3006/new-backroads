import {socialLinks} from '../Data'; 
import { PageLinks } from "./pageLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" subClass="footer-link" />
      

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer