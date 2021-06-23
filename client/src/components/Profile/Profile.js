import React, { useState, useEffect } from "react";
import { editProfile } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";

const Profile = (props) => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [role, setRole] = useState("");
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(
    user
  );
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeAbout = (e) => {
    const about = e.target.value;
    setAbout(about);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeMobile = (e) => {
    const mobile = e.target.value;
    setMobile(mobile);
  };
  const onChangeFacebook = (e) => {
    const facebook = e.target.value;
    setFacebook(facebook);
  };
  const onChangeTwitter = (e) => {
    const twitter = e.target.value;
    setTwitter(twitter);
  };
  const onChangeLinkedin = (e) => {
    const linkedin = e.target.value;
    setLinkedin(linkedin);
  };
  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole(role);
  };
  const handleEditProfile = (e) => {
    e.preventDefault();
    dispatch(
      editProfile(name, about,role, email, mobile, facebook, twitter, linkedin)
    )
      .then(() => {
        console.log("success");
        props.history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9">
              <h2 className="ipt-title">Welcome!</h2>
              <span className="ipn-subtitle">Welcome To Your Account</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
      <section className="bg-light dashboard-wraper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="filter_search_opt">
                <a href="javascript:void(0);" onclick="openFilterSearch()">
                  Dashboard Navigation<i className="ml-2 ti-menu"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="dashboard-wraper">
            <div className="form-submit">
              <h4>My Account</h4>
              <div className="submit-section">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Your Name</label>
                    <input
                      type="text"
                      placeholder={user.message.name}
                      onChange={onChangeName}
                      name="name"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      value={user.message.email}
                      onChange={onChangeEmail}
                      name="email"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Phone</label>
                    <input
                      type="text"
                      value={user.message.mobile}
                      onChange={onChangeMobile}
                      name="mobile"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>You are:</label>
                    <input
                      type="text"
                      value={user.message.role}
                      onChange={onChangeRole}
                      name="role"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <label>About</label>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-submit">
              <h4>Social Accounts</h4>
              <div className="submit-section">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Facebook</label>
                    
                    <input
                      type="text"
                      value={user.message.facebook}
                      onChange={onChangeFacebook}
                      name="facebook"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                  <label>Twitter</label>
                  <input
                    type="email"
                    value={user.message.twitter}
                    onChange={onChangeTwitter}
                    name="twitter"
                    className="form-control"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>LinkedIn</label>
                  <input
                    type="text"
                    value={user.message.linkedin}
                    onChange={onChangeLinkedin}
                    name="linkedin"
                    className="form-control"
                  />
                </div>
                </div>
                

                

                <div className="form-group col-lg-12 col-md-12">
                  <button
                    className="btn btn-theme-light-2 rounded"
                    onClick={handleEditProfile}
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Profile;
