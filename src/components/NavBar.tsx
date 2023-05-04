import { Container, Navbar } from "react-bootstrap";

//Basic navbar. No functionality, just styling

export const NavBar = () => {
  return (
    <Container >
      <Navbar expand={true} className="mb-3 fw-bold">
        <Container >
          <Navbar.Brand>
            Overview of available bikes and parking for the Oslo Byskkel
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};
