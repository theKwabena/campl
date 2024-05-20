
import {findCourse} from "~/server/helper.local";
import {Course, CourseMeta} from "~/types/course";

export default defineEventHandler((event) : Course | CourseMeta=> {
    // @ts-ignore
    const { courseSlug } = event.context.params
    const {meta } = getQuery(event)

    if(meta){
        return findCourse(courseSlug,meta as boolean)
    }
    return findCourse(courseSlug)
})
