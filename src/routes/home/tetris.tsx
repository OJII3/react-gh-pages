import React from 'react';
import NavbarElement from './navbarElement';
import abstractBgImg from '../media/abstract-background-of-four-colored-triangles.jpg';
import tetrisFinalImg from '../media/tetris-final-screeenshot.jpg';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Headline = () => (
  <header style={{
    height: '50vh',
    backgroundImage: `url(${abstractBgImg})`,
    backgroundSize: 'cover',
  }}>
    <h1 style={{
      position: 'relative',
      top: '50%',
      color: 'white',
      textAlign: 'center',
    }}>
      <b>テトリス風ブラウザゲーム</b>
    </h1>
  </header>
);

document.title = 'テトリス風ブラウザゲーム - OJII3';

const tetris = () => {
  const contentTsx = (
    <>
      <body>
        <NavbarElement />
        <Headline />
        <Container className="container-fluid p-4">
          <Row className="g-3">
              <h3 className="py-3"><span className="underline">
                テトリス作ってみたみた</span></h3>
              <p>ゲームエンジンなどを用いてません。Canvasを使ってフルスクラッチしました</p>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tetrisFinalImg} />
                <Card.Body>
                  <Card.Title>テトリス 2021.5</Card.Title>
                  <Card.Text>
                    Google Apps Scriptで動いています。Canvasを使ってフルスクラッチしました。<br />
                    画面サイズが大きいとうまく動きません。
                  </Card.Text>
                  <Button variant="primary" href='https://script.google.com/macros/s/AKfycbwhYmfDdeKwVQSjXGXyv58aRqDb7WpN-xyeWXWNZdjd3vBsRn5F6ZgzpMgew1X140Qy7g/exec'>
                    開く
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tetrisFinalImg} />
                <Card.Body>
                  <Card.Title>テトリス 2022.</Card.Title>
                  <Card.Text>
                    Google Apps ScriptのものをReactに移行中。コード汚すぎて進みません。<br />
                  </Card.Text>
                  <Button variant="primary">
                    開く
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <footer id="footer" className="p-3"></footer>
      </body>
    </>

  );

  return contentTsx;
};

export default tetris;