import {PropsWithChildren, ReactElement} from "react";
import {UiPageSpinner} from "@/shared/ui/ui-page-spinner";
import {ROUTS} from "@/shared/constants/routs";
import {useRouter} from "next/router";
import {useSessionQuery} from "@/entities/session/queries";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
    return function ProtectedPage(props: PropsWithChildren<P>) {

        const router = useRouter();

        const {isError, isLoading} = useSessionQuery();


        if(isLoading) {
            return <UiPageSpinner/>
        }

        if (isError) {
            router.replace(ROUTS.SIGN_IN)
        }


        return <Component {...props}/>
    }
}