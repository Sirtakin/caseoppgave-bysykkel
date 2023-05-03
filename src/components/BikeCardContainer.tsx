import { ReactNode } from "react";
import { Container, Row } from "react-bootstrap";

interface Props {
  children: ReactNode;
}

export const BikeCardContainer = ({ children }: Props) => {
  return (
    <Container fluid="md">
      <Row>{children}</Row>
    </Container>
  );
};
