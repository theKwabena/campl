import courseData from "~/server/courseData";
import {
    type Lesson,
    type Chapter,
    type Course,
    OutlineChapter,
    OutlineBase,
    OutlineCourse,
    CourseMeta
} from "~/types/course"
import courses from "~/server/api/courses";

export function allCourses(meta: Boolean = false): OutlineCourse[] {
    if (meta){
        return courseData.courses.reduce((prev:  OutlineCourse[], next: OutlineCourse) => {
            const chapters : OutlineChapter[] = next.chapters.map((chapter) => {
                const lessons : OutlineBase[] = chapter.lessons.map((lesson: OutlineBase)=>({
                    title: lesson.title,
                    slug: lesson.slug,
                    number: lesson.number
                }))
                return {
                    title: chapter.title,
                    slug: chapter.slug,
                    number: chapter.number,
                    lessons: lessons

                }
            })
            const course = {
                title: next.title,
                slug: next.slug,
                id: next.id,
                chapters: chapters
            }

            return [...prev, course];
        }, [])
    }
    return courseData.courses
}

export function findCourse(courseSlug: string, meta: Boolean = false): Course | CourseMeta{
    const course:Maybe<Course> = courseData.courses.find((course : Course)=>(
        course.slug == courseSlug
    ))
    if (!course){
        throw createError({
            status: 404,
            message: `Course not found`
        })
    }
    if (meta){
        const chapters: OutlineChapter[] = course.chapters.reduce((prev : OutlineChapter[], next : Chapter) => {
            const lessons : OutlineBase[] = next.lessons.map((lesson)=>({
                    title: lesson.title,
                    slug: lesson.slug,
                    number: lesson.number
                })
            );
            const chapter : OutlineChapter = {
                title: next.title,
                slug: next.slug,
                number: next.number,
                lessons: lessons
            };
            return [...prev, chapter];
        }, []);

        return {
            title: course.title,
            chapters: chapters
        }


    }
    return course
}

export function findChapter(courseSlug : string, chapterSlug: string) : Chapter {
    const course: Course   = findCourse(courseSlug) as Course
    const chapter : Maybe<Chapter> =course.chapters.find((chapter)=>(
        chapter.slug == chapterSlug
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
    const lesson : Maybe<Lesson> = findChapter(courseSlug,chapterSlug).lessons.find((lesson : Lesson)=>(
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


