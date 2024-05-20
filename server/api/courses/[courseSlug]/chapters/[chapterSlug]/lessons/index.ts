
import {findChapter} from "~/server/helper.local";
import {Lesson} from "~/types/course";

export default defineEventHandler((event) : Lesson[] => {
    // @ts-ignore
    const {courseSlug, chapterSlug} = event.context.params

    return findChapter(courseSlug,chapterSlug).lessons

})
