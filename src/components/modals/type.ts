
export type Job = {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  location: string;
  posted: string;
  highlighted?: boolean;
};

export type JobDetailModalProps = {
  selectedJob: Job | null;
  onClose: () => void;
  isOpen: boolean;
};

