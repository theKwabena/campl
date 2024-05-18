import type {Lesson} from "~/types/course";
import {StorageSerializers} from "@vueuse/core";
import {da} from "cronstrue/dist/i18n/locales/da";

export const useLesson = async ( courseSlug:string, chapterSlug:string, lessonSlug:string) => {

  // cache lesson data
  const url = `/api/courses/${courseSlug}/chapters/${chapterSlug}/lessons/${lessonSlug}`
  const lesson = useSessionStorage<Lesson>(
      url,
      null,
      {
        // passing null up there means we need to specify the serializer to use
        // we can actually use {} and remove this curly brace
        serializer: StorageSerializers.object
      }
  )

  if (!lesson.value){
    const {data, error } = await useFetch<Lesson>(url);

    if(error.value){
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch lesson ${lessonSlug} in chapter ${chapterSlug} of course ${courseSlug}`
      })
    }

    lesson.value = data.value
  }

  return lesson
}
