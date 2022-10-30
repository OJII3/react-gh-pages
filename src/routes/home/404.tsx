import { Col, Row, Stack } from "react-bootstrap";
import NavbarElement from "./navbarElement";

const Error404 = () => {
  document.title = '404 Page not found';
  return (
    <>
      <NavbarElement />
      <Stack>
        <Row>
          <Col>
            <h1>404</h1>
          </Col>
        </Row>
      </Stack>
    </>
  );
};

export default Error404;