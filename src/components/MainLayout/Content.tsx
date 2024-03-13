import { PropsWithChildren } from "react";
import { Layout } from "antd";

export default function Content({ children }: PropsWithChildren) {
  return (
    <Layout.Content
      style={{
        // height: "calc(100vh - 110px)",
        overflow: "scroll",
        backgroundColor: "white",
      }}
    >
      {children}
    </Layout.Content>
  );
}
