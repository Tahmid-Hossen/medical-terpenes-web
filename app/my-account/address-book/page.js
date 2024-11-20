"use client"
import AddressBook from "@/app/my-account/_components/AddressBook";
import { Card } from "react-bootstrap";

const AddressBookPage = () => {
  return (
    <Card className="my-account-content__content">
      <Card.Header>
        <h3>Address book</h3>
      </Card.Header>
      <Card.Body>
        <AddressBook/>
      </Card.Body>
    </Card>
  );
};

export default AddressBookPage;