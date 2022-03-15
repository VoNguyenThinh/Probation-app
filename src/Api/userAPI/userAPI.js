import axiosClient from "../setup/aixosClient";

const userAPI = {
  getAll: () => {
    const url = "/users";
    return axiosClient.get(url);
  },
  getByID: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  createUser: (body) => {
    const url = `/users`;
    return axiosClient.post(url, body);
  },
  editUser: (id, body) => {
    const url = `/users/${id}`;
    return axiosClient.put(url, body);
  },
  deleteUser: (id) => {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },
};

export default userAPI;
