
import React from "react";
import '../css/bootstrap.min.css';
import '../css/datepicker.css';
import '../css/templatemo-style.css';



function Page2() {
  return (
    <div >
      <div className="tm-container-outer" id="tm-section-3">
                <ul className="nav nav-pills tm-tabs-links">
                    <li className="tm-tab-link-li">
                        <a href="#1a" data-toggle="tab" className="tm-tab-link">
                            <img src="./img/north-america.png" alt="Image" className="img-fluid"/>
                            North America
                        </a>
                    </li>
                    <li className="tm-tab-link-li">
                        <a href="#2a" data-toggle="tab" className="tm-tab-link">
                            <img src={process.env.PUBLIC_URL+"/img/south-america.png"} alt="Image" className="img-fluid"/>
                            South America
                        </a>
                    </li>
                    <li className="tm-tab-link-li">
                        <a href="#3a" data-toggle="tab" className="tm-tab-link">
                            <img src="img/europe.png" alt="Image" className="img-fluid"/>
                            Europe
                        </a>
                    </li>
                    <li className="tm-tab-link-li">
                        <a href="#4a" data-toggle="tab" className="tm-tab-link active">
                            <img src="img/asia.png" alt="Image" className="img-fluid"/>
                            Asia
                        </a>
                    </li>
                    <li className="tm-tab-link-li">
                        <a href="#5a" data-toggle="tab" className="tm-tab-link">
                            <img src="img/africa.png" alt="Image" className="img-fluid"/>
                            Africa
                        </a>
                    </li>
                    <li className="tm-tab-link-li">
                        <a href="#6a" data-toggle="tab" className="tm-tab-link">
                            <img src="img/australia.png" alt="Image" className="img-fluid"/>
                            Australia
                        </a>
                    </li>
                    <li className="tm-tab-link-li">
                        <a href="#7a" data-toggle="tab" className="tm-tab-link">
                            <img src="../img/antartica.png" alt="Image" className="img-fluid"/>
                            Antartica
                        </a>
                    </li>
                </ul>
                <div className="tab-content clearfix">
                	
                    /
                    <div className="tab-pane fade" id="1a">
                        <div className="tm-recommended-place-wrap">
                            <div className="tm-recommended-place">
                                <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">North Garden Resort</h3>
                                    <p className="tm-text-highlight">One North</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$110</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>                        
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Felis nec dignissim</h3>
                                    <p className="tm-text-highlight">Two North</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <div id="preload-hover-img"></div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$120</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Sed fermentum justo</h3>
                                    <p className="tm-text-highlight">Three North</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$130</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Maecenas ultricies neque</h3>
                                    <p className="tm-text-highlight">Four North</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$140</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>    
                        </div>                        

                        <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
                    </div>
                    
                  
                    <div className="tab-pane fade" id="2a">

                        <div className="tm-recommended-place-wrap">
                            <div className="tm-recommended-place">
                                <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">South Resort Hotel</h3>
                                    <p className="tm-text-highlight">South One</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$220</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>                        
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Aenean ac ante nec diam</h3>
                                    <p className="tm-text-highlight">South Second</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$230</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Suspendisse nec dapibus</h3>
                                    <p className="tm-text-highlight">South Third</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$240</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Aliquam viverra mi at nisl</h3>
                                    <p className="tm-text-highlight">South Fourth</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$250</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>    
                        </div>                        

                        <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
                    </div>      
                    
                        
                    <div className="tab-pane fade" id="3a">

                        <div className="tm-recommended-place-wrap">
                            <div className="tm-recommended-place">
                                <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Europe Hotel</h3>
                                    <p className="tm-text-highlight">Venecia, Italy</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$330</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>                        
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">In viverra enim turpis</h3>
                                    <p className="tm-text-highlight">Paris, France</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$340</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Volutpat pellentesque</h3>
                                    <p className="tm-text-highlight">Barcelona, Spain</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$350</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
                                    <p className="tm-text-highlight">Istanbul, Turkey</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$360</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>    
                        </div>                        

                        <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
                    </div> 
                    
                    
                    <div className="tab-pane fade show active" id="4a">
                    
                        <div className="tm-recommended-place-wrap">
                            <div className="tm-recommended-place">
                                <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Asia Resort Hotel</h3>
                                    <p className="tm-text-highlight">Singapore</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$440</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>                        
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Nullam eget est a nisl</h3>
                                    <p className="tm-text-highlight">Yangon, Myanmar</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <div id="preload-hover-img"></div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$450</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Proin interdum ullamcorper</h3>
                                    <p className="tm-text-highlight">Bangkok, Thailand</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$460</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Lorem ipsum dolor sit</h3>
                                    <p className="tm-text-highlight">Vientiane, Laos</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$470</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>    
                        </div>                        

                        <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
                    </div> 
                    
                    
                    <div className="tab-pane fade" id="5a">

                        <div className="tm-recommended-place-wrap">
                            <div className="tm-recommended-place">
                                <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Africa Resort Hotel</h3>
                                    <p className="tm-text-highlight">First City</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$550</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>                        
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Aenean ac magna diam</h3>
                                    <p className="tm-text-highlight">Second City</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$560</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Beach Barbecue Sunset</h3>
                                    <p className="tm-text-highlight">Third City</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$570</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
                                    <p className="tm-text-highlight">Fourth City</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$580</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>    
                        </div>                        

                        <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
                    </div>  
                    
                                
                    <div className="tab-pane fade" id="6a">

                        <div className="tm-recommended-place-wrap">
                            <div className="tm-recommended-place">
                                <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Hotel Australia</h3>
                                    <p className="tm-text-highlight">City One</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$660</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>                        
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Proin interdum ullamcorper</h3>
                                    <p className="tm-text-highlight">City Two</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$650</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Beach Barbecue Sunset</h3>
                                    <p className="tm-text-highlight">City Three</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$640</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
                                    <p className="tm-text-highlight">City Four</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$630</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>    
                        </div>                        

                        <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
                    </div> 
                    
                    
                    <div className="tab-pane fade" id="7a">

                        <div className="tm-recommended-place-wrap">
                            <div className="tm-recommended-place">
                                <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Antartica Resort</h3>
                                    <p className="tm-text-highlight">Ant City One</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$770</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>                        
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Pulvinar Semper</h3>
                                    <p className="tm-text-highlight">Ant City Two</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$230</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Cras vel sapien</h3>
                                    <p className="tm-text-highlight">Ant City Three</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$140</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>

                            <div className="tm-recommended-place">
                                <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img"/>
                                <div className="tm-recommended-description-box">
                                    <h3 className="tm-recommended-title">Nullam eget est</h3>
                                    <p className="tm-text-highlight">Ant City Four</p>
                                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>   
                                </div>
                                <a href="#" className="tm-recommended-price-box">
                                    <p className="tm-recommended-price">$190</p>
                                    <p className="tm-recommended-price-link">Continue Reading</p>
                                </a>
                            </div>    
                        </div>                        

                        <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
                    </div>
                </div>
            </div>

            <div className="tm-container-outer tm-position-relative" id="tm-section-4">
                <div id="google-map"></div>
                <form action="index.html" method="post" className="tm-contact-form">
                    <div className="form-group tm-name-container">
                        <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name"  required/>
                    </div>
                    <div className="form-group tm-email-container">
                        <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="contact_subject" className="form-control" placeholder="Subject"  required/>
                    </div>
                    <div className="form-group">
                        <textarea id="contact_message" name="contact_message" className="form-control" rows="9" placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase">Send Message Now</button>
                </form>
            </div>
    </div>
  );
}

export default Page2;