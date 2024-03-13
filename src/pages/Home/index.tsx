import { Space } from "antd";
import Banner from "./Banner";
import Feedback from "./Feedback";
import Insights from "./Insights";
import SearchInput from "./SearchInput";
import Companies from "./Companies";

export default function Home() {
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", display: "flex", backgroundColor: "white" }}
    >
      <Space align="center" direction="vertical">
        <Banner />
      </Space>

      <Space style={{ margin: "2em" }}>
        <SearchInput />
      </Space>

      <Space>
        <Insights />
      </Space>

      <Space>
        <Feedback />
      </Space>

      <Space style={{ margin: "2em" }}>
        <Companies />
      </Space>
    </Space>
  );
}
