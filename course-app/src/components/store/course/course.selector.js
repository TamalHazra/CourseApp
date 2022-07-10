import { createSelector } from "reselect";

const selectCourseReducer=state => state.courseReduser

export const selectCourseItems = createSelector(
    [selectCourseReducer],
    (course) => course.courseTtems
)

export const selectIsCourseShow = createSelector(
    [selectCourseReducer],
    (course) => course.isCourseShow
)

