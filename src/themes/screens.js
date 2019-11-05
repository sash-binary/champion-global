export const size = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
}

const screen = {
    sm: `(max-width: ${size.sm}px)`,
    md: `(max-width: ${size.md}px)`,
    lg: `(max-width: ${size.lg}px)`,
    xl: `(max-width: ${size.xl}px)`,
    xxl: `(min-width: ${size.xl}px)`,
}

export default screen
