import axios from 'axios';

export const api = axios.create({
	// Endereço IP (EXPO/ANDROID)
	baseURL: 'http://192.168.0.2:3333'
});