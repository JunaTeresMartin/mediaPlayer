import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoCard from "./VideoCard";
import React from 'react';

const View = () => {
  return (
    <>
      <Row>
        <Col className='mb-3' sm={12} md={6} lg={4}>
          <VideoCard />
        </Col>
      </Row>
    </>
  );
};
export default View;
