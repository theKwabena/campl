import courses from "~/server/courseData"
import {findChapter, findCourse} from "~/server/helper";
import {Chapter} from "~/types/course";

export default defineEventHandler((event) : Chapter => {
    // @ts-ignore
    const {courseSlug, chapterSlug} = event.context.params
    return findChapter(courseSlug,chapterSlug)
})
