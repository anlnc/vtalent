import { PropsWithChildren } from "react";
import { Divider, Layout } from "antd";

export default function Footer({ children }: PropsWithChildren) {
  return (
    <Layout.Footer
      style={{
        background:
          "linear-gradient(272.88deg, #61C448 16.97%, #91D567 79.33%)",
      }}
    >
      <Divider style={{ margin: "0.5em" }} />
      {children}
    </Layout.Footer>
  );
}
