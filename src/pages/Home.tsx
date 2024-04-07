import { About } from "../components/About";
import { CVDownload } from "../components/CVDownload";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Navbar from "../components/NavBar";
import { Portfolio } from "../components/Portfolio";
import { textContent } from "../utils/Text";

export const Home = () => (
  <>
    <Navbar titles={textContent} />
    <Header titles={textContent} />
    <About titles={textContent} />
    <CVDownload titles={textContent} />
    <Portfolio titles={textContent} />
    <Contact titles={textContent} />
    <Footer titles={textContent} />
  </>
);
