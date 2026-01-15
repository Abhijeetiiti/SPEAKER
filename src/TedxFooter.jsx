import { Instagram, Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import "./TedxFooter.css";

export default function TedxFooter() {
  return (
    <footer className="tedx-footer">
      <div className="tedx-container">
        {/* Branding */}
        <div className="tedx-brand">
          <h2>
            <span>TEDx</span> IIT Indore
          </h2>
          <p>
            This independent TEDx event is organized under license from TED.
            <br />
            Ideas worth spreading. Curated locally.
          </p>
        </div>

        {/* Quick Links */}
        <div className="tedx-links">
          <h3 style={{ fontSize: '27px' }}>Quick Links</h3>
          <ul>
            {[
              "About TEDx",
              "Speakers",
              "Schedule",
              "Team",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="tedx-social">
          <h3 style={{ fontSize: '27px' }}>Connect With Us</h3>
          <div className="icons">
            {[ 
              { Icon: Instagram, link: "https://instagram.com/yourtedx" },
              { Icon: Linkedin, link: "https://linkedin.com/company/yourtedx" },
              { Icon: Twitter, link: "https://twitter.com/yourtedx" },
              { Icon: Youtube, link: "https://youtube.com/@yourtedx" },
              { Icon: Mail, link: "mailto:info@yourtedx.com" },
            ].map(({ Icon, link }, index) => (
              <a key={index} href={link} target="_blank" rel="noreferrer">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="tedx-bottom">
        <p>© {new Date().getFullYear()} TEDx IIT Indore. All rights reserved.</p>
        <p>Designed with ❤️ by TEDx IITI Web Team</p>
      </div>
    </footer>
  );
}
