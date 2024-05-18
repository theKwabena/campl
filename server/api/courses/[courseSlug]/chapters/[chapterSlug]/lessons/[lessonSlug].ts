
import {findLesson} from "~/server/helper";
import {Lesson} from "~/types/course";

export default defineEventHandler((event): Lesson => {
    // @ts-ignore
    const {courseSlug, chapterSlug, lessonSlug} = event.context.params
    return findLesson(courseSlug,chapterSlug,lessonSlug)
})
