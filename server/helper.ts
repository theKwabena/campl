import courseData from "~/server/courseData";
import {type Lesson, type Chapter, type Course} from "~/types/course"

export function findCourse(courseSlug: string): Course | undefined{
    return courseData.courses.find((course : Course)=>(
        course.slug == courseSlug
    ))
}

export function findChapter(courseSlug : string, chapterSlug: string){
    const course: Course | undefined = findCourse(courseSlug)
    return course?.chapters.find((chapter : Chapter)=>(
        chapter.slug==chapterSlug
    ))
}

export function findLesson(courseSlug: string, chapterSlug: string, lessonSlug:string): Lesson|undefined {
    const chapter : Chapter | undefined = findChapter(courseSlug,chapterSlug)

    return chapter?.lessons.find((lesson : Lesson)=>(
        lesson.slug == lessonSlug
    ))
}