import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pagesize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pagesize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`unfollow/${userId}`, {});
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};

export const getUsers2 = (currentPage = 1, pagesize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pagesize}`)
    .then((response) => response.data);
};
