export type ButtonProps = {
    children: React.ReactNode
    className: string
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    type: "submit" | "reset" | "button"
}