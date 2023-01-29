// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";

const initialState = {
  allCourses: {
    loading: false,
    error: false,
    courses: [],
  },
  singleCourse: {
    loading: false,
    error: false,
    course: {},
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GETCOURSE_REQUEST:
      return {
        ...state,
        Allcourses: {
          loading: true,
          error: false,
          data: state.Allcourses.data,
        },
      };
    case types.GETCOURSE_SUCCESS:
      return {
        ...state,
        Allcourses: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GETCOURSE_FAILURE:
      return {
        ...state,
        Allcourses: {
          loading: false,
          error: true,
          data: state.Allcourses.data,
        },
      };
    case types.GETSINGLECOURSE_REQUEST:
      return {
        ...state,
        Singlecourse: {
          loading: true,
          error: false,
          data: state.Singlecourse.data,
        },
      };
    case types.GETSINGLECOURSE_SUCCESS:
      return {
        ...state,
        Singlecourse: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GETSINGLECOURSE_FAILURE:
      return {
        ...state,
        Singlecourse: {
          loading: false,
          error: true,
          data: state.Singlecourse.data,
        },
      };
    default:
      return state;
  }
};

export { reducer };
