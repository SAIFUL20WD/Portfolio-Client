import { baseApi } from "../../api/baseApi";

const skillApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllSkill: builder.query({
			query: (query) => `/skills?${query}`,
			providesTags: ["skills"],
		}),
		addSkill: builder.mutation({
			query: (data) => ({
				url: "/skills",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["skills"],
		}),
		updateSkill: builder.mutation({
			query: (data) => ({
				url: `/skills/${data.id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["skills"],
		}),
		deleteSkill: builder.mutation({
			query: (id) => ({
				url: `/skills/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["skills"],
		}),
	}),
});

export const {
	useGetAllSkillQuery,
	useAddSkillMutation,
	useUpdateSkillMutation,
	useDeleteSkillMutation,
} = skillApi;
