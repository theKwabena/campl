import courseData from "~/server/courseData";
import {type Lesson, type Chapter, type Course} from "~/types/course"

export function findCourse(courseSlug: string): Course{
    const course:Maybe<Course> = courseData.courses.find((course : Course)=>(
        course.slug == courseSlug
    ))
    if (!course){
        throw createError({
            status: 404,
            message: `Course not found`
        })
    }
    return course
}

export function findChapter(courseSlug : string, chapterSlug: string) : Chapter{
    const course: Course  = findCourse(courseSlug)

    const chapter :  Maybe<Chapter> = course.chapters.find((chapter : Chapter)=>(
        chapter.slug==chapterSlug
    ))
    if (!chapter){
        throw createError({
            status: 404,
            message: `Chapter not found`
        })
    }

    return chapter
}

export function findLesson(courseSlug: string, chapterSlug: string, lessonSlug:string): Lesson {
    const chapter : Chapter = findChapter(courseSlug,chapterSlug)

    const lesson : Maybe<Lesson> = chapter.lessons.find((lesson : Lesson)=>(
        lesson.slug == lessonSlug
    ))

    if (!lesson){
        throw createError({
            status: 404,
            message: `Lesson not found`
        })
    }

    return lesson
}