"use client";

import FilePondUploader from "@/components/ImageUploader/ProfileUploader";
import { getProfileInfo, setProfileInfo } from "@/services/UserService";
import { setAuth } from "@/store/slices/auth-slice";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Row,
  Spinner,
  Tab,
} from "react-bootstrap";
import toast from "react-hot-toast";
import { TbEditCircle } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";



const UserPersonalInfo = () => {
  const user = useSelector((state) => state.auth.user);
  const [activeKey, setActiveKey] = useState("profile-info");
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentAuthState = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();



  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await getProfileInfo(user?.id);
        if (response.error) {
          throw new Error(response.message);
        }

        console.log(response?.data?.data)

        setProfile(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        // setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileInfo();
  }, []);


   async function UpdateProfileInfo(event)  {
     event.preventDefault();
      try {
        const response = await setProfileInfo(user?.id, profile);
        if (response.error) {
          throw new Error(response.message);
        }

        console.log(response?.data)

        setProfile(response?.data?.data);
        setIsEditing(false)
        toast.success(response?.data?.message);

        const authPayload = {
            ...currentAuthState, // Spread current state to keep other fields the same
            image: response?.data?.data.image ?? currentAuthState.image, // Update only the image field
            name: response?.data?.data.name ?? currentAuthState.name, // Update only the image field
            email: response?.data?.data.email ?? currentAuthState.email, // Update only the image field
            phone_number: response?.data?.data.phone_number ?? currentAuthState.phone_number, // Update only the image field
        };

        dispatch(setAuth({ user: authPayload }));
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    
  const profiles = [
    { label: "Email", value: profile?.email },
    { label: "Phone", value: profile?.phone_number },
    // { label: "Date of Birth", value: profile?.phone_number },
    // { label: "Gender", value: "Male" },
  ];

  const handleEditClick = () => {
    setIsEditing(true);
    setActiveKey("edit-personal-info");
  };

  const handlePasswordClick = () => {
    setIsEditing(true);
    setActiveKey("change-password");
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
      {!isEditing && (
        <>
          <Card.Header className="border-bottom-0 mb-4">
            <h3>Personal Information</h3>
          </Card.Header>
          <div className="text-image-section py-2">
            <Container>
              <Row>
                <Col lg={10} className="px-0 mx-4">
                  <Row
                    className="align-items-center py-4"
                    style={{ border: "1px solid #D4D4D4", padding: "0 40px" }}
                  >
                    <Col lg={5}>
                      <div className="mb-4 mb-lg-0" style={{ maxWidth: '250px', maxHeight: '250px' }}>
                        <Image
                          src={currentAuthState?.image ? `${process.env.NEXT_PUBLIC_API_URL}/public${currentAuthState?.image}` : "/assets/images/Dashboard/personalInfo.png"}
                          width={250}
                          height={250}
                          alt="personal info img"
                          layout="responsive"
                          objectFit="cover"
                          priority
                        />
                      </div>

                    </Col>
                    <Col lg={7}>
                      <div className="card-body">
                        <h2 className="card-title fw-medium "   style={{ fontSize: "32px", marginBottom:"35px" }} >
                          {profile?.name}
                        </h2>
                        {/* <hr /> */}
                        {profiles.map((item, index) => (
                          <p
                            key={index}
                            className="card-text d-flex justify-content-between"
                            style={{marginBottom:"1rem"}}
                          >
                            <strong style={{ flex: "1", fontSize: "16px"}}>{item.label}</strong>
                            <span style={{ flex: "2", fontSize: "16px" }}> : {item.value}</span>
                          </p>
                        ))}
                        <Nav.Link eventKey="edit-personal-info">
                          <button
                            className="w-100 manrope fs-6 fw-normal d-flex align-items-center gap-1 justify-content-center bg-cst-primary border-0 input-group-text btn-normal btn-sm"
                            style={{ color: "#FAFAFA", marginTop:"30px"}}
                            onClick={handleEditClick}
                          >
                            Edit Profile
                            <TbEditCircle className="fs-5" />
                          </button>
                        </Nav.Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
      {isEditing && (
        <>
          <Tab.Content>
            <Tab.Pane eventKey="edit-personal-info">
              <Card>
                <Card.Header>
                  <h3>Edit Personal Information</h3>
                </Card.Header>
                <Card.Body>
                  <div className="account-details-form">
                    <Form method="post" name="enq" onSubmit={UpdateProfileInfo} >
                      <Row>
                        <Col lg={4} md={12} xs={12} className="mb-3">
                          <FilePondUploader profile={profile} />
                        </Col>
                        <Col lg={8} md={12} xs={12}>
                          <Row>
                            <Col xs={12} className="mb-3">
                              <Form.Group controlId="formFirstName">
                                <Form.Label>
                                  Name{" "}
                                  <span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  value={profile?.name || "Write your full name"}
                                  onChange={(e) => setProfile((prevProfile) => ({
                                    ...prevProfile,
                                    name: e.target.value,
                                  }))}
                                />
                              </Form.Group>
                            </Col>
                            <Col xs={12} className="mb-3">
                              <Form.Group controlId="formEmail">
                                <Form.Label>
                                  Email Address{" "}
                                  <span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  required
                                  type="email"
                                  value={profile?.email || "Enter your email address"}
                                  onChange={(e) => setProfile((prevProfile) => ({
                                    ...prevProfile,
                                    email: e.target.value,
                                  }))}
                                />
                              </Form.Group>
                            </Col>
                            <Col xs={12} className="mb-3">
                              <Form.Group controlId="formPhoneNumber">
                                <Form.Label>
                                  Phone Number{" "}
                                  <span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  value={profile?.phone_number || "Enter your phone number"}
                                   onChange={(e) => setProfile((prevProfile) => ({
                                    ...prevProfile,
                                    phone_number: e.target.value,
                                  }))}

                                />
                              </Form.Group>
                            </Col>
                            {/* <Col xs={12} className="mb-3">
                              <Form.Group controlId="formDOB">
                                <Form.Label>
                                  DOB <span className="required">*</span>
                                </Form.Label>
                                <Form.Control required type="date" />
                              </Form.Group>
                            </Col>
                            <Col xs={12} className="mb-3">
                              <Form.Group controlId="formGender">
                                <Form.Label>
                                  Gender <span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  as="select"
                                  required
                                  defaultValue=""
                                >
                                  <option value="" disabled>
                                    Select Gender
                                  </option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                </Form.Control>
                              </Form.Group>
                            </Col> */}
                            <Col xs={6}>
                              <Button   type="submit"  className="input-group-text btn-normal btn-sm">
                                Save
                              </Button>
                              <button
                                type="button"
                                className="btn btn-line-fill btn-sm"
                                onClick={handleCancelEdit}
                              >
                                Cancel
                              </button>
                            </Col>
                          </Row>
                          {/* <p style={{ fontSize: "14px", marginTop: "24px" }}>
                            Want to change password?{" "}
                            <span
                              className="text-info"
                              style={{
                                textDecoration: isHovered
                                  ? "underline"
                                  : "none",
                                cursor: isHovered ? "pointer" : "default",
                              }}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              onClick={handlePasswordClick}
                            >
                              Click Here
                            </span>
                          </p> */}
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane eventKey="change-password">
              <Card>
                <Card.Header>
                  <h3>Change Password</h3>
                </Card.Header>
                <Card.Body>
                  <div className="account-details-form">
                    <Form method="post" name="enq">
                      <Row>
                        {/* Hidden username field for accessibility */}
                        <Form.Control
                          type="text"
                          name="username"
                          autoComplete="username"
                          value={"Shazid Nawas Shovon"}
                          style={{ display: "none" }}
                          readOnly
                        />
                        <Col xs={12} className="mb-3">
                          <Form.Group controlId="formCurrentPassword">
                            <Form.Label>
                              Current Password{" "}
                              <span className="required">*</span>
                            </Form.Label>
                            <Form.Control
                              required
                              type="password"
                              placeholder="Type Current Password"
                              autoComplete="current-password"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} className="mb-3">
                          <Form.Group controlId="formNewPassword">
                            <Form.Label>
                              New Password <span className="required">*</span>
                            </Form.Label>
                            <Form.Control
                              required
                              type="password"
                              placeholder="Type New Password"
                              autoComplete="new-password"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} className="mb-3">
                          <Form.Group controlId="formRetypePassword">
                            <Form.Label>
                              Retype Password{" "}
                              <span className="required">*</span>
                            </Form.Label>
                            <Form.Control
                              required
                              type="password"
                              placeholder="Retype New Password"
                              autoComplete="new-password"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={6}>
                          <Button type="submit" className="input-group-text btn-normal btn-sm">
                            Update Password
                          </Button>
                          <button
                            type="button"
                            className="btn btn-line-fill btn-sm"
                            onClick={handleCancelEdit}
                          >
                            Cancel
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Tab.Pane>
          </Tab.Content>
        </>
      )}
    </Tab.Container>
  );
};

export default UserPersonalInfo;