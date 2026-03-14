import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

// Auth
export const login = (data: { email: string; password: string }) =>
  api.post('/auth/login', data);
export const signup = (data: { email: string; password: string; name: string; role: string }) =>
  api.post('/auth/signup', data);

// Professionals
export const getProfessionals = (params?: Record<string, string | number>) =>
  api.get('/professionals', { params }).then(r => r.data);
export const getProfessional = (id: string) =>
  api.get(`/professionals/${id}`).then(r => r.data);

// Jobs
export const getJobs = (params?: Record<string, string>) =>
  api.get('/jobs', { params }).then(r => r.data);
export const createJob = (data: Record<string, unknown>) =>
  api.post('/jobs', data).then(r => r.data);

// Bookings
export const getBookings = () => api.get('/bookings').then(r => r.data);
export const createBooking = (data: Record<string, unknown>) =>
  api.post('/bookings', data).then(r => r.data);

// Reviews
export const getReviews = (professionalId: string) =>
  api.get(`/reviews/${professionalId}`).then(r => r.data);

// Notifications
export const getNotifications = () => api.get('/notifications').then(r => r.data);

// Categories
export const getCategories = () => api.get('/categories').then(r => r.data);

// Match
export const getMatches = (jobId: string) =>
  api.get(`/jobs/${jobId}/matches`).then(r => r.data);

// Dashboard stats
export const getDashboardStats = (role: string) =>
  api.get(`/dashboard/${role}/stats`).then(r => r.data);

export default api;
