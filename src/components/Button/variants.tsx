import { colors } from '../../styles/colors'

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
      backgroundColor: colors.orange,
    },
    title: {
      color: colors.white,
    },
  },
  disable: {
    button: {
      backgroundColor: colors.lightGray,
    },
    title: {
      color: colors.white,
    },
  },
};

export const buttonSecundary: ButtonVariant = {
  enable: {
    button: {
      backgroundColor: colors.orange,
    },
    title: {
      color: colors.black,
    },
  },
  disable: {
    button: {
      backgroundColor: colors.lightGray,
    },
    title: {
      color: colors.white,
    },
  },
};

export const buttonOutlinePrimary: ButtonVariant = {
  enable: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.orange,
    },
    title: {
      color: colors.orange,
    },
  },
  disable: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.lightGray,
    },
    title: {
      color: colors.lightGray,
    },
  },
};

export const buttonOutlineSecundary: ButtonVariant = {
  enable: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.orange,
    },
    title: {
      color: colors.orange,
    },
  },
  disable: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.lightGray,
    },
    title: {
      color: colors.lightGray,
    },
  },
};

export const variants = {
  primary: buttonPrimary,
  secundary: buttonSecundary,
  outlinePrimary: buttonOutlinePrimary,
  outlineSecundary: buttonOutlineSecundary,
}