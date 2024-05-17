import courses from "~/server/courseData"
import {findCourse} from "~/server/helper";

export default defineEventHandler((event) => {
    const {courseID } = event.context.params

    const course =  findCourse()

   if(course){
       return course.chapters
   } else {
       return []
   }
})
