export default function Statement(){
    return(
        <>
        <div className="parent-statement" > 
            <div> <h2> Main Focus/Mission Statement</h2> </div>
            <div className="child-statement">
                <div className="statement-1">
                    <div>
                        <img src="one.png" alt="1" className="one"/>
                    </div>
                    <div className="statement-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
                    </div>
                </div>
                <div className="statement-2">
                    <div>
                        <img src="two.png" alt="2" className="two" />
                    </div>
                    <div className="statement-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
                    </div>
                </div>
            </div>
        </div>




        {/* <div >
        <div>
        
        </div>
        <div >
        <div >
        <img src="one.png" alt="1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>    
        </div>
        <div className="statement-2"> </div>
        </div>
        </div> */}
        </>
    )
}