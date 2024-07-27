import {useForm} from "react-hook-form";
import {authControllerSignIn, authControllerSignUp} from "@/shared/api/generated";
import {ROUTS} from "@/shared/constants/routs";
import {useRouter} from "next/router";
import {useMutation} from "@tanstack/react-query";

export function useSignInForm() {
    const router = useRouter();

    const {register, handleSubmit} = useForm<{ email: string; password: string }>()
    const signInMutation = useMutation({
        mutationFn: authControllerSignIn,
        onSuccess() {
            router.push(ROUTS.HOME)
        }
    });

    const errorMessage = signInMutation.error ? 'Sign in failed' : undefined;

    return {
        register,
        errorMessage,
        handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
        isLoading: signInMutation.isPending,
    }
}