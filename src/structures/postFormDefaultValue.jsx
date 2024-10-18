export const postFormDefaultValue = (oldData) => ({
    title: oldData ? oldData.title : "",
    slug: oldData ? oldData.slug : "",
    post_thumbnail: oldData ? oldData.post_thumbnail : "",
    post_description: oldData ? oldData.post_description : "",
    post_content: oldData ? oldData.post_content : ""
})