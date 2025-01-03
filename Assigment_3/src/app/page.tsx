import Image from "next/image";

import Header from '@/components/header'

export default function Home () {

     return (
            <div>
               <img 
               src="https://img.freepik.com/premium-photo/computer-screen-with-word-it_999671-64302.jpg"
               alt="porfile-image"
               width={350}
               height={300}
               loading="lazy"
               className="rounded-full ml-80"
               />
          <div className="Content" >
        <div className="text-container">
        <p className="intro-text"> Hey,</p>
        <h1 className="name">I , am Saniya Malik </h1>
        <h2 className="title"> Frontend Developer</h2>
        </div>
        </div >  
        </div>
        
     )
}