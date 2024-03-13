import { PropsWithChildren } from "react";
import { Layout } from "antd";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>{children}</Content>
      <Footer>Copyright © 2018-2022 vTalent, All Rights Reserved.</Footer>
    </Layout>
  );
}
