import {useForm} from "react-hook-form";
import {authControllerSignUp} from "@/shared/api/generated";
import {ROUTS} from "@/shared/constants/routs";
import {useRouter} from "next/router";
import {useMutation} from "@tanstack/react-query";

export function useSignUpForm() {
    const router = useRouter();

    const {register, handleSubmit} = useForm<{ email: string; password: string }>()
    const signUpMutation = useMutation({
        mutationFn: authControllerSignUp,
        onSuccess() {
            router.push(ROUTS.HOME)
        }
    });

    const errorMessage = signUpMutation.error ? 'Sign up failed' : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
        isLoading: signUpMutation.isPending,
    }
}