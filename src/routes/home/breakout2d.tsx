import NavbarElement from './navbarElement';
import AbstractBgImg from '../media/abstract-background-of-four-colored-triangles.jpg';
import { Button, Card, Col, Row, Stack } from 'react-bootstrap';

const Headline = () => (
  <header style={{
    height: '40vh',
    backgroundImage: `url(${AbstractBgImg})`,
    backgroundSize: 'cover',
  }}>
    <h1 style={{
      position: 'relative',
      top: '50%',
      color: 'white',
      textAlign: 'center',
    }}>
      <b>ブロック崩し</b>
    </h1>
  </header>
);

const Breakout2d = () => {
  document.title = 'Breakout2D - OJII3';
  return (
    <>
      <NavbarElement />
      <Headline />
      <Stack gap={3}>
          <Row className='text-center'>
            <h3 className="py-3">
              2D Breakout with Pure JavaScript</h3>
            <p>MDNのチュートリアルに基づき制作しました。</p>
          </Row>
          <Row className='mx-auto'>
            <Col lg='auto'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Breakout2D 2021.5</Card.Title>
                  <Card.Text>
                    Google Apps Scriptで動いています。
                  </Card.Text>
                  <Button variant="primary" href='https://script.google.com/macros/s/AKfycbwhYmfDdeKwVQSjXGXyv58aRqDb7WpN-xyeWXWNZdjd3vBsRn5F6ZgzpMgew1X140Qy7g/exec'>
                    開く
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='auto'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>Breakout2D 2022.</Card.Title>
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
    </>
  );
}

export default Breakout2d;