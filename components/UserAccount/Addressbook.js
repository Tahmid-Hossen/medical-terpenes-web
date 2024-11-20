import React from "react";
import { Container, Row, Col, Nav, Tab, Card } from "react-bootstrap";

const AddressBook = () => {
  return (
    <div className="account-details-form" style={{ margin: "40px" }}>
      <form
        className="fromPadding"
        style={{ border: "1px solid #D4D4D4", padding: "40px" }}
        method="post"
        name="enq"
      >
        <Row>
          <Col className="mb-3" md={6}>
            <label className="inputLavalDefault">
              First Name <span className="required">*</span>
            </label>
            <input
              required
              className="form-control"
              name="name"
              placeholder="Write your full name"
              type="text"
            />
          </Col>

          <Col className="mb-3" md={6}>
            <label className="inputLavalDefault">
              Phone Number <span className="required">*</span>
            </label>
            <input
              required
              className="form-control"
              name="dname"
              placeholder="Enter your phone number"
              type="text"
            />
          </Col>
          <Col className="mb-3" md={6}>
            <label className="inputLavalDefault">
              Division <span className="required">*</span>
            </label>
            <div className="input-group-prepend">
              <div className="custom-select-wrapper">
                <select className="first-null form-control">
                  <option value="male">Select Division</option>
                  <option value="female">USA</option>
                  <option value="other">Australia</option>
                </select>
              </div>
            </div>
          </Col>
          <Col className="mb-3" md={6}>
            <label>
              District <span className="required">*</span>
            </label>
            <div className="input-group-prepend">
              <div className="custom-select-wrapper">
                <select className="first-null form-control">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </Col>
          <Col className="mb-3" md={6}>
            <label>
              Thana <span className="required">*</span>
            </label>
            <div className="input-group-prepend">
              <div className="custom-select-wrapper">
                <select className="first-null form-control">
                  <option value="male">Select Division</option>
                  <option value="female">USA</option>
                  <option value="other">Australia</option>
                </select>
              </div>
            </div>
          </Col>
          <Col className="mb-3" md={6}>
            <label>
              Postal Code* <span className="required">*</span>
            </label>
            <input
              required
              className="form-control"
              name="email"
              placeholder="Enter Postal Code*"
              type="text"
            />
          </Col>

          <Col md={6}>
            <button
              type="submit"
              className="btn btn-fill-out"
              name="submit"
              value="Submit"
            >
              Save
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AddressBook;
