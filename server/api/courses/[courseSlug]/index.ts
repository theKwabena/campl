import courses from "~/server/courseData"
import {findCourse} from "~/server/helper";
import {Course} from "~/types/course";

export default defineEventHandler((event) : Course => {
    // @ts-ignore
    const { courseSlug } = event.context.params

    return findCourse(courseSlug)
})
