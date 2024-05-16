export default defineEventHandler((event) => {
    const { courseID } = event.context.params

    return {
        courseID
    }

})
