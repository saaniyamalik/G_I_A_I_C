import Link from "next/link"
export default function Header(){
    return(
        <>
        <div className="parentContainer"> 
            <div className="header-picture">
                <img src="header-pic.png" alt="headerpicture" className="picture" />
            </div>
            <div >
                <ul className="header-text">
                    <Link href={"/Main"}><li className="mainheader">MAIN</li></Link>
                    <Link href={"/Gallery"}><li>GALLERY</li></Link>
                    <Link href={"/MainProjects"}><li>PROJECTS</li></Link> 
                    <Link href={"Certifications"}><li>CERTIFICATIONS</li></Link>
                    <Link href={"ContactInformation"}><li>CONTACTS</li></Link>
                </ul>
            </div>
        </div>
        </>
    )
}