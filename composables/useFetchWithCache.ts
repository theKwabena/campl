import {StorageSerializers} from "@vueuse/core";

export default async <T>(url: string) => {
  const cachedData = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  });

  if (!cachedData.value){
    const {data, error } = await useFetch<T>(url)

    if(error.value){
      throw createError({
        ...error.value,
        statusMessage: `Error fetching data from ${url}`
      })
    }

    cachedData.value = data.value as T;

  }

  return cachedData

}