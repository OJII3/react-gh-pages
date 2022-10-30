import React, { useState } from "react";
import { Col, Row, Form, Stack } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Pages from "../../Pages";
import NavbarElement from "./navbarElement";

const SearchResult = () => {
  const rawParameter = useLocation().search;
  const searchQuery = new URLSearchParams(rawParameter).get('q') ?? 'nulldadgadfa';
  let pathes: JSX.Element[] = [];
  let [results, setResults] = React.useState<JSX.Element[]>(pathes);
  const search = (query: string) => {
    for (const target of Pages) {
      if (target.content.toString().replaceAll(/<.*?>/g, '').match(query)) {
        pathes.push(
          <Row lg={8}>
            <Col>
              <li>
                <Link to={target.path}>{`${document.URL.replace(/\/react-gh-pages#\/.*$/, '')}/react-gh-pages#${target.path}`}</Link>
              </li>
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


  return (
    <>
      <NavbarElement />
      <Stack gap={3} className='justify-content-md-center'>
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
        <Row >Search Result</Row>
        {results.concat()}
      </Stack>
    </>
  );
};

export default SearchResult;