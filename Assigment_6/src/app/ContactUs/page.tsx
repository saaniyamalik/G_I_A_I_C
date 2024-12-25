export default function Contact(){
    return(
        <>
        <div className="parent-form">
        <h2> Contact Us </h2>
        <div className="child-form">
           <div className="contact-length">
           <form action="">
            <input type="text" placeholder="Name" className="contact-form" required />
            <input type="number" placeholder="Phone Number" className="contact-form" required />
            <input type="email" placeholder="E-mail" className="contact-form" required />
            <input type="text" placeholder="Interested In" className="contact-form" required />
            <input type="text" placeholder="Message" className="contact-form-message" required />
        </form>
           </div>
            <div>
                <img src="contact-pic.png" alt="pictures" className="contact-pic" />
            </div> 
        </div>
        <button className="contact-button"> Send Email  → </button>
        
        </div>
        </>
    );
}