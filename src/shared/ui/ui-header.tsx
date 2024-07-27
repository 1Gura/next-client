import {UiLogo} from "@/shared/ui/ui-logo";
import clsx from "clsx";
import {ReactNode} from "react";

export function UiHeader({className, right}: { className?: string, right?: ReactNode }) {
    return (
        <header className={clsx("px-4 py-5 border-b-slate-300 flex justify-between items-center bg-white", className)}>
            <UiLogo/>
            {right}
        </header>
    )
}