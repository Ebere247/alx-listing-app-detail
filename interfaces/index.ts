// interfaces/index.ts

export interface CardProps {
  title: string;
  categories: string[];
  rating: number;
  price: string;
  features: Features;
  location: string;
  imageUrl: string;
}
export interface Features {
  bed: number;
  bath: number;
  persons: number;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}
