
import {findCourse} from "~/server/helper";
import {Course, CourseMeta} from "~/types/course";

export default defineEventHandler( async (event) => {
    // @ts-ignore
    const { courseSlug } = event.context.params
    const {meta } = getQuery(event)

    if(meta){
        return await findCourse(courseSlug,meta as boolean)
    }
    return await findCourse(courseSlug)
})
