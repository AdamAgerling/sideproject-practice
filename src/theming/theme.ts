export type ThemeColors = {
  primary: string;
  secondary: string;
  error: string;
  disabled: string;
  textPrimary: string;
  textSecondary: string;
  backgroundPrimary: string;
}

export type Theme = {
  colors: ThemeColors;
}

export const theme: Theme = {
  colors: {
primary: '#838181',
secondary: '#ccc',
error: '#FF4422',
disabled: '#EFEFEF',
textPrimary: '#000',
textSecondary: '#fff',
backgroundPrimary: '#ccc9'
}
}
