import courses from "~/server/courseData"
import {findCourse} from "~/server/helper";

export default defineEventHandler((event) => {
    const {courseSlug } = event.context.params

    const course =  findCourse(courseSlug)

   if(course){
       return course.chapters
   } else {
       return []
   }
})
