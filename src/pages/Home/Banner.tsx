import React from "react";
import { Typography } from "antd";

const Banner = () => {
  return (
    <>
      <Typography.Title level={1} style={{ marginBottom: "0.1em" }}>
        Need It Jobs <br />
        Earn <span style={{ color: "#23A440" }}>vTalent</span>
      </Typography.Title>
      <Typography.Text type="secondary">
        Find Jobs, Employment & Career Opportunity
      </Typography.Text>
    </>
  );
};
export default React.memo(Banner);
