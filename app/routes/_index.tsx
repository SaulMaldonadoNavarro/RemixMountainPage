import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



export const meta: V2_MetaFunction = () => {
  return [
    { title: "Our Mountains" },
    { name: "description", content: "Our Mountains, your place" },
  ];
};

export function NavBar(){
  return(
    <nav className="bg-gray-200 text-gray-800 p-4 sticky top-0 z-10 h-28 border-b-4 border-y-lime-800 font-serif">
    <div className="flex items-center justify-between pt-11">
      <Link to={'/_index.tsx'} className="text-2xl mx-2 transition-colors font-bold">
        Our Mountains
      </Link>
      <div className="flex space-x-6 mr-40">
        <Link to={'/stories'} className="hover:text-gray-400 transition-colors">
          Stories
        </Link>
        <Link to={'/gallery'} className="hover:text-gray-400 transition-colors">
          Gallery
        </Link>
        <Link to={'/blog'} className="hover:text-gray-400 transition-colors">
          Blog
        </Link>
        <Link to={'/about'} className="hover:text-gray-400 transition-colors">
          About
        </Link>
        <Link to={'/contact'} className="hover:text-gray-400 transition-colors">
          Contact
        </Link>
        <a href="Facebook.com" className="green-100 hover:text-gray-400 transition-colors">
          <FaFacebook className="h-6 w-6" />
        </a>
        <a href="Twitter.com" className="green-100 hover:text-gray-400 transition-colors">
          <FaTwitter className="h-6 w-6" />
        </a>
        <a href="Instagram.com" className="green-1001 hover:text-gray-400 transition-colors">
          <FaInstagram className="h-6 w-6" />
        </a>
      </div>
    </div>
  </nav>
  );
}

export function Footer(){
  return(
        <footer className="bg-[#2f3e46] text-green-100 font-serif">
          <div className="container mx-auto py-8 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-bold text-xl">Our Mountains</span>
              </div>
              <div className="space-x-4">
                <a href="index" className="hover:text-gray-400 transition-colors">Home</a>
                <a href="stories" className="hover:text-gray-400 transition-colors">Stories</a>
                <a href="gallery" className="hover:text-gray-400 transition-colors">Gallery</a>
                <a href="blog" className="hover:text-gray-400 transition-colors">Blog</a>
                <a href="about" className="hover:text-gray-400 transition-colors">About</a>
                <a href="contact" className="hover:text-gray-400 transition-colors">Contact</a>
                
                <a href="privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                
                <div className="mt-4 flex items-center space-x-4">
                  <a href="Facebook.com" className="green-100 hover:text-gray-400 transition-colors">
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a href="Twitter.com" className="green-100 hover:text-gray-400 transition-colors">
                    <FaTwitter className="h-6 w-6" />
                  </a>
                  <a href="Instagram.com" className="green-100 hover:text-gray-400 transition-colors">
                    <FaInstagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">&copy; 2023 Our Mountain. All rights reserved.</p>
            </div>
          </div>
        </footer>

      );
    }

export default function Index() {
  return (
    <><main>
          <section className="bg-green-100 h-screen flex justify-between gap-4 border-b-4 border-lime-800 items-center">

            <div className="ml-24 font-serif text-lime-800 mt-20 flex flex-col items-center mb-48">
                <h1 className="text-8xl text-center pt-16">Our Planet.</h1>
                <h1 className="text-8xl text-center">Our Mountains.</h1>
                <div className="flex justify-center mt-6">
                  <button className="bg-lime-800 text-green-100 rounded-md mr-4 w-40">Our Stories</button>
                  <button className="bg-green-100 text-lime-800 rounded-md border-2 border-lime-800 w-48">How to Help</button>
                </div>
          </div>

            <div className=" w-1/3 h-96 flex items-center justify-center mt-20 mr-28 mb-40">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4" className="max-h-full max-w-full rounded-md" alt="Mountains" />
            </div>
          </section>

          <section className="bg-[#fefae0] flex justify-between gap-4 h-1/2 border-b-4 border-lime-800">

          <div className="w-1/3 h-96 flex items-center justify-center mt-20 ml-36 mb-40">
            <div className="max-h-full max-w-full rounded-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1433477155337-9aea4e790195" alt="Mountains" className="w-full h-full object-cover transition-transform hover:shadow-md" />
            </div>
          </div>


            <div className="h-96 w-1/2 font-serif text-lime-800 mt-8 flex flex-col items-center">
              <h1 className="mt-24 text-center">Do you really know what a mountain is?.</h1>
                <p className="text-2xl mt-9 mr-9 text-center">
                  "A mountain is a large landform that rises prominently above its surroundings and is characterized by its steep slopes, rugged terrain, and considerable elevation. Mountains are formed through various geological processes, such as tectonic activity, volcanic eruptions, or erosion".
                </p>
                <p className="text-center mt-5">-ChatGPT</p>
            </div>
          </section>

          <section className="bg-[#cad2c5] inline justify-center items-center h-1/2 border-b-4 border-lime-800 text-lime-800 ">
            <div className="text-center font-serif">
              <h3 className="mt-14 mb-14">
                The mountains in our home 🌍.
              </h3>
              <h1 className="text-2xl">
                Approximately 25% of the Earth's land surface is classified as mountainous terrain.
              </h1>
            </div>
            <div className="mt-14 mb-14 mx-auto text-center grid grid-cols-3 gap-4">
              <div className="ml-14">
                <img src="https://images.unsplash.com/photo-1480554840075-72cbdabbf689" alt="Animal" className="rounded-full w-40 h-40 mx-auto"/>
                <h4 className="text-lg font-bold mt-10">Wildlife</h4>
                <p className="mt-2 text-center">
                  The wildlife found in mountains varies depending on the specific region and ecosystem.
                  Wildlife in mountains has evolved to adapt to the unique challenges and opportunities presented by high-altitude environments. </p>
              </div>

            <div className="ml-14"> 
              <img src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5" alt="Animal" className="rounded-full w-40 h-40 mx-auto"/>
              <h4 className="text-lg font-bold mt-10">Plant life</h4>
                <p>
                  Plant life in mountains exhibits a fascinating array of characteristics that enable them to thrive in the challenging and diverse environments 
                  found at high altitudes. These characteristics have evolved over time in response to the unique conditions and ecological pressures present in mountainous regions.
                </p>
            </div>

            <div className="ml-14">
              <img src="https://images.unsplash.com/photo-1567080586917-e6ab6aa0df85" alt="Animal" className="rounded-full w-40 h-40 mx-auto"/>
              <h4 className="text-lg font-bold mt-10">Resources</h4>
              <p>
              The resources derived from mountains are diverse and play a crucial role in supporting human livelihoods, economies, and the overall functioning of ecosystems. Mountains are rich in various resources, including minerals, water, forests, and recreational opportunities. 
              </p>
            </div>
          </div>
          </section>
    </main></>
  );
}
