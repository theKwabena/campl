export type Lesson = {
    title: string;
    slug: string;
    downloadUrl: string;
    number: number;
    videoId: number;
    text: string;
    sourceUrl?:  string | null; // Make it optional
}

export type Chapter = {
    title: string;
    slug: string;
    number: number;
    lessons: Lesson[];
}


export type Course = {
    title: string;
    id: number;
    chapters: Chapter[];
    slug: string
}

export type OutlineCourse = {
    title: string;
    id: number;
    chapters: OutlineChapter[];
    slug: string;
}

export type OutlineBase = {
    title: string;
    slug: string;
    number: number;
}

export type CourseMeta = {
    title: string;
    chapters: OutlineChapter[]
}

export type OutlineChapter = OutlineBase & {
    lessons : OutlineBase[]
}

