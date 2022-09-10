import api from "./axiosInstance";

export const AtualizarConvidado = (id, data) => api.put(`/convidado/${id}`, data);
export const InserirConvidado = (data) => api.post(`/convidado`, data);
export const RemoveConvidado = (id) => api.delete(`/convidado/${id}`);
export const ListaConvidados = () => api.get(`/convidado`);
export const EncConvidadoPorId = (id) => api.get(`/convidado/${id}`);

export const AtualizarPresente = (id, data) => api.put(`/presente/${id}`, data);
export const InserirPresente = (data) => api.post(`/presente`, data);
export const RemovePresente = (id) => api.delete(`/presente/${id}`);
export const ListarPresentes = () => api.get(`/presente`);

const apis = {
  AtualizarConvidado,
  InserirConvidado,
  RemoveConvidado,
  ListaConvidados,
  EncConvidadoPorId,
  AtualizarPresente,
  InserirPresente,
  RemovePresente,
  ListarPresentes,
};

export default apis;
