import { Space, Typography, Row, Col, Image, Card, Flex } from "antd";
import React from "react";
const Companies = () => {
  return (
    <Space direction="vertical">
      <Space
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography.Title level={1} style={{ marginBottom: 0 }}>
          Top&nbsp;
          <span style={{ color: "#23A440" }}>Companies</span>
          &nbsp;Are Using Us
        </Typography.Title>
        <h5 style={{ color: "#777777" }}>
          More than 1000+ leading enterprises have trusted to use vTalent
        </h5>
      </Space>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Card style={{ boxShadow: "0px 10px 38px 0px #00000012" }}>
          <Flex vertical gap={30}>
            <Row justify="center" gutter={[128, 64]} style={{ padding: "2em" }}>
              <Col>
                <Image width={140} src="/fedex.svg" alt="FedEx" />
              </Col>
              <Col>
                <Image width={140} src="/google.svg" alt="Google" />
              </Col>
              <Col>
                <Image width={140} src="/ola.svg" alt="Ola" />
              </Col>
              <Col>
                <Image width={140} src="/microsoft.svg" alt="Microsoft" />
              </Col>
            </Row>
            <Row justify="center" gutter={[128, 64]}>
              <Col>
                <Image width={140} src="/amazon.svg" alt="Amazon" />
              </Col>
              <Col>
                <Image width={100} src="/fedx.svg" alt="Fedx" />
              </Col>
              <Col>
                <Image width={140} src="./walmart.svg" alt="Walmart" />
              </Col>
            </Row>
          </Flex>
        </Card>
      </Space>
    </Space>
  );
};

export default React.memo(Companies);
