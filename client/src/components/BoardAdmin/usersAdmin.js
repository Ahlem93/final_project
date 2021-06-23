import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/admin";

const UsersAdmin = () => {
  const allusers = useSelector((state) => state.admin.allusers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(allusers.allusers);
  return (
    <div>
      <section class="gray-simple">
        <div class="container">
          <div class="row">
            {allusers
              ? allusers.map((user) => {
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
                                <a href="#"><strong>Name:</strong>{user.name}</a>
                              </h5>
                              <span class="agent-property"><strong>Role:</strong>{user.role}</span>
                            </div>
                            
                          </div>
                        </div>
                        <div class="fr-grid-info">
                          <ul>
                            <li>
                             <strong>email:</strong>{user.email}
                            </li>

                          </ul>
                        </div>

                        <div class="fr-grid-footer">
                          <div class="fr-grid-footer-flex">
                           
                          </div>
                          <div class="fr-grid-footer-flex-right">
                            <a
                              href="agent-page.html"
                              class="prt-view"
                              tabindex="0"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : console.log(allusers.length, allusers)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsersAdmin;
