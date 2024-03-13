import {
  DollarOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  Card,
  Col,
  Divider,
  Flex,
  Image,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import { Job } from "types";
import numeral from "numeral";
import IconText from "components/IconText";

const { Title } = Typography;

const JobDetail = ({ job }: { job: Job }) => {
  const { salary } = job;
  const salaryFrom = numeral(salary.from).format("0a");
  const salaryTo = numeral(salary.to).format("0a");
  return (
    <Card
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
        width: "500px",
      }}
    >
      <Space>
        <Space>
          <Image
            src="/company.svg"
            style={{ maxWidth: "100px" }}
            preview={false}
          ></Image>
        </Space>
        <Space direction="vertical" style={{ marginLeft: "2em" }}>
          <Flex vertical gap={8}>
            <Row>
              <Title
                level={5}
                style={{ marginTop: 0, fontSize: "24px", fontWeight: "normal" }}
              >
                {job.title}
              </Title>
            </Row>
            <Row>
              <IconText icon={<HomeOutlined />} text={job.company} />
            </Row>
            <Row gutter={8}>
              <Col>
                <IconText icon={<GlobalOutlined />} text={job.location} />
              </Col>
              <Divider
                type="vertical"
                style={{ height: "20px", borderWidth: "2px", color: "#777777" }}
              />
              <Col>
                <IconText
                  icon={<DollarOutlined />}
                  text={`${salaryFrom} - ${salaryTo} ${job.salary.currency} / ${job.salary.period}`}
                />
              </Col>
            </Row>
            <Row>
              <IconText icon={<EnvironmentOutlined />} text={job.workType} />
            </Row>
            <Row>
              {job.skills.map((skill, index) => (
                <Tag
                  key={index}
                  style={{
                    lineHeight: "32px",
                    borderRadius: "16px",
                    border: "1px solid #D9D9D9",
                    marginBottom: "8px",
                  }}
                >
                  {skill}
                </Tag>
              ))}
            </Row>
          </Flex>
        </Space>
      </Space>
    </Card>
  );
};

export default JobDetail;
