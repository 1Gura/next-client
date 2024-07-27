import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios";

export const apiInstance: AxiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const createInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
    return  apiInstance({
        ...config,
        ...options
    }).then(r => r.data)
}

export type BodyType<Data> = Data

export type ErrorType<Error> = AxiosError<Error>