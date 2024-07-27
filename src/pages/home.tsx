import {UiButton} from "@/shared/ui/ui-button";
import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiSelectField} from "@/shared/ui/ui-select-field";
import {UiLink} from "@/shared/ui/ui-link";
import {UiSpinner} from "@/shared/ui/ui-spinner";
import {UiHeader} from "@/shared/ui/ui-header";
import {SignOutButton} from "@/features/auth";
import {useSessionQuery} from "@/entities/session/queries";


export function HomePage() {
    const {data} = useSessionQuery();

    return (
        <main
            className={`min-h-screen`}
        >
            <UiHeader
                right={
                    <div>
                        {data?.email}
                        <SignOutButton/>
                    </div>
                }
            />
            <UiTextField label="text field" inputProps={{placeholder: 'enter email'}}/>
            <UiTextField label="text field" error="some error" inputProps={{placeholder: 'enter email'}}/>
            <UiTextField inputProps={{placeholder: 'enter email'}}/>
            <UiSelectField label="text field" error="some error" inputProps={{placeholder: 'enter email'}}
                           options={[
                               {value: '1', label: 'first'},
                               {value: '2', label: 'second'},
                           ]}/>
            <UiLink href={'/'}>Link</UiLink>
            <UiButton variant="primary">Primary</UiButton>
            <UiButton variant="secondary">Secondary</UiButton>
            <UiButton variant="outlined">Outline</UiButton>
            <UiButton disabled variant="primary">Outline</UiButton>
        </main>
    );
}
