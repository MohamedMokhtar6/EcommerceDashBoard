import {
  Get_Error,
  Create_Course,
  Get_All_Courses,
  Get_One_Course,
  Delete_Course,
} from "../type";

const inital = {
  Courses: [],
  oneCourse: [],
  deleteCourse: [],
  loading: true,
};

const CourceReducer = (state = inital, action) => {
  switch (action.type) {
    case Create_Course:
      return {
        Courses: action.payload,
        loading: false,
      };
    case Get_All_Courses:
      return {
        ...state,
        Courses: action.payload,
        loading: false,
      };
    case Get_One_Course:
      return {
        ...state,
        oneCourse: action.payload,
        loading: false,
      };
    case Delete_Course:
      return {
        deleteCourse: action.payload,
        loading: false,
      };
    case Get_Error:
      return {
        loading: true,
        Courses: action.payload,
      };

    default:
      return state;
  }
};

export default CourceReducer;
