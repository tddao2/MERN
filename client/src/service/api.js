import axios from 'axios';

export const addUser = async (data) => {
    try {
        return await axios.post(`http://localhost:8000/api/user`, data);
    } catch (error) {
        console.log('Error occured while calling addUser API', error);
    }
};

export const getUsers = async () => {
    try {
        return await axios.get(`http://localhost:8000/api/user/all`);
    } catch (error) {
        console.log('Error occured while calling getUsers API', error);
    }
};

export const getUser = async (id) => {
    try {
        return await axios.get(`http://localhost:8000/api/user/${id}`);
    } catch (error) {
        console.log('Error occured while calling getUser API', error);
    }
};

export const editUser = async (user, id) => {
    try {
        return await axios.put(`http://localhost:8000/api/user/${id}`, user);
    } catch (error) {
        console.log('Error occured while calling editUser API', error);
    }
};

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`http://localhost:8000/api/user/${id}`);
    } catch (error) {
        console.log('Error occured while calling deleteUser API', error);
    }
};
