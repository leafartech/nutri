"use client"

import { useState } from "react"

type DropdownTypes = {
    title: string
    description: string
}

export default function Dropdown({ description, title }: DropdownTypes) {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="relative max-w-lg rounded-lg px-4 py-6 border bg-zinc-200">
            <button onClick={() => setIsOpen(!isOpen)} className={`w-full pe-10 flexjustify-between text-left text-xl font-semibold`}>
                <span>{title}</span>
                <svg className={`absolute top-3 right-4 w-12 h-12 fill-[#C4DC73] ${isOpen ? 'rotate-0' : '-rotate-90'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z" /></svg>
            </button>
            <div className={`py-4 ${isOpen ? 'block' : 'hidden'}`}>
                <p className="text-left">{description}</p>
            </div>
        </div>
    )
}