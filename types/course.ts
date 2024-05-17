export type Lesson = {
    title: string;
    slug: string;
    downloadUrl: string;
    videoId: number;
    text: string;
    sourceUrl?: string; // Make it optional
}

export type Chapter = {
    title: string;
    slug: string;
    number: number;
    lessons: Lesson[];
}


export type Course = {
    title: String;
    id: number;
    chapters: Chapter[];
    slug: string
}