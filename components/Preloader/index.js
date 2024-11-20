import { Spinner } from "react-bootstrap";

const Preloader = () => {
  return ( <div className="d-flex align-items-center min-vh-100 justify-content-center">
    <Spinner className="mx-auto my-auto" animation="grow" style={{width:'80px', height:'80px'}} />
  </div>);
};

export default Preloader;
