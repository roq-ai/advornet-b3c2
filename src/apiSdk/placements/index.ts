import axios from 'axios';
import queryString from 'query-string';
import { PlacementInterface, PlacementGetQueryInterface } from 'interfaces/placement';
import { GetQueryInterface } from '../../interfaces';

export const getPlacements = async (query?: PlacementGetQueryInterface) => {
  const response = await axios.get(`/api/placements${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPlacement = async (placement: PlacementInterface) => {
  const response = await axios.post('/api/placements', placement);
  return response.data;
};

export const updatePlacementById = async (id: string, placement: PlacementInterface) => {
  const response = await axios.put(`/api/placements/${id}`, placement);
  return response.data;
};

export const getPlacementById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/placements/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePlacementById = async (id: string) => {
  const response = await axios.delete(`/api/placements/${id}`);
  return response.data;
};
