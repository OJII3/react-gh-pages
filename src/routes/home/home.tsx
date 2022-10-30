import React from "react";
import { Stack, Row, Col } from "react-bootstrap";
import NavbarElement from "./navbarElement";

const Home = () => {
  document.title = 'Home - OJII3';
  return (
    <>
      <NavbarElement />
      <Stack gap={3} className='text-center'>
        <Row className='text-center'>
          <h1>Welcome to OJII3's Home!</h1>
        </Row>
        <Row className='text-center'>
          <Col>
            <a href='https://github.com/ojii3'>
              <img alt='' width='130' height='130' style={{ borderRadius: '50%' }} src='https://avatars.githubusercontent.com/u/84656786?v=4' />
            </a>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <a href="https://github.com/anuraghazra/github-readme-stats">
              <img alt='' src="https://github-readme-stats.vercel.app/api/top-langs/?username=OJII3&layout=compact" />
            </a>
          </Col>
        </Row>
      </Stack>
    </>
  );
}

export default Home;