export interface ServiceItem {
  id: string;
  name: string;
  category: 'corte-barba' | 'acabamento' | 'quimica';
  categoryLabel: string;
  price: string;
  isStartingPrice?: boolean;
  description: string;
  duration: string;
}

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  tag: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  timeAgo: string;
  comment: string;
}
