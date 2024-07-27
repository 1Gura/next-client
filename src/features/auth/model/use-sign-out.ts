import {useMutation, useQueryClient} from "@tanstack/react-query";
import {authControllerSignOut} from "@/shared/api/generated";
import {useRouter} from "next/router";
import {ROUTS} from "@/shared/constants/routs";
import {useResetSession} from "@/entities/session/queries";

export function useSignOut() {
    const resetSession = useResetSession();
    const router = useRouter();

    const signOutMutation = useMutation({
        mutationFn: authControllerSignOut,
        async onSuccess() {
            router.push(ROUTS.SIGN_IN);
            resetSession()

        }
    })

    return {
        isLoading: signOutMutation.isPending,
        signOut: signOutMutation.mutate
    }
}