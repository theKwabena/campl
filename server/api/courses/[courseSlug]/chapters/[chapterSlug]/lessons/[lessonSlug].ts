
import {findLesson} from "~/server/helper";
import {Lesson} from "~/types/course";

export default defineEventHandler(async (event): Promise<Lesson> => {
    // @ts-ignore
    const {courseSlug, chapterSlug, lessonSlug} = event.context.params
    return await findLesson(courseSlug,chapterSlug,lessonSlug)
})
