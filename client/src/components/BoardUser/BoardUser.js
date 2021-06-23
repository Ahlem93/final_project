import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import UserService from "../../services/user.service";
import { PropertyByUser, removeProperty } from "../../actions/property";
const BoardUser = () => {
  //   const location  = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.property);
  useEffect(() => {
    dispatch(PropertyByUser());
  }, []);

  const handleRemoveProprty = (id) => {
    console.log(id);
    dispatch(removeProperty(id));
    history.push("/dashbordAgent");
    console.log(properties);
  };
  console.log(properties);
  return (
    <div>
      <div className="image-cover page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">Agent Detail</h2>
              <span className="ipn-subtitle">Adam D. Okraar From Canada</span>
            </div>
          </div>
        </div>
      </div>
      <section className="agent-page p-0 gray-simple">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="agency agency-list overlio-40">
                <div className="agency-avatar">
                  <img src="assets/img/user-5.jpg" alt="" />
                </div>
                <div className="agency-content">
                  <div className="agency-name">
                    <h4>
                      <a href="agency-page.html">Adam D. Okraar</a>
                    </h4>
                    <span>
                      <i className="lni-map-marker"></i>3599 Huntz Lane
                    </span>
                  </div>
                  <div className="agency-desc">
                    <p>
                      Maecenas quis consequat libero, a feugiat eros. Nunc ut
                      lacinia tortor morbi ultricies laoreet ullamcorper
                      phasellus semper
                    </p>
                  </div>
                  <div className="prt-detio">
                    <span>202 Property</span>
                  </div>
                  <ul className="social-icons">
                    <li>
                      <a className="facebook" href="#">
                        <i className="lni-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="lni-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="lni-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="lni-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-wraper">
        <div className="row">
          <div className="block-wraps">
            <div className="block-wraps-header">
              <div className="block-header">
                <ul
                  className="nav nav-tabs customize-tab"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="rental-tab"
                      data-bs-toggle="tab"
                      href="#rental"
                      role="tab"
                      aria-controls="rental"
                      aria-selected="true"
                    >
                      Rental
                    </a>
                  </li>
                </ul>
              </div>

              <div className="block-body">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="rental"
                    role="tabpanel"
                    aria-labelledby="rental-tab"
                  >
                    <div className="row list-layout">
                      {properties
                        ? properties.map((property) => {
                            return (
                              <div className="col-lg-6 col-md-12">
                                <div className="property-listing property-1">
                                  <div className="listing-img-wrapper">
                                    <a href="single-property-2.html">
                                      <img
                                        src="css/img/p-1.jpg"
                                        className="img-fluid mx-auto"
                                        alt=""
                                      />
                                    </a>
                                  </div>

                                  <div className="sd-list-right">
                                    <h1 className="listing_dashboard_title">
                                      {/* <div className="listing-detail-wrapper"> */}
                                        {/* <div className="listing-short-detail"> */}
                                          <div className="listing-name">
                                            <a href="#">
                                              {property.propertytitle}
                                            </a>
                                          </div>
                                        {/* </div> */}
                                        <div className="user_dashboard_listed">
                                          <h6 className="user_dashboard_listed">
                                            Price: {property.price} DT
                                          </h6>
                                        </div>
                                      {/* </div> */}
                                    </h1>

                                    <div className="price-features-wrapper">
                                      <div className="list-fx-features">
                                        <div className="listing-card-info-icon">
                                          <div className="inc-fleat-icon">
                                            <img
                                              src="https://i.pinimg.com/originals/6b/39/de/6b39debeaa76e79d7cb0bf91f98444c0.jpg"
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

                                    <div className="listing-detail-footer">
                                      <div className="lfooter-firs">
                                        <span className="listing-location">
                                          <i className="ti-location-pin"></i>
                                          {property.address} {property.city}
                                        </span>
                                          <div>{property.approuved === true ?
                                            <span>
                                              approuved
                                            </span>
                                            :
                                            <span>
                                              not approuved
                                            </span>
                                          }</div>
                                        </div>
                                      </div>
                                      <div className="listing-detail-btn">
                                        {/* <button onClick={ ()=>handleRemoveProprty(property._id)}
                                          href="single-property-2.html"
                                          className="more-btn"
                                        >
                                          Remove
                                        </button> */}
                                        <div className="action">
                                          <a
                                            href="#"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Edit"
                                          >
                                            <i className="ti-pencil"></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="202 User View"
                                          >
                                            <i className="ti-eye"></i>
                                          </a>
                                          <a onClick={ ()=>handleRemoveProprty(property._id)}
                                            href="/dashbordAgent"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Delete Property"
                                            className="delete"
                                          >
                                            <i className="ti-close"></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Make Featured"
                                            className="delete"
                                          >
                                            <i className="ti-star"></i>
                                          </a>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardUser;
