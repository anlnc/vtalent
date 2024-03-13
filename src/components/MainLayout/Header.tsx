import { PropsWithChildren } from "react";
import { Layout } from "antd";

export default function Header({ children }: PropsWithChildren) {
  return <Layout.Header style={{ height: "4em" }}>{children}</Layout.Header>;
}
