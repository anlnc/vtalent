import { memo } from "react";
import { Space, Typography } from "antd";

interface IconTextProps {
  icon: React.ReactElement;
  text: string;
}

const IconText = ({ icon, text }: IconTextProps) => (
  <Space>
    {icon}
    <Typography.Text>{text}</Typography.Text>
  </Space>
);

export default memo(IconText);
