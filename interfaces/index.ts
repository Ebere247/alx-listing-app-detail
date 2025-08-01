export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: string;
  reviews: Review[];
}

export interface Property {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}
