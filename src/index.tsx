import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home.tsx";
import Product from "./Product.tsx";
import SurpriseProduct from "./SurpriseProduct.tsx";
import Contact from "./components/contact.tsx";
import SuccessModal from "./components/successfulModal.tsx";
import BurgerMenu from "./components/burgerMenu.tsx";
import "./style.css";

function App(): JSX.Element {
  return (
    <Router basename="/test-proj">
      <Routes>
        <Route path="/test-proj" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/surpriseproduct" element={<SurpriseProduct />} />
        {/* Add a default route or a 404 page if needed */}
        <Route path="*" element={<Navigate to="/test-proj" />} />
      </Routes>
    </Router>
  );
}

const entryPoint = document.getElementById("root")!;
const homeRoot = ReactDOM.createRoot(entryPoint);

const contactModalRoot = ReactDOM.createRoot(
  document.getElementById("contactModal")!
);

const successModalRoot = ReactDOM.createRoot(
  document.getElementById("successModal")!
);

const burgerMenuRoot = ReactDOM.createRoot(
  document.getElementById("burgerMenu")!
);

let isContactModalOpen = false;

function openContactModal() {
  isContactModalOpen = true;
  renderContactModal();
  closeBurgerMenu();
}

document
  .getElementById("contactBtn")!
  .addEventListener("click", openContactModal);

function renderContactModal() {
  if (isContactModalOpen) {
    contactModalRoot.render(
      <Contact onClose={closeContactModal} onSuccess={openSuccessModal} />
    );
  } else {
    contactModalRoot.render(null);
  }
}

function closeContactModal() {
  isContactModalOpen = false;
  renderContactModal();
}

let isSuccessModalOpen = false;

function renderSuccessModal() {
  if (isSuccessModalOpen) {
    successModalRoot.render(<SuccessModal onClose={closeSuccessModal} />);
    setTimeout(() => {
      closeSuccessModal();
    }, 1500);
  } else {
    successModalRoot.render(null);
  }
}

function openSuccessModal() {
  isSuccessModalOpen = true;
  renderSuccessModal();
}

function closeSuccessModal() {
  isSuccessModalOpen = false;
  renderSuccessModal();
}

let isBurgerMenuOpen = false;

document
  .getElementById("burgerMenuBtn")
  ?.addEventListener("click", function () {
    isBurgerMenuOpen = true;
    document.body.style.overflow = "hidden";
    renderBurgerMenu();
  });

function renderBurgerMenu() {
  if (isBurgerMenuOpen) {
    burgerMenuRoot.render(
      <BurgerMenu
        onClose={closeBurgerMenu}
        onContactModalOpen={openContactModal}
      />
    );
  } else {
    burgerMenuRoot.render(null);
  }
}

function closeBurgerMenu() {
  isBurgerMenuOpen = false;
  document.body.style.overflow = "scroll-y";
  renderBurgerMenu();
}

homeRoot.render(<App />);
