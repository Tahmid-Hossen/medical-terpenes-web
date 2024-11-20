import { Col, Container, Row } from "react-bootstrap";

const Breadcrumb = ({pageTitle, children}) => {
  return (
    // <div className={`breadcrumb-section bg--grey  ${pageTitle === 'Checkout' ? "space-pt--20 space-pb--20" : "space-pt--r70 space-pb--r70"}`}>
    <div className={`breadcrumb-section bg--grey `} style={{padding:'40px 0'}}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="page-title">
              <h1 className="breadcrumb-title">{pageTitle}</h1>
            </div>
          </Col>
          <Col md={6} className="align-items-center">{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Breadcrumb;
