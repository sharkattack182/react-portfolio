import React from "react";
import img1 from '../imgs/Capture.PNG';
import img2 from '../imgs/Capture5.PNG';
import img3 from '../imgs/Capture6.PNG';
import img4 from '../imgs/Capture7.PNG';
import img5 from '../imgs/Capture2.PNG';
import img6 from '../imgs/Capture3.png';

function Portfolio() {
    return (
        <section>
            <div className="box text-center">
                <h2><img src="https://fontmeme.com/permalink/201004/26cff3fe2a1576302921a5ebb158b9db.png" alt="font" /></h2>
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade z" data-ride="carousel">
                    <div className="carousel-inner">
                        <div classNAme="carousel-item active data-interval='100'">
                            <img class="d-block w-100 grayscale " src={img1} alt="First slide" />
                            <h3><strong>Pokdex Project</strong></h3>
                            <a href="https://vast-escarpment-44555.herokuapp.com/" target="_blank"><button type="button"
                                class="btn btn-dark zoom"><i className="fas fa-link"></i></button></a>
                            <a href="https://github.com/sharkattack182/project-2" target="_blank"><button type="button"
                                class="btn btn-dark zoom"><i className="fab fa-github"></i></button></a>
                        </div>
                        <div className="carousel-item data-interval='100'">
                            <img className="d-block w-100 grayscale" src={img2} alt="Second slide" />
                            <h3><strong>GeoSnacks</strong></h3>
                            <a href="https://srassam.github.io/Project_1_Restaurant_Finder/" target="_blank"><button type="button"
                                className="btn btn-dark zoom"><i className="fas fa-link"></i></button></a>
                            <a href="https://github.com/Srassam/Project_1_Restaurant_Finder" target="_blank"><button type="button"
                                className="btn btn-dark zoom"><i className="fab fa-github"></i></button></a>
                        </div>
                        <div className="carousel-item data-interval='100'">
                            <img className="d-block w-100 grayscale" src={img3} alt="Third slide" />
                            <h3><strong>Class Directory</strong></h3>
                            <a href="https://powerful-lowlands-68943.herokuapp.com/" target="_blank"><button type="button"
                                className="btn btn-dark zoom"><i className="fas fa-link"></i></button></a>
                            <a href="https://github.com/sharkattack182/react-employee" target="_blank"><button type="button"
                                className="btn btn-dark zoom"><i className="fab fa-github"></i></button></a>
                        </div>
                        <div className="carousel-item data-interval='100'">
                            <img className="d-block w-100 grayscale" src={img4} alt="Third slide" />
                            <h3><strong>Fitness Tracker</strong></h3>
                            <a href="https://serene-hollows-52003.herokuapp.com/?id=5f6c17698612e400175f7619" target="_blank"><button type="button"
                                className="btn btn-dark zoom"><i className="fas fa-link"></i></button></a>
                            <a href="https://github.com/sharkattack182/workout-tracker" target="_blank"><button type="button"
                                className="btn btn-dark zoom"><i className="fab fa-github"></i></button></a>
                        </div>
                        <div className="carousel-item data-interval='100'">
                            <img className="d-block w-100 grayscale" src={img5} alt="Third slide" />
                            <h3><strong>Password Generator</strong></h3>
                            <a href="https://sharkattack182.github.io/password-generator/" target="_blank"><button type="button"
                                className="btn btn-dark zoom"><i className="fas fa-link"></i></button></a>
                            <a href="https://github.com/sharkattack182/password-generator" target="_blank"><button type="button"
                                className="btn btn-dark zoom"><i className="fab fa-github"></i></button></a>
                        </div>
                        <div className="carousel-item data-interval='100'">
                            <img className="d-block w-100 grayscale" src={img6} alt="Third slide" />
                            <h3><strong>Eat-da-Burger</strong></h3>
                            <a href="https://enigmatic-oasis-07418.herokuapp.com/" target="_blank"><button type="button"
                                className="btn btn-dark zoom"><i className="fas fa-link"></i></button></a>
                            <a href="https://github.com/sharkattack182/burger" target="_blank"><button type="button"
                                className="btn btn-dark zoom"><i className="fab fa-github"></i></button></a>
                        </div>
                        <a className="carousel-control-prev dark z" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next z" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;