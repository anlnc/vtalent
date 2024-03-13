export type WorkType = "Full-time" | "Part-time" | "Remote" | "Hybrid";

export type WorkTypeOption = {
  label: WorkType;
  value: WorkType;
};

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  workType: WorkType;
  salary: {
    from: number;
    to: number;
    currency: string;
    period: string;
  };
  skills: string[];
};
