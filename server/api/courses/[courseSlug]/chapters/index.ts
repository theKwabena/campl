
import {findCourse} from "~/server/helper";


export default defineEventHandler(async (event) => {
    // @ts-ignore
    const {courseSlug } = event.context.params
    const course =  await findCourse(courseSlug)

    return course.chapters
})
