import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";


export default function Information(){
    return(
        <>
        <Header/>
        <div className="fullscreen">    
        <div className="gallery-heading">
        <h1 className="MainTopic"> CONTACT </h1>
        <h1 className="MainTopicbelow"><span> Information </span></h1>
        <br /><br />
        <h5> Company Name </h5>
        <p> 1234 Sample Street Austin Texas 76401 </p>
        <br />
        <h5> 512.333.2222 </h5>
        <br /><br />
        sampleemail@gmail.com
        <Link href={"/ContactUs"}><button className="contact-button"> Contact Us </button></Link>
        </div>
            <div className="MapPicture" >
                <img src="googleMaps.png" alt="map"  className="contact-picture"/>
            </div>
        </div>
        <Footer/>
        </>
    )
}
