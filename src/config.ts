const config = {
  apiUrl: import.meta.env.PROD 
    ? 'https://your-backend-domain.railway.app/api'
    : 'http://localhost:3001/api'
};

export default config;