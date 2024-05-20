
import {findCourse} from "~/server/helper";
import {Chapter} from "~/types/course";

export default defineEventHandler(async (event) => {
    // @ts-ignore
    const {courseSlug } = event.context.params
    const course =  await findCourse(courseSlug)

    return course.chapters
})
