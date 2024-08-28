import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../assets/music_beat.gif";
import Card from "react-bootstrap/Card";
import cardImg1 from "../assets/instrument1.jpg";
import cardImg2 from "../assets/instrument2.jpeg";
import cardImg3 from "../assets/instrument3.jpeg";

const Landing = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      {/* landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }} className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ex labore sed voluptatem minus iure debitis alias
            perspiciatis, quam iusto natus aspernatur ducimus quaerat
            consectetur?
          </p>
          <Link to={"/home"} className="btn btn-info">
            Get Started
          </Link>
        </div>
        <div className="col">
          <div className="col-lg-6">
            <img
              className="ms-5 img-fluid"
              src={landingImg}
              alt="landing image"
            />
          </div>
        </div>

        {/* features */}

        <div className="my-5">
          <h3 className="text-center">Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card className="p-2" style={{ width: "20rem" }}>
                <Card.Img variant="top" height={"250px"} src={cardImg1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className="p-2" style={{ width: "20rem" }}>
                <Card.Img variant="top" height={"250px"} src={cardImg2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className="p-2" style={{ width: "20rem" }}>
                <Card.Img variant="top" height={"250px"} src={cardImg3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* links */}
        <div className="my-5 row border rounded p-5">
          <div className="col-lg-5">
            <h3 className="text-warning">Simple,Fast and Powerful</h3>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel
              aliquam eius? Culpa, atque deserunt.
            </p>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel
              aliquam eius? Culpa, atque deserunt.
            </p>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel
              aliquam eius? Culpa, atque deserunt.
            </p>
          </div>
          <div className="col-lg-6">
            <iframe
              width="700"
              height="500"
              src="https://www.youtube.com/embed/pSHVbLPWA28"
              title="How Big is The Universe?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
