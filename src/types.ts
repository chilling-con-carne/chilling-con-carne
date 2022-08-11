export interface About {
    name: string;
    position: string;
    line: string;
    description: string;
    picture: string;
    linkedin: string;
    github: string;
}

export interface Subservice {
    title: string;
    desc: string;
}

export interface Service {
    title: string;
    desc: string;
    subservices: Array<Subservice>;
}