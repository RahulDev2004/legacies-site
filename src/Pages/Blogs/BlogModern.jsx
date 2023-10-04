import React from "react";

// Libraries
import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

// Components
import BlogModern from "../../Components/Blogs/BlogModern";

// Data
import { blogData } from "../../Components/Blogs/BlogData";

// Filter the blog data category wise
const blogModernData = blogData.filter((item) => item.blogType === "modern");

const BlogModernPage = (props) => {
  return (
    <div style={props.style}>
      {/* Parallax Section Start */}
      <div className="py-[80px] h-auto overflow-hidden md:relative md:py-[40px]">
        <Parallax className="lg-no-parallax bg-cover absolute -top-[100px] landscape:md:top-[-20px] left-0 w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(/assets/img/webp/portfolio-bg2.webp)` }}></Parallax>
        <Container className="h-full relative">
          <Row className="justify-center h-[300px] sm:h-[250px]">
            <Col xl={6} lg={6} md={8} className="text-center flex justify-center flex-col font-serif">
              <h1 className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]">Blog modern layout</h1>
              <h2 className="text-darkgray font-medium -tracking-[1px] mb-0">Attractive articles updated daily</h2>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Parallax Section End */}

      {/* Section Start */}
      <section className="overflow-hidden relative px-[9%] pb-[130px] bg-lightgray xl:px-0 lg:pb-[90px] md:pb-[75px] sm:pb-[50px]">
        <Container fluid>
          <Row>
            <Col xs={12} className="xs:px-0">
              <BlogModern
                overlay={["#0039e3", "#5e28dd", "#8600d4"]}
                link="/blog-types/blog-standard-post/"
                pagination={true}
                grid="grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large md:pt-[4.5rem] xs:pt-0"
                data={blogModernData}
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}
    </div>
  );
};

export default BlogModernPage;
