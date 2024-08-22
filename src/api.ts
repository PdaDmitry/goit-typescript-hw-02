import axios from 'axios';
import { Image } from './components/ImageGallery/ImageGallery.types';

interface ApiResponse {
  results: Image[];
  total: number;
  per_page: number;
}

export default async function fetchPhotos(query: string, page: number): Promise<ApiResponse> {
  const ACCESS_KEY = '6nKFTVbV1CJGv4nIC51WkGEbMVOjX878ZeUV0kluA-Y';
  const per_page = 12;

  const response = await axios.get<ApiResponse>('https://api.unsplash.com/search/photos/', {
    params: {
      client_id: ACCESS_KEY,
      query,
      per_page,
      orientation: 'landscape',
      page,
    },
  });
  const results = response.data.results;
  const total = response.data.total;

  // const maxPages = Math.ceil(response.data.total / per_page);

  // return { results, maxPages };
  return { results, total, per_page };
}
