import request from "@/api/request";

/**
 * 获取博客列表数据
 * @param page
 * @param limit
 * @param categoryId
 * @returns {Promise<void>}
 */
export async function getBlogs(categoryId = -1, page = 1, limit = 10) {
    return await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryId
        }
    });
}

export async function getBlogCategories() {
    return await request.get('/api/blogtype');
}

export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}

export async function postComment(commentInfo) {
    return await request.post('/api/comment', commentInfo);
}

export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get('/api/comment', {
        params: {
            blogid,
            page,
            limit
        }
    })
}
