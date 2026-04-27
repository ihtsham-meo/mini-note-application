import logo from "/home/ihtsham/Downloads/logoo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="logo">
          <img src={logo} alt="" />
          <p>Jobs for the people who are willing to work to good firms to reach thie career goals.</p>
        </div>

        <div className="links">
          <div className="link-group">
            <h4>Explore</h4>
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;