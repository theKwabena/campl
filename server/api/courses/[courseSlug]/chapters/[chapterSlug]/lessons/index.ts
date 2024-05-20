
import {findChapter} from "~/server/helper";
import {Lesson} from "~/types/course";

export default defineEventHandler(async (event) : Promise<Lesson[]> => {
    // @ts-ignore
    const {courseSlug, chapterSlug} = event.context.params

    const chapter =  await findChapter(courseSlug,chapterSlug)
    return chapter.lessons

})
