import { createContext, useContext } from "react"

class Images {
    public items: Array<any> = []

    public handler: () => void = () => {}

    push(item: any) {
        this.items.push(item)

        this.handler()
    }

    listen(handler: () => void) {
        this.handler = handler
    }
}

export const Context = createContext<any>(null)

export function makeImages() {
    return new Images()
}

export function useImages() {
    const context = useContext(Context)

    return context
}
