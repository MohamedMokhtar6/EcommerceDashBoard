import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import { LOGIN_USER } from "../type";

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/Common/Student/Login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};
