import { api } from "./index";
import { FetchCar } from "../../types/dataTypes";

const carApi  = api.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query<FetchCar, void>({
            query: () => ({
                url: "/cars"
            }),
            providesTags: ["CARS"]
        }),
        getSingleCar: build.query<FetchCar, string>({
            query: (id) => ({
                url: `/cars/${id}`
            }),
            providesTags: ["CARS"]
        })
    })
})

export const { useGetCarsQuery, useGetSingleCarQuery } = carApi