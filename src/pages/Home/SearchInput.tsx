import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Row } from "antd";

const SearchInput = () => {
  return (
    <Card
      style={{
        width: "600px",
        border: "1px solid #ccc",
        borderRadius: "49px",
      }}
    >
      <Row style={{ justifyContent: "space-between" }}>
        <Col span={20}>
          <Input
            size="large"
            variant="borderless"
            placeholder="What position you are looking for?"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={4}>
          <Button size="large" shape="round" type="primary">
            Search
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default React.memo(SearchInput);
