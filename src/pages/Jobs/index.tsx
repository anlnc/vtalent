import { useEffect, useMemo, useState } from "react";
import {
  EnvironmentOutlined,
  GlobalOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Flex, Input, Row, Select, Space } from "antd";
import chunk from "lodash/chunk";
import { useFetchJobs } from "hooks/jobs";
import { Job, WorkType } from "types";
import JobDetail from "./JobDetail";
import NoJobFound from "./NoJobFound";
import { WORK_TYPE_OPTIONS, LOC_OPTIONS } from "./constant";
import IconText from "components/IconText";

const JobList: React.FC = () => {
  const { data: openJobs = [] } = useFetchJobs();
  const [jobs, setJobs] = useState<Job[]>(openJobs);

  // 2 is the number of jobs per row
  useEffect(() => setJobs(openJobs), [openJobs]);
  const jobChunks = useMemo(() => chunk(jobs, 2), [jobs]);

  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", display: "flex", backgroundColor: "white" }}
    >
      <Space
        style={{
          margin: "2em",
        }}
      >
        <Card
          style={{
            background: "linear-gradient(180deg, #61C448 0%, #91D567 100%)",
            borderRadius: "32px",
            boxShadow: "0px 14px 14px 0px #91D5674D",
            minWidth: "1024px",
          }}
        >
          <Flex vertical gap={24}>
            <Row>
              <Card
                style={{
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "49px",
                }}
                styles={{ body: { padding: "0.8em 1em" } }}
              >
                <Row style={{ justifyContent: "space-between" }}>
                  <Col span={20}>
                    <Input
                      size="large"
                      variant="borderless"
                      placeholder="What position you are looking for?"
                      prefix={<SearchOutlined />}
                    />
                  </Col>
                  <Col>
                    <Button
                      size="large"
                      shape="round"
                      type="primary"
                      style={{ backgroundColor: "#23A440" }}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Row>
            <Row style={{ justifyContent: "space-between" }} gutter={16}>
              <Col span={12}>
                <Card
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "49px",
                  }}
                  styles={{ body: { padding: "0.5em 0.5em" } }}
                >
                  <Select
                    size="small"
                    style={{ width: "100%" }}
                    variant="borderless"
                    mode="tags"
                    options={LOC_OPTIONS}
                    onChange={(selectedValues: string[]) => {
                      const isAllSelected = !selectedValues.length;
                      // @TODO: handle normalize location value to make sure job with location "Hanoi" and "ha noi" are the same
                      const filteredJobs = isAllSelected
                        ? [...openJobs]
                        : openJobs.filter((job) =>
                            selectedValues.includes(job.location.toLowerCase())
                          );
                      setJobs(filteredJobs);
                    }}
                    placeholder={
                      <IconText icon={<GlobalOutlined />} text="Location" />
                    }
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "49px",
                  }}
                  styles={{ body: { padding: "0.5em 0.5em" } }}
                >
                  <Select
                    size="small"
                    style={{ width: "100%" }}
                    variant="borderless"
                    mode="multiple"
                    options={WORK_TYPE_OPTIONS}
                    onChange={(selectedValues: WorkType[]) => {
                      const isAllSelected = !selectedValues.length;
                      const filteredJobs = isAllSelected
                        ? [...openJobs]
                        : openJobs.filter((job) =>
                            selectedValues.includes(job.workType)
                          );
                      setJobs(filteredJobs);
                    }}
                    placeholder={
                      <IconText
                        icon={<EnvironmentOutlined />}
                        text="Work type"
                      />
                    }
                  />
                </Card>
              </Col>
            </Row>
          </Flex>
        </Card>
      </Space>
      {!jobs.length ? (
        <NoJobFound />
      ) : (
        <Space>
          <Card
            style={{
              marginBottom: "2em",
              backgroundColor: "#F5F5F5",
              minWidth: "1024px",
            }}
          >
            {jobChunks.map((jobChunk, index) => (
              <Row key={index} gutter={32}>
                {jobChunk.map((job, jobIndex) => (
                  <Col key={jobIndex} style={{ marginBottom: "32px" }}>
                    <JobDetail job={job} />
                  </Col>
                ))}
              </Row>
            ))}
          </Card>
        </Space>
      )}
    </Space>
  );
};

export default JobList;
