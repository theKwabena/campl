import type {Lesson} from "~/types/course";
import {StorageSerializers} from "@vueuse/core";
import {da} from "cronstrue/dist/i18n/locales/da";
import useFetchWithCache from "~/composables/useFetchWithCache";

export const useLesson = async ( courseSlug:string, chapterSlug:string, lessonSlug:string) => (
  // cache lesson data
  useFetchWithCache<Lesson>(`/api/courses/${courseSlug}/chapters/${chapterSlug}/lessons/${lessonSlug}`)
)