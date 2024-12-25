import Link from "next/link";
import Header from "./components/header"
import React from "react";
export default function Home() {
  return (
    <div className="first">
      <div className="second">
        < Header />

        <div className="md:inline-flex">

          {/*AL KAABAH*/}
    <div className="parentContainer">
      <div className="childContainer">
         
        <div className="imageContainer">
        </div>
        <div className="title">AL KAABAH
            <p className="text-black">Masjid al-Haram is the largest and most important mosque in Islam, located in Mecca, Saudi Arabia.
            <Link href={"/al-kaabah"}><button className="button">Read more</button></Link>
            </p>
        </div>
        </div>

        <div className="description"></div> 
        </div>
        
          {/*AL MADINAH*/}

        <div className="parentContainer2">
        <div className="childContainer2">
        <div className="imageContainer2"></div>
        <div className="title2">AL MADINAH
            <p className="text-black">Masjid al-Nabawi, located in Medina,It was built by the Prophet MUHAMMAD peace.be.upon.him.
           <Link href={"/al-madina"}><button className="button2">Read more</button></Link>
            </p>
        </div>
        <div className="description2"></div>
        </div>
        </div>

          {/*AL AQSA*/}

        <div className="parentContainer3">
        <div className="childContainer3">
        <div className="imageContainer3"></div>
        <div className="title3">AL AQSA
            <p className="text-black">Al-Masjid al-Aqsa It is the third holiest site in Islam, after the Kaaba in Mecca and Medina.
             <Link href={"/al-aqsa"}><button className="button3">Read more</button></Link> 
            </p>
        </div>
        </div>
        <div className="description3"></div>
        </div>
        </div>
        
           {/*AL QUBAA*/}

        <div className="md:inline-flex">
        <div className="parentContainer4">
        <div className="childContainer4">
        <div className="imageContainer4"></div>
        <div className="title4">AL QUBAA
            <p className="text-black">Al-Masjid al-Quba is the first mosque built in Islam, located in the city of Medina, Saudi Arabia.
              <Link href={"/al-quba"}><button className="button4">Read more</button></Link>
            </p>
        </div>
        </div>
        <div className="description4"></div>
        </div>

          {/*AL KUFAAH*/}
  
        <div className="parentContainer5">
        <div className="childContainer5">
        <div className="imageContainer5"></div>
        <div className="title5">AL KUFAAH
            <p className="text-black">Al-Kufa Mosque is one of the oldest and most significant mosques in Iraq, located in the city of Kufah.
              <Link href={"/al-kufaah"}><button className="button5">Read more </button></Link>
               </p>
        </div>
        </div>
        <div className="description5"></div>
        </div>

          {/*AL AYESHA*/}

        <div className="parentContainer6">
        <div className="childContainer6">
        <div className="imageContainer6"></div>
        <div className="title6">AL AYESHA
            <p className="text-black">Masjid al-Aisha, also known as Masjid al-Tan'im, is a mosque located near Mecca, Saudi Arabia.
              <Link href={"/al-ayesha"}><button className="button6">Read more </button></Link>
            </p>
        </div>
        </div>
        <div className="description6"></div>
        </div>
        </div>
        </div>
        </div>
  );
};