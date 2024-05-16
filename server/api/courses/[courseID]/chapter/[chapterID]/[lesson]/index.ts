import courses from "~/server/courseData"

export default defineEventHandler((event) => {
    const courseID  = getRouterParam(event, 'courseID')

    return courses.courses.find((course)=>{
        return course.id  == courseID
    })
})
