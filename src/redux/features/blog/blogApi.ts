import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllBlog: builder.query({
			query: () => `/posts`,
			providesTags: ["blogs"],
		}),
		getBlogById: builder.query({
			query: (id) => `/posts/${id}`,
			providesTags: ["blogs"],
		}),
		addBlog: builder.mutation({
			query: (data) => ({
				url: "/posts",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["blogs"],
		}),
		updateBlog: builder.mutation({
			query: (data) => ({
				url: `/posts/${data.id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["blogs"],
		}),
		deleteBlog: builder.mutation({
			query: (id) => ({
				url: `/posts/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["blogs"],
		}),
	}),
});

export const {
	useGetAllBlogQuery,
	useGetBlogByIdQuery,
	useAddBlogMutation,
	useUpdateBlogMutation,
	useDeleteBlogMutation,
} = blogApi;
