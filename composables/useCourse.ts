import courseData from "~/composables/courseData";


type Lesson = {
  title: string;
  slug: string;
  downloadUrl: string;
  videoId: number;
  text: string;
  sourceUrl?: string; // Make it optional
}

type Chapter = {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
}


type Course = {
  title: String;
  id: number;
  chapters: Chapter[];
  slug: string
}




// export const useCourse = (): Course[] => {
//   return courseData.courses
// }


export const useCourse = (): Course[] => {
    return courseData.courses.map((course)=>{
        const chapters: Chapter[] = course.chapters.map((chapter) => {

            const lessons: Lesson[] = chapter.lessons.map((lesson)=>({
                ...lesson
            }))
            return{
                ...chapter,
                lessons
            }
        })

        return {
            ...course,
            chapters
        }
    })

}