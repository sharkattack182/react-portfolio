import React from "react";
import Img from '../imgs/IMG_5813.png';
// import resume from '../imgs/resume.html';

function Index() {
    return (
        <section>
            <div className="box text-center">
                <img src= {Img} className="float-left" alt="selfie"/>
                    <h2><img src="https://fontmeme.com/permalink/201004/ccc013e4630cb9794053de14c3664e7d.png" alt="font" /></h2>
                    <p>
                        My name is Matthew Courtney. I am currently a UNC Charlotte Full Stack Web
                        Development Bootcamp
                        student. The bootcamp is a 12 week course where I am working to become proficient in
                        HTML5, CSS3, JavaScript, JQuery,
                        Bootstrap, React.js, Node.js, C#, .Net, Database theory, MongoDB, MySQL, Command
                        Line, and Git.

                    </p>
                    <p>
                        I am relatively new to coding but ever since I started I havent been able to stop.
                        While I am learning the development aspect I also would
                        consider myself profficent in web design. I studied graphic design in college and I
                        feel this will really help me in my ability to not only build
                        someone else's designs but also offer insight into the design process itself.

                    </p>
                    <a href="https://github.com/sharkattack182" target="_blank" ><button type="button" className="btn btn-dark zoom"><i className="fab fa-github"></i></button></a>
                    <a href="https://www.linkedin.com/in/matthew-courtney-2854811b5/" target="_blank"><button type="button" className="btn btn-dark zoom"><i className="fab fa-linkedin"></i></button></a>
                    <a href="#" target="_blank"><button type="button" className="btn btn-dark zoom"><i className="fas fa-file"></i></button></a>
                    <a href="mailto:matthewdc182@gmail.com"><button type="button" className="btn btn-dark zoom"><i className="fas fa-envelope-square"></i></button></a>
                    <a href="tel:607-206-4901"><button type="button" className="btn btn-dark zoom"><i className="fas fa-phone"></i></button></a>
                </div>
            </section>
    )
}

export default Index;