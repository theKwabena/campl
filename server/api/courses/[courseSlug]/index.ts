import courses from "~/server/courseData"
import {findCourse} from "~/server/helper";

export default defineEventHandler((event) => {
    const { courseID } = event.context.params

    return findCourse(courseID)
})
