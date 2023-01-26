import { createContext, useContext } from "react"

class Videos {
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

export function makeVideos() {
    return new Videos()
}

export function useVideos() {
    const context = useContext(Context)

    return context
}
