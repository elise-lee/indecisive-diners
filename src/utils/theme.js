import { defaultTheme } from "evergreen-ui";

const primary = '#f26346';

const theme = {
    ...defaultTheme,
    components: {
      ...defaultTheme.components,
      Button: {
        baseStyle: {
          color: 'white',
          paddingX: 12,
          paddingY: 8,
          borderRadius: 5,
          backgroundColor: primary,
          opacity: '0.8',
          transition: '0.5s',
          _hover: {
            opacity: '0.9',
          },
          _active: {
            opacity: '1',
          },
        },
      },
    }
  };

  export default theme;