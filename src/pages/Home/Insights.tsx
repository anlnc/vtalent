import React from "react";
import { Card, Image, Space, Typography } from "antd";
import { Col, Row } from "antd";

const Insight = React.memo(
  ({
    title,
    content,
    iconSrc,
  }: {
    title: string;
    content: string;
    iconSrc: string;
  }) => {
    return (
      <Card>
        <Space direction="horizontal">
          <Space>
            <Image
              src={iconSrc}
              style={{
                width: "70px",
                height: "70px",
                border: "1.5px",
              }}
              preview={false}
            />
          </Space>
          <Space direction="vertical">
            <Typography.Text
              style={{
                fontSize: "24px",
              }}
            >
              {title}
            </Typography.Text>
            <Typography.Text>{content}</Typography.Text>
          </Space>
        </Space>
      </Card>
    );
  }
);

const Insights = () => {
  return (
    <Space
      direction="vertical"
      style={{
        backgroundColor: "#F5F5F5",
        borderRadius: "72px",
        paddingBottom: "2em",
      }}
    >
      <Row style={{ justifyContent: "center" }}>
        <Typography.Title level={1}>
          The Power Of Earn <span style={{ color: "#23A440" }}>vTalent</span>
          &nbsp;Network
        </Typography.Title>
      </Row>
      <Row style={{ justifyContent: "center" }} gutter={[64, 32]}>
        <Col span={8}>
          <Insight
            title="Creative Ideas"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida"
            iconSrc="/creative-icon.svg"
          />
        </Col>
        <Col span={8}>
          <Insight
            title="Beautiful Blog"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
            iconSrc="/creative-icon.svg"
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }} gutter={[64, 32]}>
        <Col span={8}>
          <Insight
            title="Perfect Showcase"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida"
            iconSrc="/perfect-showcase.svg"
          />
        </Col>
        <Col span={8}>
          <Insight
            title="Easy to Use"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
            iconSrc="/easy-to-use.svg"
          />
        </Col>
      </Row>
    </Space>
  );
};

export default React.memo(Insights);
