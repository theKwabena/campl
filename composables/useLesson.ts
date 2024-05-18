export const useLesson = async ( courseSlug:string, chapterSlug:string, lessonSlug:string) => {
  const {data, error } = useFetch(
      `/api/courses/${courseSlug}/chapters/${chapterSlug}/lessons/${lessonSlug}`
  );

  if(error.value){
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch lesson ${lessonSlug} in chapter ${chapterSlug} of course ${courseSlug}`
    })
  }

  return data
}
