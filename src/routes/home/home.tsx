import React from "react";
import { Container } from "react-bootstrap";
import NavbarElement from "./navbarElement";

const Home = () => {
  return (
    <>
      <NavbarElement />

      <div className="home">Welcome Home</div>
      <Container>
        <a href='https://github.com/ojii3'>
          <img alt='' src='https://avatars.githubusercontent.com/u/84656786?v=4' style={{ borderRadius: '50%' }}></img>
        </a>
        <a href="https://github.com/anuraghazra/github-readme-stats">
          <img alt='' src="https://github-readme-stats.vercel.app/api/top-langs/?username=OJII3&layout=compact" />
        </a>
      </Container>
    </>
  );
}

export default Home;