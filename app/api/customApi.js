import axios from 'axios';

const API_BASE_URL = 'http://13.235.173.222:3000/api/v1';

// Function to signup
export const signupApi = async ({name, email, password}) => {
  try {
    const response = await axios.post(`/api/v1/auth/signup`, {
      name,
      email,
      password
    }, {
      headers: {
        'api-key': 'Uva2/sLKA0mDpF3ziBkR7zEab5eGHi9AN62v2oHYe6w='
      }
    });

    return response;
  } catch (error) {
    throw error;
  }
};

// Function to login
export const loginApi = async ({email, password}) => {
  try {
    const response = await axios.post(`/api/v1/auth/login`,
    {
      email,
      password
    }
    ,
    {
      headers: {
        'api-key': 'Uva2/sLKA0mDpF3ziBkR7zEab5eGHi9AN62v2oHYe6w='

      },  
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get all products
export const getAllProductsApi = async () => {
  try {
    const response = await axios.get(`/api/v1/product/allproducts`, {
      headers: {
        'api-key': 'Uva2/sLKA0mDpF3ziBkR7zEab5eGHi9AN62v2oHYe6w=',
        'token': localStorage.getItem("token")
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
