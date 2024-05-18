import courses from "~/server/courseData"
import {findCourse} from "~/server/helper";
import {Chapter} from "~/types/course";

export default defineEventHandler((event) : Chapter[] => {
    // @ts-ignore
    const {courseSlug } = event.context.params
    return findCourse(courseSlug).chapters
})
