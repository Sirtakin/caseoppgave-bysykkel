import { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface Props {
  children: ReactNode;
}

export const BikeCardContainer = ({ children }: Props) => {
  return <Container fluid="md">{children}</Container>;
};
