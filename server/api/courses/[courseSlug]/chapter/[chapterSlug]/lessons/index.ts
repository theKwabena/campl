import courses from "~/server/courseData"

export default defineEventHandler((event) => {
    const {courseID, chapterID, lessonID} = event.context.params

    const course = courses.courses.find((course)=>(
        course.id == courseID
    ))


    const chapter = course?.chapters.find((chapter)=>(
        chapter.number = chapterID
    ))


    if(chapter){
        return chapter.lessons
    } else {
        return []
    }
})
