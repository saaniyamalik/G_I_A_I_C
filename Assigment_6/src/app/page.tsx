import Image from "next/image";
import Header from "./components/header";
import Main from "./mainContact/page";
import About from "./About/page";
import Statement from "./Main Focus/Mission Statement/page";
import Projects from "./Projects/page";
import Contact from "./ContactUs/page";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
    <Header/>
    <Main/>
    <About/>
    <Statement/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
