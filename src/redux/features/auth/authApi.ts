import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (userInfo) => ({
				url: "/auth/login",
				method: "POST",
				body: userInfo,
			}),
		}),
		sendMessage: builder.mutation({
			query: (contactInfo) => ({
				url: "/auth/contact",
				method: "POST",
				body: contactInfo,
			}),
		}),
	}),
});

export const { useLoginMutation, useSendMessageMutation } = authApi;
