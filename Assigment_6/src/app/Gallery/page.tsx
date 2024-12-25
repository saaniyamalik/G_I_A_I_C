import Footer from "../components/footer";
import Header from "../components/header";

export default function Gallery(){
    return(
        <>
        <Header/>
        <div className="gallery-heading">
        <h1 className="MainTopic">Photo</h1>
        <h1 className="MainTopicbelow"><span>Gallery</span></h1>
        </div>
            <div className="gallery-pictures">
                <img src="gallery-pic1.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic2.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic3.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic4.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic5.png" alt="picture" className="gallery-pic" />
            </div>
            <div className="gallery-pictures">
                <img src="gallery-pic6.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic7.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic8.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic9.png" alt="picture" className="gallery-pic" />
                <img src="gallery-pic10.png" alt="picture" className="gallery-pic" />
            </div>
        <Footer/>
        </>
    )
}