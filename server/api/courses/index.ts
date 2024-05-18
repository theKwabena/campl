import courses from "~/server/courseData"
import {allCourses} from "~/server/helper";

export default defineEventHandler((event) => {
   const { meta } = getQuery(event)
   return allCourses(meta as boolean)
})
