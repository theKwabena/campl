import courses from "~/server/courseData"

export default defineEventHandler((event) => {
    const {courseID } = event.context.params

    const course = courses.courses.find((course)=>(
        course.id == courseID
    ))

   if(course){
       return course.chapters
   } else {
       return []
   }
})
