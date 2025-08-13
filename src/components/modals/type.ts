
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


// type.ts
export interface JobCardProps {
  title: string;
  description?: string;
  tags?: string[];
  date?: string;
  time?: string;
  location?: string;
  tickets: number;
  status?: string;
}


export interface Messages {
  id: number;
  sender?: "me" | "them"; 
  type?: "text" | "offer"; 
  content: string; 
  time: string; 
  offerTitle?: string;
  offerDescription?: string;
  img?: string;
}

export interface Chats {
  id: number;
  name: string; 
  content: string;
  time: string; 
  img?: string;
  messages: Messages[]; 
}

