// import prism from '@theme-ui/prism/presets/theme-ui'
import { deep as DefaultTheme } from "@theme-ui/presets"

export default {
    ...DefaultTheme,
    initialColorMode: 'light',
    colors: {
        ...DefaultTheme.colors,
        text: '#000000',
        heading:"#000000",
        background: '#ffffff',
        primary: '#3498db',
        secondary: '#2980b9',
        muted: '#f6f6f6',
        highlight: '#efeffe', // '#ffffcc',
        gray: '#777777',
        accent: '#660099',
        darken: 'rgba(0, 0, 0, .25)',
        modes: {
            dark: {
                text: '#ffffff',
                heading:"#ffffff",
                background: '#141821',
                primary: '#33ccff',
                secondary: '#1abc9c',
                muted: '#7f8c8d',
                highlight: '#95a5a6',
                gray: '#999999',
                accent: '#cc00ff',
            },
            deep: {
                text: 'hsl(210, 50%, 96%)',
                heading:"hsl(210, 50%, 96%)",
                background: 'hsl(230, 25%, 18%)',
                primary: 'hsl(260, 100%, 80%)',
                secondary: 'hsl(290, 100%, 80%)',
                highlight: 'hsl(260, 20%, 40%)',
                accent: 'hsl(290, 100%, 80%)',
                muted: 'hsla(230, 20%, 0%, 20%)',
                gray: 'hsl(210, 50%, 60%)',
            },
            swiss: {
                text: 'hsl(10, 20%, 20%)',
                heading: 'hsl(10, 20%, 20%)',
                background: 'hsl(10, 10%, 98%)',
                primary: 'hsl(10, 80%, 50%)',
                secondary: 'hsl(10, 60%, 50%)',
                highlight: 'hsl(10, 40%, 90%)',
                accent: 'hsl(250, 60%, 30%)',
                muted: 'hsl(10, 20%, 94%)',
                gray: 'hsl(10, 20%, 50%)',
            },
            light: {
                text: '#000000',
                heading:"#000000",
                background: '#ffffff',
                primary: '#3498db',
                secondary: '#2980b9',
                muted: '#f6f6f6',
                highlight: '#bdc3c7', // '#ffffcc'#efeffe,
                gray: '#777777',
                accent: '#660099',
                darken: 'rgba(0, 0, 0, .25)',
            },
        },
    },
    fonts: {
        body:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Microsoft Yahei", sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    fontWeights: {
        body: 400,
        heading: 800,
        bold: 700,
        display: 800,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    sizes: {
        sidebar: 256,
        // container: 1024,
    },
    text: {
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        },
        display: {
            variant: 'text.heading',
            fontSize: [5, 6],
            fontWeight: 'display',
            letterSpacing: '-0.03em',
            mt: 3,
        },
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
        },
    },
    buttons: {
        primary: {
            color: 'background',
            bg: 'primary',
            fontWeight: 'bold',
        },
        secondary: {
            variant: 'buttons.primary',
            color: 'background',
            bg: 'secondary',
        },
        black: {
            fontWeight: 'bold',
            color: 'background',
            bg: 'text',
            '&:hover, &:focus': {
                bg: 'primary',
            },
        },
    },
    links: {
        button: {
            display: 'inline-block',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: 2,
            p: 3,
            color: 'background',
            bg: 'text',
            borderRadius: 6,
            '&:hover, &:focus': {
                color: 'background',
                bg: 'primary',
            },
        },
        nav: {
            display: 'block',
            width: '100%',
            px: 2,
            py: 2,
            color: 'inherit',
            textDecoration: 'none',
            fontSize: 1,
            fontWeight: 'bold',
            bg: 'transparent',
            transitionProperty: 'background-color',
            transitionTimingFunction: 'ease-out',
            transitionDuration: '.2s',
            borderRadius: 2,
            '&:hover': {
                bg: 'highlight',
            },
            '&.active': {
                color: 'primary',
                bg: 'highlight',
            },
        },
    },
    badges: {
        primary: {
            color: 'background',
        },
        highlight: {
            color: 'text',
            bg: 'highlight',
        },
        accent: {
            color: 'background',
            bg: 'accent',
        },
        outline: {
            color: 'primary',
            bg: 'transparent',
            boxShadow: 'inset 0 0 0 1px',
        },
        circle: {
            height: 16,
            minWidth: 16,
            lineHeight: '16px',
            textAlign: 'center',
            borderRadius: 9999,
        },
    },
    images: {
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 9999,
        },
    },
    cards: {
        primary: {
            padding: 2,
            borderRadius: 4,
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
        },
        compact: {
            padding: 1,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'muted',
        },
    },
    forms: {
        label: {
            fontSize: 1,
            fontWeight: 'bold',
        },
        input: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        select: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        textarea: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        slider: {
            bg: 'muted',
        },
    },
    alerts: {
        primary: {
            color: 'background',
        },
        secondary: {
            color: 'background',
            bg: 'secondary',
        },
        accent: {
            color: 'background',
            bg: 'accent',
        },
        highlight: {
            color: 'text',
            bg: 'highlight',
        },
    },
    layout: {
        container: {
            p: 3,
            // maxWidth: 1024,
        },
    },
    styles: {
        ...DefaultTheme.styles,
        root: {
            ...DefaultTheme.styles.root,
            margin: 0,
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        img: {
            maxWidth: '100%',
            height: 'auto',
        },
        h1: {
            ...DefaultTheme.styles.h1,
            fontSize: "2rem",
            lineHeight:"2.4375rem",
            color:'heading'
        },
        h2: {
            ...DefaultTheme.styles.h2,
            // variant: 'text.heading',
            fontSize: "1.51572rem",
            lineHeight:"2.4375rem",
            color:'heading'
        },
        h3: {
            ...DefaultTheme.styles.h3,
            // variant: 'text.heading',
            fontSize: "1.31951rem",
            lineHeight:"1.625rem",
            color:'heading'
        },
        h4: {
            ...DefaultTheme.styles.h4,
            // variant: 'text.heading',
            fontSize: "1rem",
            lineHeight:"1.5rem",
            color:'heading'
        },
        h5: {
            ...DefaultTheme.styles.h5,
            // variant: 'text.heading',
            fontSize: "0.87055rem",
            lineHeight:"1.5rem",
            color:'heading'
        },
        h6: {
            ...DefaultTheme.styles.h6,
            // variant: 'text.heading',
            fontSize: "0.81225rem",
            lineHeight:"1.5rem",
            color:'heading'
        },
        a: {
            color: 'primary',
            "text-decoration":"none",
            '&:hover': {
                color: 'secondary',
                "text-decoration":"underline"
            },
        },
        pre: {
            fontFamily: 'monospace',
            fontSize: 1,
            p: 3,
            color: 'text',
            bg: 'muted',
            overflow: 'auto',
            code: {
                color: 'inherit',
            },
            variant: 'prism',
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 1,
        },
        inlineCode: {
            fontFamily: 'monospace',
            color: 'secondary',
            bg: 'muted',
        },
        table: {
            width: '100%',
            my: 4,
            borderCollapse: 'separate',
            borderSpacing: 0,
            [['th', 'td']]: {
                textAlign: 'left',
                py: '4px',
                pr: '4px',
                pl: 0,
                borderColor: 'muted',
                borderBottomStyle: 'solid',
            },
        },
        th: {
            verticalAlign: 'bottom',
            borderBottomWidth: '2px',
        },
        td: {
            verticalAlign: 'top',
            borderBottomWidth: '1px',
        },
        hr: {
            border: 0,
            borderBottom: '1px solid',
            borderColor: 'muted',
        },
        xray: {
            '*': {
                outline: '1px solid rgba(0, 192, 255, .25)',
            },
        },
        navlink: {
            display: 'inline-block',
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none',
            ':hover,:focus': {
                color: 'primary',
            },
        },
    },
    DefaultTheme,
}