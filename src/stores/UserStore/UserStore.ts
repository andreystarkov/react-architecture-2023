import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const USER_BASE_URL = 'https://6449e2b9a8370fb321403a59.mockapi.io/Users'

export type UserType = {
	avatar: string;
	createdAt: string;
	description: string;
	id: string;
	name: string;
}

export type ResponseStateType = {
	isError: boolean;
	isLoading: boolean;
	isSuccess: boolean;
	data: UserType[] | undefined;
}

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({
		baseUrl: USER_BASE_URL,
	}),
	endpoints: (builder) => ({
		getAllUsers: builder.query<ResponseStateType, void>({
			query: () => ({
				url: '',
				method: 'GET',
			}),
		}),
		getUser: builder.query({
			query: (userId: string | number) => ({
				url: `/${userId}`,
				method: 'GET',
			}),
		}),
	}),
})

export const {
	useGetAllUsersQuery,
	useGetUserQuery,
} = userApi
