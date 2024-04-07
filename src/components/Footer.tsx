import { Language, useLanguage } from "../context/LanguageContext";

export const Footer = ({ titles }: any) => {
  const { lang } = useLanguage();
  return (
    <>
      <div id="footer" className="text-center">
        <div className="container">
          <div
            className="LI-profile-badge"
            data-version="v1"
            data-size="medium"
            data-locale="en_US"
            data-type="vertical"
            data-theme="light"
            data-vanity="thaisavelino"
          >
            <a
              className="LI-simple-link"
              href="https://www.linkedin.com/in/chiheb-ben-cheikh-448552221/"
              style={lang === ("ar" as Language) ? { marginRight: "45px" } : {}}
            >
              {titles[lang]["name"]}
            </a>
          </div>

          <div className="socials-media text-center">
            <ul className="list-unstyled">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/chiheb-ben-cheikh-448552221/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ChihebBENCHEIKH1"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitlab.com/bencheikh.chiheb"
                >
                  <i className="fab fa-gitlab"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
