export interface Color {
    name: string;
    theme: string;
    group: string;
    hex: string;
    rgb: string;
}


export interface FetchColorsResponse {
    status: number;
    statusText: string;
    message: string;
    count: number;
    colors: Color[];
}

export interface CustomButtonProps {
    handleClick?: () => void;
    label: string;
    containerStyles?: string;
    icon: string;
}

export interface ThemePalleteProps {
    name: string;
    primary: string;
    secondary: string;
    background: string;
    text: string;
  }