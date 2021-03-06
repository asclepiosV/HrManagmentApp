import axios from "axios";
import authHeader from "./auth-header";

const API_USER = "http://localhost:8080/api/"


const getAllUser = () => {
  return axios.get(API_USER + "user", {headers: authHeader()})
}


const getUserById = (id) => {
  return axios.get(API_USER + "user/" + id, {headers: authHeader()})
}


const deleteUserById = (id) =>{
  return axios.delete(API_USER + "user/" + id, {headers: authHeader()})

}


const editUserById = (id, data) => {
  return axios.put(API_USER + "user/" + id, data,{headers: authHeader()})
}



const UserService = {
  getAllUser,
  deleteUserById,
  editUserById,
  getUserById
};

export default UserService;
