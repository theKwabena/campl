import courses from "~/server/courseData"
import {findChapter, findCourse, findLesson} from "~/server/helper";

export default defineEventHandler((event) => {
    const {courseSlug, chapterSlug, lessonSlug} = event.context.params

    const course = findCourse(courseSlug)


    const chapter = findChapter(courseSlug,chapterSlug)

    const lesson = findLesson(courseSlug,chapterSlug,lessonSlug)

    if(chapter){
        return chapter.lessons
    } else {
        return []
    }
})
