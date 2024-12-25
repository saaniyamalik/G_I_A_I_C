import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";

export default function MainProjects(){
    return(
        <>
        <Header/>
        <div className="gallery-heading">
        <h1 className="MainTopic">Our</h1>
        <h1 className="MainTopicbelow"><span>Projects</span></h1>
        </div>
        <div className="sample-project">
            <div className="project-pic">
                 <img src="project1-pic.png" alt="picture" className="project-pic" />
            </div>
            <div className="sample-text">
                <h2>Sample Project </h2>
                <p className="sample-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link href={"/SampleProject1"}> <button className="view-more"> View More → </button> </Link>
            </div>
            </div>
            <div className="sample-project">
            <div className="project-pic">
                 <img src="project2-pic.png" alt="picture" className="project-pic" />
            </div>
            <div className="sample-text">
                <h2>Sample Project 2</h2>
                <p className="sample-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className="view-more"> View More → </button>
            </div>
            </div>
            <div className="sample-project">
            <div className="project-pic">
                 <img src="project3-pic.png" alt="picture" className="project-pic" />
            </div>
            <div className="sample-text">
                <h2>Sample Project 3</h2>
                <p className="sample-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className="view-more"> View More → </button>
            </div>
            </div>
        <Footer/>
        </>
    )
}