import React from 'react';
import NavbarElement from './navbarElement';
import abstractBgImg from '../media/abstract-background-of-four-colored-triangles.jpg';
import tetrisFinalImg from '../media/tetris-final-screeenshot.jpg';
import { Button, Card, Col, Stack, Row } from 'react-bootstrap';

const Headline = () => (
  <header style={{
    height: '40vh',
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

const Tetris = () => {
  document.title = 'Tetris Ish - OJII3';
  return (
    <>
      <body>
        <NavbarElement />
        <Headline />
        <Stack gap={3}>
          <Row className='text-center'>
            <h3 className="py-3">
              テトリス作ってみたみた</h3>
            <p>ゲームエンジンなどを用いず、純粋なJavaScriptのみで作られています。つまりフルスクラッチ</p>
          </Row>
          <Row className='mx-auto'>
            <Col lg='auto'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tetrisFinalImg} />
                <Card.Body>
                  <Card.Title>テトリス 2021.5</Card.Title>
                  <Card.Text>
                    Google Apps Scriptで動いています。
                    画面サイズが大きいとうまく動きません。
                  </Card.Text>
                  <Button variant="primary" href='https://script.google.com/macros/s/AKfycbwhYmfDdeKwVQSjXGXyv58aRqDb7WpN-xyeWXWNZdjd3vBsRn5F6ZgzpMgew1X140Qy7g/exec'>
                    開く
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='auto'>
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
        </Stack>
        <footer id="footer" className="p-3"></footer>
      </body>
    </>

  );
};

export default Tetris;