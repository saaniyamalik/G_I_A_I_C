import Footer from "../components/footer";
import Header from "../components/header";

export default function SampleProject1(){
    return(
        <>
        <Header/>
        <div className="gallery-heading">
        <h1 className="MainTopic">Sample</h1>
        <h1 className="MainTopicbelow"><span>Project 1</span></h1>
        </div>
        <div className="sampleproject-pic">
        <img src="SampleProject1.png" alt="picture" className="sampleproject1" />
        </div>
        <div className="mainbody">
            <div className="sampleproject2">
                <img src="SampleProjectPic2.png" alt="picture" className="sampleproject2" />
            </div>
            <div className="project-text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.</p>
            </div>
        </div>
        <div className="sampleproject-pic">
            <img src="SampleProjectPic3.png" alt="picture" className="sampleproject1" />
        </div>
        <Footer/>
        </>
    )
}