import courses from "~/server/courseData"
import {findCourse} from "~/server/helper";

export default defineEventHandler((event) => {
    const { courseSlug } = event.context.params

    return findCourse(courseSlug)
})
