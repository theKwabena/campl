import courses from "~/server/courseData"

export default defineEventHandler((event) => {
    const { courseID } = event.context.params

    return courses.courses.find((course)=>{
        return course.id = courseID
    })

})
