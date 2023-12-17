const DEFAULT_URL = "http://localhost:3000/api/";
const BASE_URL = process.env.REACT_APP_BASE_URL || DEFAULT_URL;
export const loginUrl = `${BASE_URL}v1/login`;