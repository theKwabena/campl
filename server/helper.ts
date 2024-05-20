


import {
    OutlineChapter,
    OutlineBase,
    OutlineCourse,
    CourseMeta
} from "~/types/course"
import courses from "~/server/api/courses";
import { PrismaClient, Lesson, Chapter, Course } from "@prisma/client";


import chapters from "~/server/api/courses/[courseSlug]/chapters";


const prisma = new PrismaClient();
export async function allCourses(meta: Boolean = false): Promise<OutlineCourse[]> {
    if (meta){
        // return courseData.courses.reduce((prev:  OutlineCourse[], next: OutlineCourse) => {
        //     const chapters : OutlineChapter[] = next.chapters.map((chapter) => {
        //         const lessons : OutlineBase[] = chapter.lessons.map((lesson: OutlineBase)=>({
        //             title: lesson.title,
        //             slug: lesson.slug,
        //             number: lesson.number
        //         }))
        //         return {
        //             title: chapter.title,
        //             slug: chapter.slug,
        //             number: chapter.number,
        //             lessons: lessons
        //
        //         }
        //     })
        //     const course = {
        //         title: next.title,
        //         slug: next.slug,
        //         id: next.id,
        //         chapters: chapters
        //     }
        //
        //     return [...prev, course];
        // }, [])
    }


    return prisma.course.findMany({
        include: {
            chapters: {
                include: {
                    lessons: true
                }
            }
        }
    });
}

export async function findCourse(courseSlug: string, meta: Boolean = false): Promise<Course | CourseMeta>{
    const course  = await prisma.course.findFirst({
        where: {
            slug: courseSlug
        },
        include: {
            chapters: {
                include: {
                    lessons: true
                }
            }
        }
    })
    if (!course){
        throw createError({
            status: 404,
            message: `Course not found`
        })
    }
    if (meta){
        // const chapters: OutlineChapter[] = course.chapters.reduce((prev : OutlineChapter[], next : Chapter) => {
        //     const lessons : OutlineBase[] = next.lessons.map((lesson)=>({
        //             title: lesson.title,
        //             slug: lesson.slug,
        //             number: lesson.number
        //         })
        //     );
        //     const chapter : OutlineChapter = {
        //         title: next.title,
        //         slug: next.slug,
        //         number: next.number,
        //         lessons: lessons
        //     };
        //     return [...prev, chapter];
        // }, []);
        //
        // return {
        //     title: course.title,
        //     chapters: chapters
        // }


    }
    return course
}

export async function findChapter(courseSlug : string, chapterSlug: string) : Promise<Chapter> {
    const chapter   = await prisma.chapter.findFirst({
        where: {
            slug: chapterSlug,
            Course: {
                slug: courseSlug
            }
        },
        include: {
            lessons: true
        }
    })
    // const chapter : Maybe<Chapter> =course.chapters.find((chapter)=>(
    //     chapter.slug == chapterSlug
    // ))
    if (!chapter){
        throw createError({
            status: 404,
            message: `Chapter not found`
        })
    }

    return chapter
}

export async function findLesson(courseSlug: string, chapterSlug: string, lessonSlug:string): Promise<Lesson> {
    const lesson = await prisma.lesson.findFirst({
        where: {
            slug: lessonSlug,
            chapter: {
                slug: chapterSlug,
                Course: {
                    slug: courseSlug
                }
            },

        }
    })
    if (!lesson){
        throw createError({
            status: 404,
            message: `Lesson not found`
        })
    }

    return lesson
}


