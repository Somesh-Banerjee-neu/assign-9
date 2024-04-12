import axios from "axios";

const baseURL: string | undefined = import.meta.env.VITE_APP_BASE_URL; // Adjust this URL to match your actual API endpoint
console.log(baseURL);
export const getAllMeetingNotes = async () => {
  try {
    const response = await axios.get(`${baseURL}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const filterMeetingNotes = async (keyword: string) => {
  try {
    const response = await axios.get(`${baseURL}/filter`, {
      params: { keyword },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addMeetingNote = async (noteData: any) => {
  // Replace 'any' with a proper type
  try {
    const response = await axios.post(`${baseURL}/`, noteData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMeetingNote = async (id: string, noteData: any) => {
  // Replace 'any' with a proper type
  try {
    const response = await axios.patch(`${baseURL}/${id}`, noteData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMeetingNote = async (id: string) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
