import { memo } from "react";
import { Image, Space, Typography } from "antd";

const NoJobFound = () => {
  return (
    <Space direction="vertical" align="center">
      <Typography.Title level={1} style={{ marginBottom: "0.1em" }}>
        Oooh oh, end search result !
      </Typography.Title>
      <Typography.Text>
        We are working to get your required jobs.
      </Typography.Text>
      <Image
        style={{ marginTop: "2em" }}
        src="./no-job-found.svg"
        preview={false}
      />
    </Space>
  );
};

export default memo(NoJobFound);
