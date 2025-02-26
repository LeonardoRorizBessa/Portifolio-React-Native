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
      backgroundColor: colors.emerald,
    },
    title: {
      color: colors.white,
    },
  },
  disable: {
    button: {
      backgroundColor: colors.gray,
    },
    title: {
      color: colors.white,
    },
  },
};

export const buttonSecundary: ButtonVariant = {
  enable: {
    button: {
      backgroundColor: colors.menta,
    },
    title: {
      color: colors.grayDark,
    },
  },
  disable: {
    button: {
      backgroundColor: colors.gray,
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
      borderColor: colors.menta,
    },
    title: {
      color: colors.menta,
    },
  },
  disable: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.gray,
    },
    title: {
      color: colors.gray,
    },
  },
};

export const buttonOutlineSecundary: ButtonVariant = {
  enable: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.emerald,
    },
    title: {
      color: colors.emerald,
    },
  },
  disable: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.gray,
    },
    title: {
      color: colors.gray,
    },
  },
};

export const variants = {
  primary: buttonPrimary,
  secundary: buttonSecundary,
  outlinePrimary: buttonOutlinePrimary,
  outlineSecundary: buttonOutlineSecundary,
}