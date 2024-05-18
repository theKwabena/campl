import {type Lesson, type Chapter, type Course} from "~/types/course"
import useFetchWithCache from "~/composables/useFetchWithCache";
export default async () => (
    useFetchWithCache<Course[]>(`/api/courses?meta=true`)
)