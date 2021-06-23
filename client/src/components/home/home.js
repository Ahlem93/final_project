import React, { useState, useEffect } from "react";
import axios from "axios";
import UserService from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { featuredProperty } from "../../actions/property";
import { login } from "../../actions/auth";
import { useHistory } from "react-router";
// import "../../../../public/images/properties"
const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [cityInput, setCityInput] = useState("");
  const history = useHistory();
  let arrayProp = [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featuredProperty());
  }, []);
  const { properties } = useSelector((state) => state.property);

  console.log(properties);

  const goToProperty = (id) => {
    console.log(id);
    history.push({
      pathname: "/property",
      state: { propertyId: id },
    });
  };
  const onChangeCity = (e) => {
    const city = e.target.value;
    setCityInput(city);
  };
  const search = () => {
    console.log(cityInput);
    history.push({
      pathname: "/search",
      state: { city: cityInput },
    });
  };

  return (
    <div>
      <div
        className="image-bottom hero-banner"
        style={{ background: "#2540a2 url(../img/banner.svg) no-repeat" }}
        data-overlay="0"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 col-sm-12">
              <div className="inner-banner-text text-center">
                <h2>
                  <span className="font-normal">Find Your</span> Perfect Place.
                </h2>
              </div>
              <div className="full-search-2 eclip-search italian-search hero-search-radius shadow-hard mt-5">
                <div className="hero-search-content">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 b-r">
                      <div className="form-group">
                        <div className="choose-propert-type">
                          <ul>
                            <li>
                              <input
                                id="cp-1"
                                className="checkbox-custom"
                                name="cpt"
                                type="radio"
                              />
                              <label className="checkbox-custom-label">
                                Location
                              </label>
                            </li>
                            <li>
                              <input
                                id="cp-3"
                                className="checkbox-custom"
                                name="cpt"
                                type="radio"
                              />
                              <label className="checkbox-custom-label">
                                Colocation
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* <div className="col-lg-6 col-md-5 col-sm-12 p-0 elio">
                      <div className="form-group"> */}
                        <div className="input-with-icon">
                          <input
                            type="text"
                            className="form-control"
                            onChange={onChangeCity}
                            placeholder="Search for a location"
                          />
                          <img src="../img/pin.svg" width="20" />
                        </div>
                      {/* </div>
                    </div> */}

                    <div className="col-lg-2 col-md-3 col-sm-12">
                      <div className="form-group">
                        <button
                          onClick={() => search()}
                          className="btn search-btn black"
                        >
                          Search
                        </button>
                      {/* </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Recent Properties For Rent</h2>
              </div>
            </div>
          </div>

          <div className="row list-layout">
            {properties
              ? properties.map((property) => {
                  console.log(property.surface);
                  return (
                    <div className="col-lg-6 col-md-12">
                      <div className="property-listing property-1">
                        <div className="listing-img-wrapper">
                          <a href="single-property-2.html">
                            <img
                              src={`/img/properties/${property.image}`}
                              className="img-fluid mx-auto"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="listing-content">
                          <div className="listing-detail-wrapper-box">
                            <div className="listing-detail-wrapper">
                              <div className="listing-short-detail">
                                <h4 className="listing-name">
                                  <a href="single-property-2.html">
                                    {property.propertytitle}
                                  </a>
                                </h4>
                                <div className="fr-can-rating">
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star"></i>
                                  <span className="reviews_text">
                                    ( Reviews)
                                  </span>
                                </div>
                              </div>
                              <div className="list-price">
                                <h6 className="listing-card-info-price">
                                  {property.price} DT
                                </h6>
                              </div>
                            </div>
                          </div>

                          <div className="price-features-wrapper">
                            <div className="list-fx-features">
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon">
                                  <img
                                    src="assets/img/bed.svg"
                                    width="13"
                                    alt=""
                                  />
                                </div>
                                S+{property.bedrooms}
                              </div>
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon">
                                  <img
                                    src="assets/img/move.svg"
                                    width="13"
                                    alt=""
                                  />
                                </div>
                                {property.surface} m²
                              </div>
                            </div>
                          </div>

                          <div className="listing-footer-wrapper">
                            <div className="listing-locate">
                              <span className="listing-location">
                                <i className="ti-location-pin"></i>
                                {property.address} {property.city}
                              </span>
                            </div>
                            <div className="listing-detail-btn">
                              <button
                                onClick={() => goToProperty(property._id)}
                                href="single-property-2.html"
                                className="more-btn"
                              >
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : console.log("ttt")}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>How It Works?</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="middle-icon-features-item">
                <div className="icon-features-wrap">
                  <div className="middle-icon-large-features-box f-light-success">
                    <i className="ti-receipt text-success"></i>
                  </div>
                </div>
                <div className="middle-icon-features-content">
                  <h4>Evaluate Property</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="middle-icon-features-item">
                <div className="icon-features-wrap">
                  <div className="middle-icon-large-features-box f-light-warning">
                    <i className="ti-user text-warning"></i>
                  </div>
                </div>
                <div className="middle-icon-features-content">
                  <h4>Meet Your Agent</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="middle-icon-features-item remove">
                <div className="icon-features-wrap">
                  <div className="middle-icon-large-features-box f-light-blue">
                    <i className="ti-shield text-blue"></i>
                  </div>
                </div>
                <div className="middle-icon-features-content">
                  <h4>Close The Deal</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
