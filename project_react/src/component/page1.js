
import React from "react";
import '../css/bootstrap.min.css';
import '../css/datepicker.css';
import '../css/templatemo-style.css';



function Page1() {
  return (
    <div >
           <div className="tm-container-outer" id="tm-section-2">
                <section className="tm-slideshow-section">
                    <div className="tm-slideshow">
                        <img src="img/tm-img-01.jpg" alt="Image"/>
                        <img src="img/tm-img-02.jpg" alt="Image"/>
                        <img src="img/tm-img-03.jpg" alt="Image"/>    
                    </div>
                    <div className="tm-slideshow-description tm-bg-primary">
                        <h2 className="">Europe's most visited places</h2>
                        <p>Aenean in lacus nec dolor fermentum congue. Maecenas ut velit pharetra, pharetra tortor sit amet, vulputate sem. Vestibulum mi nibh, faucibus ac eros id, sagittis tincidunt velit. Proin interdum ullamcorper faucibus. Ut mi nunc, sollicitudin non pulvinar id, sagittis eget diam.</p>
                        <a href="#" className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</a>
                    </div>
                </section>
                <section className="clearfix tm-slideshow-section tm-slideshow-section-reverse">

                    <div className="tm-right tm-slideshow tm-slideshow-highlight">
                        <img src="img/tm-img-02.jpg" alt="Image"/>
                        <img src="img/tm-img-03.jpg" alt="Image"/>
                        <img src="img/tm-img-01.jpg" alt="Image"/>
                    </div> 

                    <div className="tm-slideshow-description tm-slideshow-description-left tm-bg-highlight">
                        <h2 className="">Asia's most popular places</h2>
                        <p>Vivamus in massa ullamcorper nunc auctor accumsan ac at arcu. Donec sagittis mattis pharetra. Proin commodo, ante et volutpat pulvinar, arcu arcu ullamcorper diam, id maximus sem tellus id sem. Suspendisse eget rhoncus diam. Fusce urna elit, porta nec ullamcorper id.</p>
                        <a href="#" className="text-uppercase tm-btn tm-btn-white tm-btn-white-highlight">Continue Reading</a>
                    </div>                        

                </section>
                <section className="tm-slideshow-section">
                    <div className="tm-slideshow">
                        <img src="img/tm-img-03.jpg" alt="Image"/>
                        <img src="img/tm-img-02.jpg" alt="Image"/>
                        <img src="img/tm-img-01.jpg" alt="Image"/>
                    </div>
                    <div className="tm-slideshow-description tm-bg-primary">
                        <h2 className="">America's most famous places</h2>
                        <p>Donec nec laoreet diam, at vehicula ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse nec dapibus nunc, quis viverra metus. Morbi eget diam gravida, euismod magna vel, tempor urna.</p>
                        <a href="#" className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</a>
                    </div>
                </section>
            </div>      
		
    </div>
  );
}

export default Page1;