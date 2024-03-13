import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Typography } from "antd";
import { Col, Row } from "antd";
import { Comment } from "@ant-design/compatible";

const Feedback = () => {
  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      <Space style={{ display: "flex", justifyContent: "center" }}>
        <Typography.Title level={1} style={{ marginBottom: "0.1em" }}>
          Meet Our Top <br />
          <span style={{ color: "#23A440" }}>Headhunters</span>
        </Typography.Title>
      </Space>
      <Space>
        <Row style={{ flexDirection: "column", alignContent: "center" }}>
          <Col span={12}>
            <Comment
              author="User 1"
              avatar={
                <Avatar
                  size={40}
                  alt="User 1"
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              }
              content="The Best Thing About vTalent Is That I Can Focus 100% On Finding And Taking Care Of Candidates - Taking Away The Headache Of Dealing With Client Side For Me."
            />
          </Col>
          <Col span={12}>
            <Comment
              author="User 2"
              avatar={
                <Avatar
                  size={40}
                  alt="User 2"
                  style={{ backgroundColor: "#fde3cf" }}
                  icon={<UserOutlined />}
                />
              }
              content="vTalent Is The Only 3rd Party That I Trust To Send Bulk CVs. I Have Joined Recruitery Since 2018 And Until Now, All CVs Are Strictly Managed And Absolutely Confidential."
            />
          </Col>
        </Row>
      </Space>
    </Space>
  );
};

export default Feedback;
