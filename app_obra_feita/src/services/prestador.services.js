import API from './webapi.services';
import {BASE_URL} from './urls';

export const getPrestador = async () => {
  try{
    return await API.get(`${BASE_URL}/660/prestador`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const insertPrestador = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/prestador`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const updatePrestador = async (param) => {
  try{
    return await API.put(`${BASE_URL}/660/prestador/${param.id}`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const deletePrestador = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/660/prestador/${id}`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}