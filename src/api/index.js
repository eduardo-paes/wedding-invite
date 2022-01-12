import api from "./axiosInstance"

export const AtualizarConvidado = (id, convidado) => api.put(`/convidado/${id}`, convidado);
export const EncConvidadoPorId = id => api.get(`/convidado/${id}`);

const apis = {
  AtualizarConvidado,
  EncConvidadoPorId,
}

export default apis;