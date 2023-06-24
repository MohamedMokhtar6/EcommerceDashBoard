import baseUrl from "../Api/BaseUrl";
const useDeleteData = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.delete(url, parmas, config);
  return res.data;
};

export default useDeleteData;
