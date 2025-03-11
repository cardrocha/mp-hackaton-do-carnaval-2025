export interface Bloquinho {
  id: number;
  title: string;
  description: string;
  date_time: string;
  address: string;
  complete_address: string;
  city: string;
  neighborhood: string;
  price: string; 
  event_url: string;
}

export interface PageState  {
  error: boolean;
  message?: string;
  blocos: Bloquinho[];
  page: number;
};

export interface BlocoType {
  blocos: Bloquinho[]
}

export interface FeedListProps {
  blocos: Bloquinho[];
  onUpdateBlocos: (formData: FormData) => void;
}