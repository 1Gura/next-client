import clsx from "clsx";
import Link from "next/link";

export type UiLinkVariant = 'primary' | 'secondary' | 'outlined'

export type UiLinkProps = {} & Parameters<typeof Link>[0]


export function UiLink({className, ...props}: UiLinkProps) {
    return (
        <Link
            {...props}
            className={
                clsx(
                    className,
                    'p-1 text-teal-500 cursor pointer hover:text-teal-600',
                )}/>
    )
}
