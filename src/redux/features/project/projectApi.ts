import { baseApi } from "../../api/baseApi";

const projectApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProject: builder.query({
			query: () => `/projects`,
			providesTags: ["projects"],
		}),
		getProjectById: builder.query({
			query: (id) => `/projects/${id}`,
			providesTags: ["projects"],
		}),
		addProject: builder.mutation({
			query: (data) => ({
				url: "/projects",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["projects"],
		}),
		updateProject: builder.mutation({
			query: (data) => ({
				url: `/projects/${data.id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["projects"],
		}),
		deleteProject: builder.mutation({
			query: (id) => ({
				url: `/projects/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["projects"],
		}),
	}),
});

export const {
	useGetAllProjectQuery,
	useGetProjectByIdQuery,
	useAddProjectMutation,
	useUpdateProjectMutation,
	useDeleteProjectMutation,
} = projectApi;
