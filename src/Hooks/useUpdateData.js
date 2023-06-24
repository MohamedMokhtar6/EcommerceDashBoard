import baseUrl from "../Api/BaseUrl";
const useUpdateDataWithImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, parmas, config);
  console.log(res.status);
  return res;
};

const useUpdateData = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.put(url, parmas, config);
  console.log(res.status);
  return res;
};

export { useUpdateDataWithImage, useUpdateData };
