import api from "./axiosInstance"

export const AtualizarConvidado = (id, convidado) => api.put(`/convidado/${id}`, convidado);
export const EncConvidadoPorId = id => api.get(`/convidado/${id}`);
export const AtualizarPresente = (id, presente) => api.put(`/presente/${id}`, presente);
export const ListarPresentes = () => api.get(`/presente`);

const apis = {
  AtualizarConvidado,
  EncConvidadoPorId,
  AtualizarPresente,
  ListarPresentes
}

export default apis;