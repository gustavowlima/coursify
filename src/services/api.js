import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';

const api = axios.create({
  baseURL: "https://blog.coursify.me/wp-json/wp/v2"
})

export default api


