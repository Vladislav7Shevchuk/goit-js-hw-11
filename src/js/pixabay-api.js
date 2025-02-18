import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export function fetchImage(imgInfo) {
  return axios.get(BASE_URL, {
    params: {
      key: '48819918-ba79d398f7b55c76d8c436738',
      q: imgInfo,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
