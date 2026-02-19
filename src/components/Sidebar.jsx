import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap"; 

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "active bg-primary" : "";

  return (
    <div
      className="offcanvas offcanvas-start bg-dark text-white "
      tabIndex="-1"
      id="mobileSidebar"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-primary">Safe Home</h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body">
        <ul className="nav nav-pills flex-column gap-2">
          {[
            { path: " ", label: "Home", icon: "bi-house" },
            { path: "listings", label: "PG Listings", icon: "bi-building" },
            { path: "about", label: "About", icon: "bi-info-circle" },
            { path: "contact", label: "Contact", icon: "bi-envelope" },
          ].map((item) => (
            <li key={item.path} className="nav-item">
              <Nav.Link as={Link} to={item.path} className="me-lg-3">
                <i className={`bi ${item.icon} me-2`}></i>
                {item.label}
              </Nav.Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
