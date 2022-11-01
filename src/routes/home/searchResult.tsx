import React from 'react';
import { Col, Row, Form, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Pages from "../../Pages";
import NavbarElement from "./navbarElement";

const SearchResult = () => {
  document.title = 'Search Pages - OJII3';
  const rawParameter = useLocation().search;
  const searchQuery = new URLSearchParams(rawParameter).get('q') ?? 'there is no parameter';
  let pathes: JSX.Element[] = [];
  let [results, setResults] = React.useState<JSX.Element[]>(pathes);

  const search = (query: string) => {
    for (const target of Pages) {
      if (target.content.toString().replaceAll(/<.*?>/g, '').match(query)) {
        pathes.push(
          <Row classNmae='justify-content-md-center'>
            <Col lg={8}>
              <li><Link to={target.path}>{`Path: ${target.path}`}</Link></li>
            </Col>
          </Row>
        );
      }
    }
  };
  search(searchQuery);

  const reloadResult = (e: React.ChangeEvent<HTMLInputElement>) => {

    search(e.target.value);
    setResults(pathes);
  };

  const ResultPaths = () => (
    <>
      {results.concat()}
    </>
  );


  return (
    <>
      <NavbarElement />
      <Stack gap={3} className='justify-content-md-center'>
        <Row className='text-center'>
          <Col><h2>Real Timed Searching System</h2></Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col lg={8}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onInput={reloadResult}
            />
          </Col>
        </Row>
        <Row className='justify-content-md-center'><Col lg={8}>Search Results</Col></Row>
        <ResultPaths />
      </Stack>
    </>
  );
};

export default SearchResult;