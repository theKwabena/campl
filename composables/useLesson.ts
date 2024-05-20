import type {Lesson} from "~/types/course";
import useFetchWithCache from "~/composables/useFetchWithCache";

export const useLesson = async ( courseSlug:string, chapterSlug:string, lessonSlug:string) => (
  // cache lesson data
  useFetchWithCache<Lesson>(`/api/courses/${courseSlug}/chapters/${chapterSlug}/lessons/${lessonSlug}`)
)