import {findChapter} from "~/server/helper";
import {Chapter} from "~/types/course";

export default defineEventHandler(async (event) : Promise<Chapter> => {
    // @ts-ignore
    const {courseSlug, chapterSlug} = event.context.params
    return await findChapter(courseSlug,chapterSlug)
})
