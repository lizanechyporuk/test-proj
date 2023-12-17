import React, { useState, ChangeEvent, FormEvent } from "react";
import beersModal from "../assets/beers_modal.png";

interface ContactProps {
  onClose: () => void;
  onSuccess: () => void;
}

interface FormData {
  name: string;
  phoneNumber: string;
  comment: string;
}

function Contact({ onClose, onSuccess }: ContactProps): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    comment: "",
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity()) {
      console.log("Form submitted:", formData);
      onClose();
      onSuccess();
      setFormData({ name: "", phoneNumber: "", comment: "" });
    }

    setValidated(true);
  };

  return (
    <div className="contactModal modal modal-xl z-2 d-block">
      <div className="modalBg z-0 d-block position-absolute w-100 h-100"></div>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row justify-content-between m-0 p-0">
              <div className="col-lg-5 col-12 p-0">
                <img src={beersModal} className="img-fluid" alt="Beers Modal" />
              </div>
              <div className="col-lg-6 col-12 p-0">
                <h1 className="m-0">Contact us</h1>
                <p>Fill in the contact form and send request.</p>
                <form
                  className={`row g-3 ${validated ? "was-validated" : ""}`}
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="form-floating col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="name">Your name</label>
                    <div className="invalid-feedback">
                      Please provide your full name.
                    </div>
                  </div>
                  <div className="form-floating col-12">
                    <input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Number of phone"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    ></input>
                    <label htmlFor="phoneNumber">Number of phone</label>
                    <div className="invalid-feedback">
                      Please provide your phone number.
                    </div>
                  </div>
                  <div className="form-floating col-12">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="comment"
                      required
                      value={formData.comment}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="comment">Leave a comment here</label>
                    <div className="invalid-feedback">
                      Please provide your message here.
                    </div>
                  </div>
                  <div className="form-check col-12">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkbox"
                      required
                    ></input>
                    <label className="form-check-label" htmlFor="checkbox">
                      Terms and policy
                    </label>
                  </div>
                  <div className="col-12">
                    <button className="btn w-100" type="submit">
                      Send request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
