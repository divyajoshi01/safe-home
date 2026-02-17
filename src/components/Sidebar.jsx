import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path) =>
        location.pathname === path ? "active bg-primary" : "";

    return (
        <div
            className="offcanvas offcanvas-start bg-dark text-white"
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
                        { path: "/", label: "Home", icon: "bi-house" },
                        { path: "/listings", label: "PG Listings", icon: "bi-building" },
                        { path: "/About", label: "About", icon: "bi-info-circle" },
                        { path: "/Contact", label: "Contact", icon: "bi-envelope" }
                    ].map((item) => (
                        <li key={item.path} className="nav-item">
                            <Link
                                to={item.path}
                                className={`nav-link text-white d-flex align-items-center ${isActive(item.path)}`}
                                data-bs-dismiss="offcanvas"
                            >
                                <i className={`bi ${item.icon} me-2`}></i>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
