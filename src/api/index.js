import api from "./axiosInstance"

export const AtualizarConvidado = (id, convidado) => api.put(`/convidado/${id}`, convidado);
export const EncConvidadoPorId = id => api.get(`/convidado/${id}`);
export const ListaConvidados = () => api.get(`/convidado`);
export const InserirConvidado = (convidado) => api.post(`/convidado`, convidado);

export const AtualizarPresente = (id, presente) => api.put(`/presente/${id}`, presente);
export const InserirPresente = (presente) => api.post(`/presente`, presente);
export const RemovePresente = (id) => api.delete(`/presente/${id}`);
export const ListarPresentes = () => api.get(`/presente`);

const apis = {
  AtualizarConvidado,
  EncConvidadoPorId,
  ListaConvidados,
  AtualizarPresente,
  ListarPresentes,
  InserirPresente,
  RemovePresente
}

export default apis;