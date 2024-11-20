// "use client"
//
// import { clearAuth } from "@/store/slices/auth-slice";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import Nav from "react-bootstrap/Nav";
// import Tab from "react-bootstrap/Tab";
// import { FaRegEdit } from "react-icons/fa";
// import {
//   RiArrowGoBackLine,
//   RiCompass3Line,
//   RiHeart3Line,
//   RiHome4Line,
//   RiHourglassFill,
//   RiLogoutBoxRLine,
//   RiMapPinLine,
//   RiShoppingBasketLine,
//   RiShoppingCart2Line,
//   RiTruckLine,
//   RiUserLine,
// } from "react-icons/ri";
// import { useDispatch } from "react-redux";
// import AddressBook from "./AddressBook";
// import MyProfilePreview from "./MyProfilePreview";
// import OrderDetailsCard from "./OrderDetailsCard ";
// import OrderTable from "./OrderTable";
// import QuantityShowsCard from "./QuantityShowsCard";
// import UserPersonalInfo from "./UserPersonalInfo";
//
// const menuItems = [
//   {
//     title: "Dashboard",
//     icon: RiHome4Line,
//     slug: "dashboard",
//   },
//   {
//     title: "My Orders",
//     icon: RiShoppingBasketLine,
//     slug: "orders",
//   },
//   {
//     title: "Order Track",
//     icon: RiCompass3Line,
//     slug: "download",
//   },
//   {
//     title: "Personal Info",
//     icon: RiUserLine,
//     slug: "personal-info",
//   },
//   {
//     title: "Address Book",
//     icon: RiMapPinLine,
//     slug: "addressBook",
//   },
//   {
//     title: "Order Details",
//     icon: RiMapPinLine,
//     slug: "orderdetails",
//   },
//
// ];
//
// const cardData = [
//   {
//     title: "Orders",
//     icon: RiShoppingCart2Line,
//     count: "22",
//     description: "Total Orders",
//   },
//   {
//     title: "Delivered",
//     icon: RiTruckLine,
//     count: "08",
//     description: "Total Delivered Orders",
//   },
//   {
//     title: "Pending",
//     icon: RiHourglassFill,
//     count: "11",
//     description: "Total Pending Orders",
//   },
//   {
//     title: "Wishlist",
//     icon: RiHeart3Line,
//     count: "06",
//     description: "Total Wishlist Items",
//   },
//   {
//     title: "Return",
//     icon: RiArrowGoBackLine,
//     count: "02",
//     description: "Total Return Orders",
//   },
// ];
//
//
// const MyAccount = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//
//
//   const signout = async () => {
//      dispatch(clearAuth());
//     try {
//       const res = await fetch(`/api/auth/signout`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//
//       if (res.ok) {
//
//         router.push('/auth/login'); // Redirect to a protected route
//       } else {
//         console.error('Logout failed');
//       }
//     } catch (error) {
//       console.error('Failed to form', error);
//       // Show error message to the user
//     }
//   };
//   return (
//     <>
//       {/* breadcrumb */}
//       {/* <Breadcrumb pageTitle="My Account"> */}
//
//       <Container>
//         <hr/>
//         <ol className="breadcrumb justify-content-md-start  my-account-content">
//           <li className="breadcrumb-item">
//             <Link href="/" prefetch={false}>Home</Link>
//           </li>
//           <li className="breadcrumb-item active " style={{alignItems: 'center', display: 'flex'}}>My Account</li>
//         </ol>
//       </Container>
//       {/* </Breadcrumb> */}
//
//       <div className="my-account-content space-pt--30 space-pb--r100">
//         <Container>
//           <Tab.Container defaultActiveKey="dashboard">
//             <Row>
//               <Col lg={3} md={4} style={{background: "#f9f9f9"}}>
//                 <MyProfilePreview/>
//                 <Nav
//                   variant="pills"
//                   className="flex-column my-account-content__navigation space-mb--r60"
//                 >
//                   <Nav>
//                     {menuItems.map((item, index) => (
//                       <Nav.Item key={index}>
//                         <Nav.Link eventKey={item.slug}>
//                           <item.icon/>
//                           {item.title}
//                         </Nav.Link>
//                       </Nav.Item>
//                     ))}
//                     <Nav.Link eventKey={'/'}>
//                       <RiLogoutBoxRLine/> <a onClick={signout}>Logout</a>
//                     </Nav.Link>
//
//                   </Nav>
//                 </Nav>
//               </Col>
//               <Col lg={9} md={8}>
//                 <Tab.Content>
//                   <Tab.Pane eventKey="dashboard">
//                     <Card className="my-account-content__content">
//                       <Card.Header className="border-button-0">
//                         <h3>Dashboard</h3>
//                         <span
//                           className="fw-normal"
//                           style={{
//                             fontSize: "14px",
//                             color: "#444444",
//                             fontFamily: "Roboto",
//                           }}
//                         >
//                           This Dashboard finds you all the summary about
//                           purchase
//                         </span>
//                       </Card.Header>
//                       <Card.Body>
//                         {/*  <div className="welcome">
//                           <p>
//                             Hello, <strong>John Doe</strong> (If Not{" "}
//                             <strong>John !</strong>{" "}
//                             <Link href="/other/login" className="logout">
//                               Logout
//                             </Link>
//                             )
//                           </p>
//                         </div>
//                         <p>
//                           From your account dashboard. you can easily check
//                           &amp; view your recent orders, manage your shipping
//                           and billing addresses and edit your password and
//                           account details.
//                         </p> */}
//                         <Row>
//                           {cardData.map((cardInfo, index) => (
//                             <Col lg={4} style={{marginBottom: "40px"}} key={index}>
//                               <QuantityShowsCard cardData={cardInfo}></QuantityShowsCard>
//                             </Col>
//                           ))}
//                         </Row>
//                       </Card.Body>
//                     </Card>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="orders">
//                     <Card className="my-account-content__content">
//                       <Card.Header className="border-button-0">
//                         <h3>My Orders</h3>
//                         <span
//                           className="fw-normal"
//                           style={{
//                             fontSize: "14px",
//                             color: "#444444",
//                             fontFamily: "Roboto",
//                           }}
//                         >
//                           This Dashboard finds you all the summary about
//                           purchase
//                         </span>
//                         <br/>
//                         <span
//                           className="fw-normal"
//                           style={{
//                             fontSize: "14px",
//                             color: "#F94144",
//                             fontFamily: "Roboto",
//                           }}
//                         >
//                           Your order will be processed once the payment is done.
//                           Click here to add your payment details.
//                         </span>
//                       </Card.Header>
//                       <Card.Body>
//                         {/*    <div className="myaccount-table table-responsive text-center">
//                           <table className="table">
//                             <thead>
//                               <tr>
//                                 <th>Order</th>
//                                 <th>Date</th>
//                                 <th>Status</th>
//                                 <th>Total</th>
//                                 <th>Action</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               <tr>
//                                 <td>1</td>
//                                 <td>Aug 22, 2020</td>
//                                 <td>Pending</td>
//                                 <td>$3000</td>
//                                 <td>
//                                   <a href="#" className="check-btn sqr-btn ">
//                                     View
//                                   </a>
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td>2</td>
//                                 <td>July 22, 2020</td>
//                                 <td>Approved</td>
//                                 <td>$200</td>
//                                 <td>
//                                   <a href="#" className="check-btn sqr-btn ">
//                                     View
//                                   </a>
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td>3</td>
//                                 <td>June 12, 2020</td>
//                                 <td>On Hold</td>
//                                 <td>$990</td>
//                                 <td>
//                                   <a href="#" className="check-btn sqr-btn ">
//                                     View
//                                   </a>
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </div> */}
//                         <OrderTable/>
//                       </Card.Body>
//                     </Card>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="download">
//                     <Card className="my-account-content__content">
//                       <Card.Header>
//                         <h3>Order Track</h3>
//                         <span
//                           className="fw-normal"
//                           style={{
//                             fontSize: "14px",
//                             color: "#444444",
//                             fontFamily: "Roboto",
//                           }}
//                         >
//                           Track Your Order Here
//                         </span>
//                         <br/>
//                       </Card.Header>
//                       <Card.Body>
//                         <div className="myaccount-table table-responsive text-center">
//                           <div className="card-body  custom-shadow" style={{
//                             border: "1px solid #D4D4D4"
//                           }}>
//                             <h5 className="card-title text-start fw-medium"
//                                 style={{fontSize: "20px", color: "#262626", marginBottom: "40px"}}>Track Your Order</h5>
//                             <div className="input-group mb-3 w-75">
//                               <input
//                                 type="text"
//                                 className="form-control w-75"
//                                 placeholder="Order no"
//                               />
//                               <div className="input-group-append w-25">
//                                 <button
//                                   className="btn btn-info"
//                                   type="button"
//
//                                 >
//                                   Search
//                                 </button>
//                               </div>
//                             </div>
//
//                             <p className="text-start">Your order no: </p>
//                             <p
//                               className="fw-medium text-start "
//                               style={{
//                                 fontSize: "14px",
//                                 color: "#A3A3A3",
//                                 fontFamily: "Roboto",
//                                 textAlign: "left !impotent",
//                                 marginTop: "80px"
//                               }}
//                             >
//                               No order track record
//                             </p>
//                           </div>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="personal-info">
//                     <Card className="my-account-content__content">
//                       <Card.Body>
//                         <UserPersonalInfo/>
//                       </Card.Body>
//                     </Card>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="address">
//                     <Card className="my-account-content__content">
//                       <Card.Header>
//                         <h3>Billing Address</h3>
//                       </Card.Header>
//                       <Card.Body>
//                         <address>
//                           <p>
//                             <strong>John Doe</strong>
//                           </p>
//                           <p>
//                             1355 Market St, Suite 900 <br/>
//                             San Francisco, CA 94103
//                           </p>
//                           <p>Mobile: (123) 456-7890</p>
//                         </address>
//                         <a href="#" className="check-btn sqr-btn ">
//                           <FaRegEdit/> Edit Address
//                         </a>
//                       </Card.Body>
//                     </Card>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="addressBook">
//                     <Card className="my-account-content__content">
//                       <Card.Header>
//                         <h3>Addressbook</h3>
//                       </Card.Header>
//                       <Card.Body>
//                         <AddressBook/>
//                       </Card.Body>
//                     </Card>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="orderdetails">
//                     <Card className="my-account-content__content">
//                       <Card.Header className="d-flex align-content-center justify-content-between">
//                         <h3>#ORD123456 Order details</h3>
//                         <Button variant="light" className="mb-3 rounded-5 border-black border-1">Back to list</Button>
//                       </Card.Header>
//                       <Card.Body>
//                         <OrderDetailsCard/>
//                       </Card.Body>
//                     </Card>
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Col>
//             </Row>
//           </Tab.Container>
//         </Container>
//       </div>
//     </>
//   );
// };
//
// export default MyAccount;
