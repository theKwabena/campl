import courses from "~/server/courseData"

export default defineEventHandler((event) => {
    const {courseSlug, chapterSlug, lessonSlug} = event.context.params

    const course = courses.courses.find((course)=>(
        course.id == courseID
    ))


    const chapter = course?.chapters.find((chapter)=>(
        chapter.number = chapterID
    ))

    const lesson = chapter.lessons.find((lesson)=>(
        lesson.slug == lessonID
    ))
    if(chapter){
        return chapter.lessons
    } else {
        return []
    }
})
