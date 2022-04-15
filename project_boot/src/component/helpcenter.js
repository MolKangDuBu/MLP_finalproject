
import React from "react";
import '../css/bootstrap.min.css';
import '../css/datepicker.css';
import '../css/templatemo-style.css';



function HelpCenter() {
  return (
    <div >

        <div className="tab-pane " id="1a">
            <div className="container-fluid mt-3" style={{"height":"200px"}}>
              <h1>ㄷ다다다다다다다</h1>
              <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="Search"/>
                <button className="btn btn-success" type="submit">Go</button>
              </div>
          </div>
        </div>
         

          <div className="tab-pane " id="1a">
            <div>
                  <h1>시작가이드</h1>
              </div>
                <div className="tm-recommended-place-wrap">
                    <div className="tm-recommended-place">
                        <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                        <div className="tm-recommended-description-help-box">
                            <h3 className="tm-recommended-title">North Garden Resort</h3>
                            <p className="tm-text-highlight">One North</p>
                            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                        </div>
                                        
                    </div>

                    <div className="tm-recommended-place">
                        <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                        <div className="tm-recommended-description-help-box">
                            <h3 className="tm-recommended-title">Felis nec dignissim</h3>
                            <p className="tm-text-highlight">Two North</p>
                            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                        </div>
                        <div id="preload-hover-img"></div>
                      
                    </div>

                    <div className="tm-recommended-place">
                        <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                        <div className="tm-recommended-description-help-box">
                            <h3 className="tm-recommended-title">Sed fermentum justo</h3>
                            <p className="tm-text-highlight">Three North</p>
                            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                        </div>
                      
                    </div>

                    <div className="tm-recommended-place">
                        <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                        <div className="tm-recommended-description-help-box">
                            <h3 className="tm-recommended-title">Maecenas ultricies neque</h3>
                            <p className="tm-text-highlight">Four North</p>
                            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                        </div>
                        
                    </div>    
                </div>                        

              {/*<a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>*/}
          </div>
          
         

          <div className="tab-pane " id="1a">
            <div>
                  <h1>시작가이드</h1>
              </div>
                <div className="tm-recommended-place-wrap">
                    <div className="tm-recommended-place">
                        <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                        <div className="tm-recommended-description-help-box">
                            <h3 className="tm-recommended-title">North Garden Resort</h3>
                            <p className="tm-text-highlight">One North</p>
                            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                        </div>
                                        
                    </div>

                    <div className="tm-recommended-place">
                        <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                        <div className="tm-recommended-description-help-box">
                            <h3 className="tm-recommended-title">Felis nec dignissim</h3>
                            <p className="tm-text-highlight">Two North</p>
                            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                        </div>
                        <div id="preload-hover-img"></div>
                      
                    </div>

                    <div className="tm-recommended-place">
                        <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                        <div className="tm-recommended-description-help-box">
                            <h3 className="tm-recommended-title">Sed fermentum justo</h3>
                            <p className="tm-text-highlight">Three North</p>
                            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                        </div>
                      
                    </div>

                    <div className="tm-recommended-place">
                        <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                        <div className="tm-recommended-description-help-box">
                            <h3 className="tm-recommended-title">Maecenas ultricies neque</h3>
                            <p className="tm-text-highlight">Four North</p>
                            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                        </div>
                        
                    </div>    
                </div>                        

             
          </div>

    </div>
  );
}

export default HelpCenter;