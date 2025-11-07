export interface HotelDto {
  id: string;
  fields: {
    name: string;
    city: string;
    price: number;
    description?: string;
    utilities?: string;
  };
}
