import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { searchProperty } from "../actions/property";

   
const Search = () => {
    const location  = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(location.state);
        if(location.state){
          let searchproperties = location.state.ahlem;
          dispatch(searchProperty(searchproperties));
        }else{
          history.push('/')
        }
     }, [location]);
     const { properties } = useSelector(state => state.property);
     console.log(properties);
  return (
    <div>
<div className="page-title">
<div className="container">
    <div className="row">
        <div className="col-lg-12 col-md-12">
            
            <h2 className="ipt-title">classNameical Property List</h2>
            <span className="ipn-subtitle">classNameical Property List With Sidebar</span>
            
        </div>
    </div>
</div>
</div>

<section className="bg-light">

<div className="container">
    
    <div className="row">
        <div className="col-lg-12 col-md-12">
            <div className="filter_search_opt">
                <a href="javascript:void(0);" onclick="openFilterSearch()">Search Property<i className="ml-2 ti-menu"></i></a>
            </div>
        </div>
    </div>
    
    <div className="row">
    
     
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="simple-sidebar sm-sidebar" id="filter_search">							
            
                <div className="search-sidebar_header">
                    <h4 className="ssh_heading">Close Filter</h4>
                    <button onclick="closeFilterSearch()" className="w3-bar-item w3-button w3-large"><i className="ti-close"></i></button>
                </div>
                
                <div className="sidebar-widgets">
                    
                    <div className="search-inner p-0">
                        
                        <div className="filter-search-box">
                            <div className="form-group">
                                <div className="input-with-icon">
                                    <input type="text" className="form-control" placeholder="Search by space name…"/>
                                    <i className="ti-search"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="filter_wraps">
                            
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#where" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Where<span className="selected">Chicago</span></a>
                                    </h4>
                                    
                                </div>
                                <div className="widget-boxed-body collapse" id="where" data-parent="#where">
                                    <div className="side-list no-border">
                                     
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="b1" className="radio-custom" name="where" type="radio"/>
                                                            <label for="b1" className="radio-custom-label">Atlanta</label>
                                                        </li>
                                                        <li>
                                                            <input id="b2" className="radio-custom" name="where" type="radio"/>
                                                            <label for="b2" className="radio-custom-label">Austin</label>
                                                        </li>
                                                        <li>
                                                            <input id="b3" className="radio-custom" name="where" type="radio"/>
                                                            <label for="b3" className="radio-custom-label">Boston</label>
                                                        </li>
                                                        <li>
                                                            <input id="b4" className="radio-custom" name="where" type="radio" checked=""/>
                                                            <label for="b4" className="radio-custom-label">Chicago</label>
                                                        </li>
                                                        <li>
                                                            <input id="b5" className="radio-custom" name="where" type="radio"/>
                                                            <label for="b5" className="radio-custom-label">Dallas</label>
                                                        </li>
                                                        <li>
                                                            <input id="b6" className="radio-custom" name="where" type="radio"/>
                                                            <label for="b6" className="radio-custom-label">Denver</label>
                                                        </li>
                                                        <li>
                                                            <input id="b7" className="radio-custom" name="where" type="radio"/>
                                                            <label for="b7" className="radio-custom-label">Houston</label>
                                                        </li>
                                                        <li>
                                                            <input id="b8" className="radio-custom" name="where" type="radio"/>
                                                            <label for="b8" className="radio-custom-label">Jacksonville</label>
                                                        </li>
                                                        <li>
                                                            <input id="b9" className="radio-custom" name="where" type="radio"/>
                                                            <label for="b9" className="radio-custom-label">Los Angeles</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#fptype" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Property Types<span className="selected">Apartment</span></a>
                                    </h4>
                                    
                                </div>
                                <div className="widget-boxed-body collapse" id="fptype" data-parent="#fptype">
                                    <div className="side-list no-border">
                                     
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="c1" className="radio-custom" name="ptype" type="radio"/>
                                                            <label for="c1" className="radio-custom-label">House</label>
                                                        </li>
                                                        <li>
                                                            <input id="c2" className="radio-custom" name="ptype" type="radio"/>
                                                            <label for="c2" className="radio-custom-label">Office Desk</label>
                                                        </li>
                                                        <li>
                                                            <input id="c3" className="radio-custom" name="ptype" type="radio"/>
                                                            <label for="c3" className="radio-custom-label">Villa</label>
                                                        </li>
                                                        <li>
                                                            <input id="c4" className="radio-custom" name="ptype" type="radio" checked=""/>
                                                            <label for="c4" className="radio-custom-label">Apartment</label>
                                                        </li>
                                                        <li>
                                                            <input id="c5" className="radio-custom" name="ptype" type="radio"/>
                                                            <label for="c5" className="radio-custom-label">Condo</label>
                                                        </li>
                                                        <li>
                                                            <input id="c6" className="radio-custom" name="ptype" type="radio"/>
                                                            <label for="c6" className="radio-custom-label">Denver</label>
                                                        </li>
                                                        <li>
                                                            <input id="c7" className="radio-custom" name="ptype" type="radio"/>
                                                            <label for="c7" className="radio-custom-label">Studio</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#fbedrooms" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Bedrooms<span className="selected">2 Beds</span></a>
                                    </h4>
                                    
                                </div>
                                <div className="widget-boxed-body collapse" id="fbedrooms" data-parent="#fbedrooms">
                                    <div className="side-list no-border">

                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="a1" className="radio-custom" name="bed" type="radio"/>
                                                            <label for="a1" className="radio-custom-label">01 Bedrooms</label>
                                                        </li>
                                                        <li>
                                                            <input id="a2" className="radio-custom" name="bed" type="radio"/>
                                                            <label for="a2" className="radio-custom-label">02 Bedrooms</label>
                                                        </li>
                                                        <li>
                                                            <input id="a3" className="radio-custom" name="bed" type="radio"/>
                                                            <label for="a3" className="radio-custom-label">03 Bedrooms</label>
                                                        </li>
                                                        <li>
                                                            <input id="a4" className="radio-custom" name="bed" type="radio" checked=""/>
                                                            <label for="a4" className="radio-custom-label">04 Bedrooms</label>
                                                        </li>
                                                        <li>
                                                            <input id="a5" className="radio-custom" name="bed" type="radio"/>
                                                            <label for="a5" className="radio-custom-label">05 Bedrooms</label>
                                                        </li>
                                                        <li>
                                                            <input id="a6" className="radio-custom" name="bed" type="radio"/>
                                                            <label for="a6" className="radio-custom-label">06+ Bedrooms</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                           
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#fprice" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Price Range<span className="selected">$10,000 - $15,000</span></a>
                                    </h4>
                                    
                                </div>
                                <div className="widget-boxed-body collapse" id="fprice" data-parent="#fprice">
                                    <div className="side-list no-border">
                                      
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="e1" className="radio-custom" name="prices" type="radio"/>
                                                            <label for="e1" className="radio-custom-label">Less Then $10,000</label>
                                                        </li>
                                                        <li>
                                                            <input id="e2" className="radio-custom" name="prices" type="radio"/>
                                                            <label for="e2" className="radio-custom-label">$10,000 - $15,000</label>
                                                        </li>
                                                        <li>
                                                            <input id="e3" className="radio-custom" name="prices" type="radio"/>
                                                            <label for="e3" className="radio-custom-label">$12,000 - $25,000</label>
                                                        </li>
                                                        <li>
                                                            <input id="e4" className="radio-custom" name="prices" type="radio" checked=""/>
                                                            <label for="e4" className="radio-custom-label">$30,000 - $35,000</label>
                                                        </li>
                                                        <li>
                                                            <input id="e5" className="radio-custom" name="prices" type="radio"/>
                                                            <label for="e5" className="radio-custom-label">$40,000 - $45,000</label>
                                                        </li>
                                                        <li>
                                                            <input id="e6" className="radio-custom" name="prices" type="radio"/>
                                                            <label for="e6" className="radio-custom-label">$50,000 - $55,000</label>
                                                        </li>
                                                        <li>
                                                            <input id="e7" className="radio-custom" name="prices" type="radio"/>
                                                            <label for="e7" className="radio-custom-label">$60,000 - $65,000</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                           
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#mood" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Mood<span className="selected">Any Mood</span></a>
                                    </h4>
                                    
                                </div>
                                <div className="widget-boxed-body collapse" id="mood" data-parent="#mood">
                                    <div className="side-list no-border">
                                    
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="f1" className="radio-custom" name="moods" type="radio"/>
                                                            <label for="f1" className="radio-custom-label">Any Mood</label>
                                                        </li>
                                                        <li>
                                                            <input id="f2" className="radio-custom" name="moods" type="radio"/>
                                                            <label for="f2" className="radio-custom-label">Professional</label>
                                                        </li>
                                                        <li>
                                                            <input id="f3" className="radio-custom" name="moods" type="radio"/>
                                                            <label for="f3" className="radio-custom-label">Essentials</label>
                                                        </li>
                                                        <li>
                                                            <input id="f4" className="radio-custom" name="moods" type="radio" checked=""/>
                                                            <label for="f4" className="radio-custom-label">Unique</label>
                                                        </li>
                                                        <li>
                                                            <input id="f5" className="radio-custom" name="moods" type="radio"/>
                                                            <label for="f5" className="radio-custom-label">Lively</label>
                                                        </li>
                                                        <li>
                                                            <input id="f6" className="radio-custom" name="moods" type="radio"/>
                                                            <label for="f6" className="radio-custom-label">Luxe</label>
                                                        </li>
                                                        <li>
                                                            <input id="f7" className="radio-custom" name="moods" type="radio"/>
                                                            <label for="f7" className="radio-custom-label">Luxe</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                           
                            <div className="single_search_boxed">
                                <div className="widget-boxed-header">
                                    <h4>
                                        <a href="#ameneties" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed">Ameneties<span className="selected">ADA Compliant</span></a>
                                    </h4>
                                    
                                </div>
                                <div className="widget-boxed-body collapse" id="ameneties" data-parent="#ameneties">
                                    <div className="side-list no-border">
                                       
                                        <div className="single_filter_card">
                                            <div className="card-body pt-0">
                                                <div className="inner_widget_link">
                                                    <ul className="no-ul-list filter-list">
                                                        <li>
                                                            <input id="g1" className="checkbox-custom" name="ADA" type="checkbox" checked=""/>
                                                            <label for="g1" className="checkbox-custom-label">ADA Compliant</label>
                                                        </li>
                                                        <li>
                                                            <input id="g2" className="checkbox-custom" name="Parking" type="checkbox"/>
                                                            <label for="g2" className="checkbox-custom-label">Parking Options</label>
                                                        </li>
                                                        <li>
                                                            <input id="g3" className="checkbox-custom" name="Coffee" type="checkbox"/>
                                                            <label for="g3" className="checkbox-custom-label">Coffee Provided</label>
                                                        </li>
                                                        <li>
                                                            <input id="g4" className="checkbox-custom" name="Mother" type="checkbox"/>
                                                            <label for="g4" className="checkbox-custom-label">Mother's Room</label>
                                                        </li>
                                                        <li>
                                                            <input id="g5" className="checkbox-custom" name="Outdoor" type="checkbox"/>
                                                            <label for="g5" className="checkbox-custom-label">Outdoor Space</label>
                                                        </li>
                                                        <li>
                                                            <input id="g6" className="checkbox-custom" name="Pet" type="checkbox"/>
                                                            <label for="g6" className="checkbox-custom-label">Pet Friendly</label>
                                                        </li>
                                                        <li>
                                                            <input id="g7" className="checkbox-custom" name="Beauty" type="checkbox"/>
                                                            <label for="g7" className="checkbox-custom-label">Beauty & Message</label>
                                                        </li>
                                                        <li>
                                                            <input id="g8" className="checkbox-custom" name="Bike" type="checkbox"/>
                                                            <label for="g8" className="checkbox-custom-label">Bike Parking</label>
                                                        </li>
                                                        <li>
                                                            <input id="g9" className="checkbox-custom" name="Phone" type="checkbox"/>
                                                            <label for="g9" className="checkbox-custom-label">Phone Line</label>
                                                        </li>
                                                        <li>
                                                            <input id="g11" className="checkbox-custom" name="Private" type="checkbox"/>
                                                            <label for="g11" className="checkbox-custom-label">Private Areas</label>
                                                        </li>
                                                        <li>
                                                            <input id="g12" className="checkbox-custom" name="Free" type="checkbox"/>
                                                            <label for="g12" className="checkbox-custom-label">Free WiFi</label>
                                                        </li>
                                                        <li>
                                                            <input id="g13" className="checkbox-custom" name="Swiming" type="checkbox"/>
                                                            <label for="g13" className="checkbox-custom-label">Swiming Pool</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="form-group filter_button">
                            <button type="submit" className="btn btn btn-theme-light-2 rounded full-width">22 Results Show</button>
                        </div>
                    </div>							
                </div>
            </div>
           
        </div>
        
        <div className="col-lg-8 col-md-12 col-sm-12">
        
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                    <div className="item-shorting-box">
                        <div className="item-shorting clearfix">
                            <div className="left-column pull-left"><h4 className="m-0">Found 1-10 of 142 Results</h4></div>
                        </div>
                        <div className="item-shorting-box-right">
                            <div className="shorting-by">
                                <select id="shorty" className="form-control">
                                    <option value="">&nbsp;</option>
                                    <option value="1">Low Price</option>
                                    <option value="2">High Price</option>
                                    <option value="3">Most Popular</option>
                                </select>
                            </div>
                            <ul className="shorting-list">
                                <li><a href="grid-layout-with-sidebar.html" className="active"><i className="ti-layout-grid2"></i></a></li>
                                <li><a href="list-layout-with-sidebar.html"><i className="ti-view-list"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
         
                           
                {properties ? properties.map((property) => {
                    return(
                        <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="property-listing property-2">
                        
                        <div className="listing-img-wrapper">
                            <div className="list-img-slide">
                                <div className="click">
                                    <div><a href="single-property-1.html"><img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt=""/></a></div>
                                    <div><a href="single-property-1.html"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt=""/></a></div>
                                    <div><a href="single-property-1.html"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt=""/></a></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="listing-detail-wrapper">
                            <div className="listing-short-detail-wrap">
                                <div className="listing-short-detail">
                                    <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">{property.propertytitle}</a></h4>
                                    <div className="property-reviews">
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="listing-short-detail-flex">
                                    <h6 className="listing-card-info-price">$7,000</h6>
                                </div>
                            </div>
                        </div>
                        
                        <div className="price-features-wrapper">
                            <div className="list-fx-features">
                                <div className="listing-card-info-icon">
                                    <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width="13" alt=""/></div>3 Beds
                                </div>
                                <div className="listing-card-info-icon">
                                    <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width="13" alt=""/></div>1 Bath
                                </div>
                                <div className="listing-card-info-icon">
                                    <div className="inc-fleat-icon"><img src="assets/img/move.svg" width="13" alt=""/></div>800 sqft
                                </div>
                            </div>
                        </div>
                        
                        <div className="listing-detail-footer">
                            <div className="footer-first">
                                <div className="foot-location"><img src="assets/img/pin.svg" width="18" alt=""/>210 Zirak Road, Canada</div>
                            </div>
                            <div className="footer-flex">
                                <a href="property-detail.html" className="prt-view">View</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                    )
              }): 
              console.log('error')
              
                }
                       
              
                
            </div>
            
        
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="pagination p-center">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span className="ti-arrow-left"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item active"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">...</a></li>
                        <li className="page-item"><a className="page-link" href="#">18</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span className="ti-arrow-right"></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                    </ul>
                </div>
            </div>
    
        </div>
        
    </div>
</div>		
</section>
</div>
)
};
export default Search;