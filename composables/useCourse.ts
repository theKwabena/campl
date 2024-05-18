import courseData from "~/composables/courseData";
import {type Lesson, type Chapter, type Course} from "~/types/course"
import useFetchWithCache from "~/composables/useFetchWithCache";
// export const useCourse = (): Course[] => {
//     return courseData.courses.map((course)=>{
//         const chapters: Chapter[] = course.chapters.map((chapter) => {
//
//             const lessons: Lesson[] = chapter.lessons.map((lesson)=>({
//                 ...lesson
//             }))
//             return{
//                 ...chapter,
//                 lessons
//             }
//         })
//
//         return {
//             ...course,
//             chapters
//         }
//     })
//
// }

export default async () => (
    useFetchWithCache<Course[]>(`/api/courses?meta=true`)
)