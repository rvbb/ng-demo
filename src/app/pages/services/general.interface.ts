export interface ProgressState {
    display: boolean;
}

export interface IConfigs {
    [key: string]: string | string[] | IConfigs;
}
