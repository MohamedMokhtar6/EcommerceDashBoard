import { Get_Error } from "../type";
import useDeleteData from "../../Hooks/useDeleteData";
// import { useInsertData } from "../../Hooks/useInsertData";
import useGetData from "../../Hooks/UseGetData";
import { useInsertData } from "../../Hooks/useInsertData";

// export const getAdmins = () => async (dispatch) => {
//   try {
//     const respose = await useGetData("Dashboard/Admin/GetAdmins");

//     dispatch({
//       type: GET_ALL_Admins,
//       payload: respose,
//     });
//   } catch (e) {
//     dispatch({
//       type: Get_Error,
//       payload: "error" + e,
//     });
//   }
// };

// export const deleteUser = (id) => async (dispatch) => {
//   try {
//     const respose = await useDeleteData(
//       `Common/Student/DeleteStudent?id=${id}`
//     );

//     dispatch({
//       type: DELETE_USER,
//       payload: respose,
//     });
//   } catch (e) {
//     dispatch({
//       type: Get_Error,
//       payload: "error" + e,
//     });
//   }
// };
