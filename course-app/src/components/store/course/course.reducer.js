import { COURSE_ACTION_TYPES } from "./course.type";

export const COURSE_INITIAL_STATE={
    courses: [],
    isCousesShow: false,
}

export const courseReducer = (state=COURSE_INITIAL_STATE, action={}) => {

    const { type, payload } = action;
    switch (type) {
        case COURSE_ACTION_TYPES.SET_COURSE_ITEMS:
          return {
            ...state,
            cartItems:payload
          };
        case COURSE_ACTION_TYPES.SET_IS_COURSE_SHOW:
          return {
            ...state,
            isCourseShow: payload,
          };
    
        default:
          return state
      }
    };