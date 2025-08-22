import { useDispatch } from "react-redux";
import { fetchCategoriesSuccess, fetchCategoriesFailure } from "../redux/categoriesSlice";
import { fetchCategories } from "../api/q2_api";

export default function useFetchCategories() {
  const dispatch = useDispatch();

  const fetchCategoriesHook = async () => {
    try {
        const data = await fetchCategories(); // calling fetch from 
        dispatch(fetchCategoriesSuccess(data));
    } catch (err) {
        dispatch(fetchCategoriesFailure(err.message));
    }
  };

  return fetchCategoriesHook;
}