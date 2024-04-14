import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-primary">
        <div className="row ">
          <div className="col-md-9 py-3 text-white">
            Get connected with us on social networks!
          </div>
          <div className="col-md-3 py-3 text-center text-white">
            <Link to="/" title="Apple">
              <i className="bi bi-apple text-light me-3"></i>
            </Link>
            <Link to="/" title="Windows">
              <i className="bi bi-windows text-light me-3"></i>
            </Link>
            <Link to="/" title="Android">
              <i className="bi bi-android2 text-light me-3"></i>
            </Link>
            |
            <Link to="/" title="Twitter">
              <i className="bi bi-twitter-x text-light ms-3 me-3"></i>
            </Link>
            <Link to="/" title="Facebook">
              <i className="bi bi-facebook text-light me-3"></i>
            </Link>
            <Link to="/" title="Instagram">
              <i className="bi bi-instagram text-light me-3"></i>
            </Link>
            <Link to="/" title="Youtube">
              <i className="bi bi-youtube text-light me-3"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white">
        <div className="row ">
          <div className="col-md-3 py-3">
            <div className="h6"> Ceremo +</div>
            <hr />
            <p>
              Communicate directly with vendors through our secure platform to
              discuss details and ask questions. Book services, manage your
              rentals, and track your orders all in one convenient place. Make
              your dream ceremony a reality - connect with trusted vendors and
              simplify your planning process today!
            </p>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Materials</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Birthday Rentals
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Photography & Videography
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Wedding Rentals
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Garden & Outdoors
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                {/* <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Travel Cards
                </Link> */}
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Policy</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Return Policy
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Terms Of Use
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Security of Material
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Privacy
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  EPR Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Address</div>
            <hr />
            <address>
              <strong>Rajkot, IN.</strong>
              <br />
              Morbi Road, 360003
              <br />
              Gujarat State
              <br />
              <abbr title="Phone">PO BOX</abbr> 456-7890
            </address>
            <div className="h6">Customer Care</div>
            <hr />
            <i className="bi bi-telephone"></i> +91 9638002000
            <br />
            <i className="bi bi-envelope"></i> ceremorental@gmailgmail.com
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary text-white text-center">
        <div className="row">
          <div className="col-md-2 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-briefcase text-warning"></i> Partner with us
            </Link>
          </div>
          <div className="col-md-2 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-badge-ad text-info"></i> Advertise
            </Link>
          </div>
          <div className="col-md-2 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-gift"></i> Gift
            </Link>
          </div>
          <div className="col-md-3 py-2">
            ©{new Date().getFullYear()} ceremorental platform (
            {process.env.REACT_APP_VERSION})
          </div>
          <div className="col-md-3 py-2 bg-white">
            <img
              src="../../images/payment/american_express.webp"
              width="32"
              alt="American Express"
              className="me-2"
            />
            <img
              src="../../images/payment/maestro.webp"
              width="32"
              alt="Maestro"
              className="me-2"
            />
            <img
              src="../../images/payment/netbanking.webp"
              width="32"
              alt="Net Banking"
              className="me-2"
            />
            <img
              src="../../images/payment/paypal.webp"
              width="32"
              alt="Paypal"
              className="me-2"
            />
            <img
              src="../../images/payment/rupay.webp"
              width="32"
              alt="Rupay"
              className="me-2"
            />
            <img
              src="../../images/payment/upi.webp"
              width="32"
              alt="UPI"
              className="me-2"
            />
            <img
              src="../../images/payment/visa.webp"
              width="32"
              alt="Visa"
              className="me-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
