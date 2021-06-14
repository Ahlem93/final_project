import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PropertyAdmin from "./propertyAdmin";
import UsersAdmin from "./usersAdmin";

const BoardAdmin = () => {
  return (
    <>
      <div>
        <section class="bg-light">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-md-12">
                <div class="simple-sidebar sm-sidebar" id="filter_search">
                  <div class="search-sidebar_header">
                    <h4 class="ssh_heading">Close Filter</h4>
                    <button
                      onclick="closeFilterSearch()"
                      class="w3-bar-item w3-button w3-large"
                    >
                      <i class="ti-close"></i>
                    </button>
                  </div>

                  <div class="sidebar-widgets">
                    <div class="dashboard-navbar">
                      <div class="d-navigation">
                        <ul>
                          <li>
                            <a href="/admin/users">
                              <i class="ti-bookmark"></i>users
                            </a>
                          </li>
                          <li>
                            <a href="/admin/properties">
                              <i class="ti-layers"></i>Properties
                            </a>
                          </li>
                          <li>
                            <a href="submit-property-dashboard.html">
                              <i class="ti-pencil-alt"></i>Statistics
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-9 col-md-12">
                <BrowserRouter>
                  <Switch>
                    <Route
                      path="/admin/properties"
                      render={() => <PropertyAdmin />}
                    />
                    <Route path="/admin/users" render={() => <UsersAdmin />} />
                  </Switch>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div></div>
    </>
  );
};
export default BoardAdmin;
