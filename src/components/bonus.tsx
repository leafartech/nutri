type ButtonTypes = {
    title: string
    description: string
}

export default function Bonus({ description, title}: ButtonTypes) {
    return (
        <div className="flex flex-col gap-4 rounded-lg border border-white/10 px-4 py-6 bg-gradient-to-br from-zinc-800 to-zinc-950">
            <h4 className="font-semibold text-xl">{title}</h4>
            <p className="">{description}</p>
        </div>
    )
}