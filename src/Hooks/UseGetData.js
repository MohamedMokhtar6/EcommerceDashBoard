import baseUrl from "../Api/BaseUrl";
const useGetData = async (url, parms) => {
    const res = await baseUrl.get(url, parms)
    return res.data

}
export default useGetData