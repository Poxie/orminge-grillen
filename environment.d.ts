declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_PHONE_NUMBER: string;
            NEXT_PUBLIC_ADRESS: string;
            NEXT_PUBLIC_OPEN_NORMAL: string;
            NEXT_PUBLIC_OPEN_SATURDAY: string;
            NEXT_PUBLIC_OPEN_SUNDAY: string;
            NEXT_PUBLIC_FOODORA_LINK: string;
            NEXT_PUBLIC_MAPS_LINK: string;
            NEXT_PUBLIC_IFRAME_SRC: string;
        }
    }
}

export {};