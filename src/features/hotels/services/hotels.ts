import type { HotelDto } from '../contracts/hotel.dto';

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const fetchHotels = async () => {
  try {
    const response = await fetch(`${API_URL}/hotels`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const data = await response.json();

    return data.records as HotelDto[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchHotel = async (id: string | undefined) => {
  try {
    if (!id) {
      throw new Error('Id is required');
    }
    const response = await fetch(`${API_URL}/hotels/${id}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const data = await response.json();

    return data as HotelDto;
  } catch (error) {
    console.error(error);
    return [];
  }
};
