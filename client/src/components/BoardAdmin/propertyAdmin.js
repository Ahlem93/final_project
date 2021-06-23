import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperties, approuveProperty } from "../../actions/admin";

const PropertyAdmin = () => {
  const allProperties = useSelector((state) => state.admin.allProperties);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProperties());
  }, []);

  const handleApprouveProperty = (id) => {
    dispatch(approuveProperty(id));
  };

  console.log(allProperties);
  return (
    <div>
      <section class="gray-simple">
        <div class="container">
          <div class="row">
            {allProperties
              ? allProperties.map((property) => {
                  return (
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="agents-grid">
                        <div class="agents-grid-wrap">
                          <div class="fr-grid-thumb">
                            <a href="freelancer-detail.html">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEb4vYaXPxxMMFRmrz4asb49Dz0PkNu1cPwusqp=CAU"
                                class="img-fluid mx-auto"
                                alt=""
                              />
                            </a>
                          </div>

                          <div class="fr-grid-deatil">
                            <div class="fr-grid-deatil-flex">
                              <h5 class="fr-can-name">
                                <a href="#"></a>
                              </h5>
                              <span class="agent-property">{property.propertytitle}</span>
                            </div>
                            <div class="fr-grid-deatil-flex-right">
                              
                            </div>
                          </div>
                        </div>
                        <div class="fr-grid-info">
                          <ul>
                            <li>
                              <strong>Price:</strong>{property. price}DT
                            </li>

                          </ul>
                        </div>

                        <div class="fr-grid-footer">
                          <div class="fr-grid-footer-flex">
                            <span class="fr-position">
                              <i class="lni-map-marker"></i>
                              {property.city}
                            </span>
                          </div>
                          <div class="fr-grid-footer-flex-right">
                            <a
                              href="agent-page.html"
                              class="prt-view"
                              tabindex="0"
                            >
                              View
                            </a>
                            <button
                              class="prt-view"
                              onClick={handleApprouveProperty(property._id)}
                            >
                              Approve
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : console.log(allProperties)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyAdmin;
