export interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  },
  title: {
    color: string;
  },
}

export interface ButtonVariant {
  enable: ButtonStyle;
  disable: ButtonStyle;
}

export const buttonPrimary: ButtonVariant = {
  enable: {
    button: {
      backgroundColor: 'blue',
    },
    title: {
      color: 'white',
    },
  },
  disable: {
    button: {
      backgroundColor: '#b8b8b8',
    },
    title: {
      color: 'white',
    },
  },
};

export const buttonOutline: ButtonVariant = {
  enable: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: 'blue',
    },
    title: {
      color: 'blue',
    },
  },
  disable: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: '#b8b8b8',
    },
    title: {
      color: '#b8b8b8',
    },
  },
};

export const variants = {
  primary: buttonPrimary,
  outline: buttonOutline,
}