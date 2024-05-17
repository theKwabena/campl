import courses from "~/server/courseData"
import {findChapter, findCourse} from "~/server/helper";

export default defineEventHandler((event) => {
    const {courseSlug, chapterSlug} = event.context.params

    const course = findCourse(courseSlug)


    const chapter = findChapter(courseSlug,chapterSlug)


    if(chapter){
        return chapter.lessons
    } else {
        return []
    }
})
