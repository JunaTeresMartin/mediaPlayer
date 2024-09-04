import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoCard from "./VideoCard";
import React, { useState, useEffect } from "react";

const View = () => {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    getAllVideos();
  }, []);
  //fun to get all videos

  const getAllVideos = async () => {
    const result = await getAllVideosAPI();
    if (result.status >= 200 && status.state < 300) {
      setAllVideos(result.data);
    }
  };
  console.log(allVideos);
  return (
    <>
      <Row>
        {allVideos?.map(video => (
          <Col key={video?.id} className="mb-4" sm={12} md={6} lg={4}>
            <VideoCard displayData={video} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default View;
