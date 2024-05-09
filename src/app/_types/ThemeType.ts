export type ThemeType = 'defaultTheme' | 'darkTheme' | 'deepDarkTheme'

export type ThemeDataProps = {
    id: ThemeType;
    color: string;
    text: string;
    checked: boolean;
}
