export default function Projects(){
    return(
        <>
        <div className="parent-project">
            <h2>Our Projects</h2>
                <div className="pic1-container">
                <img src="pro-1.png" alt="pic" className="pro1" />
                <img src="pro-2.png" alt="pic" className="pro2"/>
                </div>
                <div className="pic1-container">
                <img src="pro-3.png" alt="pic" className="pro3"/>
                <img src="pro-4.png" alt="pic" className="pro4"/>
                <img src="pro-5.png" alt="pic" className="pro5"/>
                </div>
            <button className="project-button" > ALL PROJECTS → </button>
        </div>
        </>
    )
}