import { useState, useEffect } from "react";
import { Alert, Card, Container, Row } from "react-bootstrap";
import apiClient from "../services/api-client";
import { Bike } from "../hooks/useBike";

interface Props {
  bike: string;
}

export const BikeList = () => {
  return (
    <>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Available Bikes</Card.Title>
            <Card.Text>5</Card.Text>
            {/* <Card.Link href="#">Map</Card.Link> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Available Parking</Card.Title>
            <Card.Text>10</Card.Text>
            {/* <Card.Link href="#">Map</Card.Link> */}
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};
