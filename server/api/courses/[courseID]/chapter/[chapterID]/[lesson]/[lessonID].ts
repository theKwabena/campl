export default defineEventHandler((event) => {
    const { courseID, lessonID } = event.context.params

    if (courseID && lessonID){
        return {
            courseID,lessonID
        }
    }

    if(courseID){
        return courseID
    }

    if(lessonID){
        return lessonID
    }

    return  ''

})
