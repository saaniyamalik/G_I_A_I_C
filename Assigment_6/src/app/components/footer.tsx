export default function Footer(){
    return(
        <>
        <div className="parent-footer">
            <div className="image">
                <img src="footer-pic.png" alt="picture" className="footer-pic" />
            </div>
            <div className="info">
                <h3>Informtion</h3>
                <ul>
                    <li>Main</li>
                    <li>Gallery</li>
                    <li>Projects</li>
                    <li>Certifications</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className="Contact">
                <h3>Contacts</h3>
                <div className="footer-icon-text">
                    <img src="location.png" alt="" className="footer-icon"/>
                    <p> 1234 Sample Street Asutin Texas 78704 </p>
                </div>
                <div className="footer-icon-text">
                    <img src="phone.png" alt="" className="footer-icon"/>
                    <p> 512.333.2222</p>
                </div>
                <div className="footer-icon-text">
                    <img src="gmail.png" alt="" className="footer-icon"/>
                    <p> sampleemail@gmail.com </p>
                </div>


            </div>
            <div className="socialmedia">
                <h3>Social Media</h3>
                <div className="footer-icons">
                    <img src="facebook.png" alt="" className="social-icon"/>
                    <img src="twitter.png" alt="" className="social-icon"/>
                    <img src="LinkedIn.png" alt="" className="social-icon"/>
                    <img src="pininterest.png" alt="" className="social-icon"/>

                </div>
            </div>
        </div>
        </>
    )
}
