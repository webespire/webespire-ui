export type SubMenuItem = {
    title: string
    href: string
    description?: string
    icon?: React.ComponentType
}

export type MenuItem = {
    title: string
    href?: string
    submenu?: SubMenuItem[]
}