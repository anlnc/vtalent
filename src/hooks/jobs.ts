import { useQuery } from "@tanstack/react-query";
import { Job } from "types";

const ALL_JOBS: Job[] = [
  {
    id: 1,
    title: "Test Manager",
    company: "Company name",
    location: "Hanoi",
    workType: "Full-time",
    salary: {
      from: 50000,
      to: 150000,
      currency: "USD",
      period: "Year",
    },
    skills: [
      "Cloud",
      "Testing",
      "Project Manager",
      "Project Manager",
      "Project Manager",
      "Cloud",
    ],
  },
  {
    id: 2,
    title: "Test Manager",
    company: "Company name",
    location: "Hochiminh",
    workType: "Part-time",
    salary: {
      from: 50000,
      to: 150000,
      currency: "USD",
      period: "Year",
    },
    skills: [
      "Cloud",
      "Testing",
      "Project Manager",
      "Project Manager",
      "Project Manager",
      "Cloud",
    ],
  },
  {
    id: 3,
    title: "Test Manager",
    company: "Company name",
    location: "Hanoi",
    workType: "Remote",
    salary: {
      from: 50000,
      to: 150000,
      currency: "USD",
      period: "Year",
    },
    skills: [
      "Cloud",
      "Testing",
      "Project Manager",
      "Project Manager",
      "Project Manager",
      "Cloud",
    ],
  },
  {
    id: 4,
    title: "Test Manager",
    company: "Company name",
    location: "Hanoi",
    workType: "Hybrid",
    salary: {
      from: 50000,
      to: 150000,
      currency: "USD",
      period: "Year",
    },
    skills: [
      "Cloud",
      "Testing",
      "Project Manager",
      "Project Manager",
      "Project Manager",
      "Cloud",
    ],
  },
  {
    id: 5,
    title: "Test Manager",
    company: "Company name",
    location: "Hochiminh",
    workType: "Full-time",
    salary: {
      from: 50000,
      to: 150000,
      currency: "USD",
      period: "Year",
    },
    skills: [
      "Cloud",
      "Testing",
      "Project Manager",
      "Project Manager",
      "Project Manager",
      "Cloud",
    ],
  },
];

export const useFetchJobs = () =>
  useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: () => new Promise((resolve) => resolve(ALL_JOBS)),
  });
