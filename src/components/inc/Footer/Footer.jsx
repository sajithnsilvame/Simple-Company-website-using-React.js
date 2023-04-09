import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="">
        <section className="section footer bg-dark text-white pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company information</h6>
                        <hr/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    </div>

                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div> <Link to={"/"}>Home</Link> </div>
                        <div> <Link to={"/about"}>About</Link> </div>
                        <div> <Link to={"/contact"}>Contact</Link> </div>
                        <div> <Link to={"/blog"}>Blog</Link> </div>
                    </div>

                    <div className="col-md-4">
                        <h6>Reach Us </h6>
                        <hr/>
                        <div> <p className="text-white mb-1">No32/ mirigama, gampaha</p> </div>
                        <div> <p className="text-white mb-1">+94 712457937</p> </div>
                        <div> <p className="text-white mb-1">0252255616</p> </div>
                        <div> <p className="text-white mb-5">hello@gmail.com</p> </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;