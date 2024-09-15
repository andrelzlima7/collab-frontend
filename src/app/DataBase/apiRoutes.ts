import dotenv from "dotenv";

dotenv.config();

const API_URL = "http://localhost:8000";
const apiRouteProdutos = `${API_URL}/produtos`;
const apiRouteGrupos = `${API_URL}/grupos`;

export { apiRouteProdutos, apiRouteGrupos };
