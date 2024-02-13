import axios from 'axios';
// import {  useParams } from "react-router-dom";

const deleteContactHandler = (id) => {
    // const { id } = useParams();
    
  return axios.post(`http://localhost/ARAKNERDLIB/contact/delete`, {id:id})
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export default deleteContactHandler;
