import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";


import { getPropertyByID , getCommentsByProperties } from "../../actions/property";
import Comment from "../Comments/Comments";
const Property = () => {
const location  = useLocation();
const history = useHistory();
const dispatch = useDispatch();

  useEffect(() => {
    console.log(location.state); // result: 'some_value'
    if(location.state){
      let propertyId = location.state.propertyId;
      dispatch(getPropertyByID(propertyId));
      dispatch(getCommentsByProperties(propertyId))
    }else{
      history.push('/')
    }
   

 }, [location]);
 const { properties } = useSelector(state => state.property);
 const { comments } = useSelector(state => state.comment);

 console.log(comments);

  return (
    <div>
      	<section class="bg-title">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-11 col-md-12">
					
							<div class="property_block_wrap style-4">
								<div class="prt-detail-title-desc">
									<h3 class="text-light">{properties.propertytitle}</h3>
									<span><i class="lni-map-marker"></i> {properties.address} {properties.city}</span>
									<h3 class="prt-price-fix">{properties.price} DT<sub>/month</sub></h3>
									<div class="pbwts-social">
										<ul>
											<li>Share:</li>
											<li><a href="JavaScript:Void(0);"><i class="ti-facebook"></i></a></li>
											<li><a href="JavaScript:Void(0);"><i class="ti-linkedin"></i></a></li>
											<li><a href="JavaScript:Void(0);"><i class="ti-twitter"></i></a></li>
											<li><a href="JavaScript:Void(0);"><i class="ti-instagram"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
							
						</div>	
					</div>
				</div>
			</section>
	  <section className="gray-simple">
      <div className="container">
        <div className="row">
      
      <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="property_block_wrap style-2">
          
          <div className="property_block_wrap_header">
            <a data-bs-toggle="collapse" data-parent="#features" data-bs-target="#clOne" aria-controls="clOne" href="javascript:void(0);" aria-expanded="false"><h4 className="property_block_title">Detail & Features</h4></a>
          </div>
          <div id="clOne" className="panel-collapse collapse show" aria-labelledby="clOne">
            <div className="block-body">
              <ul className="deatil_features">
                <li><strong>Bedrooms:</strong>3 Beds</li>
                <li><strong>Bathrooms:</strong>2 Bath</li>
                <li><strong>Areas:</strong>4,240 sq ft</li>
                <li><strong>Garage</strong>1</li>
                <li><strong>Property Type:</strong>Apartment</li>
                <li><strong>Year:</strong>Built1982</li>
                <li><strong>Status:</strong>Active</li>
                <li><strong>Cooling:</strong>Central A/C</li>
                <li><strong>Heating Type:</strong>Forced Air</li>
                <li><strong>Kitchen Features:</strong>Kitchen Facilities</li>
                <li><strong>Exterior:</strong>FinishBrick</li>
                <li><strong>Swimming Pool:</strong>Yes</li>
                <li><strong>Elevetor:</strong>Yes</li>
                <li><strong>Fireplace:</strong>Yes</li>
                <li><strong>Free WiFi:</strong>No</li>
                
              </ul>
            </div>
          </div>
          
        </div>
        <div className="property_block_wrap style-2">
          
          <div className="property_block_wrap_header">
            <a data-bs-toggle="collapse" data-parent="#dsrp" data-bs-target="#clTwo" aria-controls="clTwo" href="javascript:void(0);" aria-expanded="true"><h4 className="property_block_title">Description</h4></a>
          </div>
          <div id="clTwo" className="panel-collapse collapse show">
            <div className="block-body">
              
            </div>
          </div>
        </div>
        
        <div className="property_block_wrap style-2">
          
          <div className="property_block_wrap_header">
            <a data-bs-toggle="collapse" data-parent="#amen" data-bs-target="#clThree" aria-controls="clThree" href="javascript:void(0);" aria-expanded="true"><h4 className="property_block_title">Ameneties</h4></a>
          </div>
          
          <div id="clThree" className="panel-collapse collapse show">
            <div className="block-body">
              <ul className="avl-features third color">
                <li>Air Conditioning</li>
                <li>Swimming Pool</li>
                <li>Central Heating</li>
                <li>Laundry Room</li>
                <li>Gym</li>
                <li>Alarm</li>
                <li>Window Covering</li>
                <li>Internet</li>
                <li>Pets Allow</li>
                <li>Free WiFi</li>
                <li>Car Parking</li>
                <li>Spa & Massage</li>
              </ul>
            </div>
          </div>
        </div>
        
       
        <div className="property_block_wrap style-2">
          
          <div className="property_block_wrap_header">
            <a data-bs-toggle="collapse" data-parent="#vid" data-bs-target="#clFour" aria-controls="clFour" href="javascript:void(0);" aria-expanded="true" className="collapsed"><h4 className="property_block_title">Property video</h4></a>
          </div>
          
          <div id="clFour" className="panel-collapse collapse">
            <div className="block-body">
              <div className="property_video">
                <div className="thumb">
                  <img className="pro_img img-fluid w100" src="assets/img/pl-6.jpg" alt="7.jpg"/>
                  <div className="overlay_icon">
                    <div className="bb-video-box">
                      <div className="bb-video-box-inner">
                        <div className="bb-video-box-innerup">
                          <a href="../../watch.html?v=A8EI6JaFbv4" data-bs-toggle="modal" data-bs-target="#popup-video" className="theme-cl"><i className="ti-control-play"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      
        <div className="property_block_wrap style-2">
          
          <div className="property_block_wrap_header">
            <a data-bs-toggle="collapse" data-parent="#floor" data-bs-target="#clFive" aria-controls="clFive" href="javascript:void(0);" aria-expanded="true" className="collapsed"><h4 className="property_block_title">Floor Plan</h4></a>
          </div>
          
          <div id="clFive" className="panel-collapse collapse">
            <div className="block-body">
              <div className="accordion" id="floor-option">
                <div className="card">
                  <div className="card-header" id="firstFloor">
                    <h2 className="mb-0">
                      <button type="button" className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#firstfloor" aria-controls="firstfloor">First Floor<span>740 sq ft</span></button>									
                    </h2>
                  </div>
                  <div id="firstfloor" className="collapse" aria-labelledby="firstFloor" data-parent="#floor-option">
                    <div className="card-body">
                      <img src="assets/img/floor.jpg" className="img-fluid" alt=""/>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="seconfFloor">
                    <h2 className="mb-0">
                      <button type="button" className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#secondfloor" aria-controls="secondfloor">Second Floor<span>710 sq ft</span></button>
                    </h2>
                  </div>
                  <div id="secondfloor" className="collapse" aria-labelledby="seconfFloor" data-parent="#floor-option">
                    <div className="card-body">
                      <img src="assets/img/floor.jpg" className="img-fluid" alt=""/>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="third-garage">
                    <h2 className="mb-0">
                      <button type="button" className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#garages" aria-controls="garages">Garage<span>520 sq ft</span></button>                     
                    </h2>
                  </div>
                  <div id="garages" className="collapse" aria-labelledby="third-garage" data-parent="#floor-option">
                    <div className="card-body">
                      <img src="assets/img/floor.jpg" className="img-fluid" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="property_block_wrap style-2">
          
          <div className="property_block_wrap_header">
            <a data-bs-toggle="collapse" data-parent="#loca" data-bs-target="#clSix" aria-controls="clSix" href="javascript:void(0);" aria-expanded="true" className="collapsed"><h4 className="property_block_title">Location</h4></a>
          </div>
          
          <div id="clSix" className="panel-collapse collapse">
            <div className="block-body">
              <div className="map-container">
                <div id="singleMap" data-latitude="40.7427837" data-longitude="-73.11445617675781" data-maptitle="Our Location"></div>
              </div>

            </div>
          </div>
          
        </div>
        
        <div className="property_block_wrap style-2">
                  
          <div id="clSev" className="panel-collapse collapse">
            <div className="block-body">
              <ul className="list-gallery-inline">
                <li>
                  <a href="assets/img/p-1.jpg" className="mfp-gallery"><img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt=""/></a>
                </li>
                <li>
                  <a href="assets/img/p-2.jpg" className="mfp-gallery"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt=""/></a>
                </li>
                <li>
                  <a href="assets/img/p-3.jpg" className="mfp-gallery"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt=""/></a>
                </li>
                <li>
                  <a href="assets/img/p-4.jpg" className="mfp-gallery"><img src="assets/img/p-4.jpg" className="img-fluid mx-auto" alt=""/></a>
                </li>
                <li>
                  <a href="assets/img/p-5.jpg" className="mfp-gallery"><img src="assets/img/p-5.jpg" className="img-fluid mx-auto" alt=""/></a>
                </li>
                <li>
                  <a href="assets/img/p-6.jpg" className="mfp-gallery"><img src="assets/img/p-6.jpg" className="img-fluid mx-auto" alt=""/></a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      
        <div className="property_block_wrap style-2">
          
          <div className="property_block_wrap_header">
            <a data-bs-toggle="collapse" data-parent="#rev" data-bs-target="#clEight" aria-controls="clEight" href="javascript:void(0);" aria-expanded="true"><h4 className="property_block_title">{comments.length} Review</h4></a>
          </div>
          
          <div id="clEight" className="panel-collapse collapse show">
            <div className="block-body">
              <div className="author-review">
                <div className="comment-list">
                  <ul>
                    <li className="article_comments_wrap">
                      {comments ? comments.map(comment => {
                        return(
                          <article>
                          <div className="article_comments_thumb">
                            <img src="assets/img/user-1.jpg" alt=""/>
                          </div>
                          <div className="comment-details">
                            <div className="comment-meta">
                              <div className="comment-left-meta">
                                <h4 className="author-name">{comment.messageTitle}</h4>
                                <div className="comment-date">{comment.createdDate}</div>
                              </div>
                            </div>
                            <div className="comment-text">
                              <p>{comment.message}</p>
                            </div>
                          </div>
                        </article>
  
                        )
                      }): 
                      console.log('error')}
                    </li>
                  </ul>
                </div>
              </div>
              <a href="#" className="reviews-checked theme-cl"><i className="fas fa-arrow-alt-circle-down mr-2"></i>See More Reviews</a>
            </div>
          </div>
          
        </div>

        <Comment props={properties}/>
  
        
      </div>
      
      <div className="col-lg-4 col-md-12 col-sm-12">
        
        <div className="like_share_wrap b-0">
          <ul className="like_share_list">
            <li><a href="JavaScript:Void(0);" className="btn btn-likes" data-toggle="tooltip" data-original-title="Share"><i className="fas fa-share"></i>Share</a></li>
            <li><a href="JavaScript:Void(0);" className="btn btn-likes" data-toggle="tooltip" data-original-title="Save"><i className="fas fa-heart"></i>Save</a></li>
          </ul>
        </div>
        
        <div className="details-sidebar">
      
          <div className="sides-widget">
            <div className="sides-widget-header">
              <div className="agent-photo"><img src="assets/img/user-6.jpg" alt=""/></div>
              <div className="sides-widget-details">
                <h4><a href="#">Shivangi Preet</a></h4>
                <span><i className="lni-phone-handset"></i>(91) 123 456 7895</span>
              </div>
              <div className="clearfix"></div>
            </div>
            
            <div className="sides-widget-body simple-form">
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Your Email"/>
              </div>
              <div className="form-group">
                <label>Phone No.</label>
                <input type="text" className="form-control" placeholder="Your Phone"/>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control">I'm interested in this property.</textarea>
              </div>
              <button className="btn btn-black btn-md rounded full-width">Send Message</button>
            </div>
          </div>
        
        </div>
      </div>
      
    </div>
  </div>
</section>
</div>

)
};
export default Property;