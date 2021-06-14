import React from "react";
const Footer = () => {
  return (
    <footer className="dark-footer skin-dark-footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <p class="mb-0">
                © 2021 Eckrili. Designd By AHLEM AHMED -- All Rights Reserved
              </p>
            </div>

            <div class="col-lg-6 col-md-6 text-right">
              <ul class="footer-bottom-social">
                <li>
                  <a href="#">
                    <i class="ti-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ti-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ti-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ti-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
