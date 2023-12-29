const API_BASE = 'https://dummyjson.com';

export const getMessages = async () => {
   const response = await fetch(`${API_BASE}/comments`);
   return response.json();
}