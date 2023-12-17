import React from "react";

interface BurgerMenuProps {
  onClose: () => void;
  onContactModalOpen: () => void;
}

function BurgerMenu({
  onClose,
  onContactModalOpen,
}: BurgerMenuProps): JSX.Element {
  return (
    <div className="burgerMenu position-absolute top-0 w-100 d-flex align-items-center justify-content-center">
      <button
        type="button"
        className="btn position-absolute top-0 end-0 mt-3 me-3 bg-0"
        onClick={onClose}
      >
        <i className="bi bi-x text-white"></i>
      </button>
      <nav className="navbar p-0">
        <div className="container-fluid p-0">
          <ul className="navbar-nav">
            <li className="nav-item p-0 mx-auto">
              <a className="nav-link p-0" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item p-0">
              <button
                className="border-0"
                id="contactUsBtn"
                onClick={onContactModalOpen}
              >
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default BurgerMenu;
