import RickSvg from "./RickSvg"

export const Header = () => {
    return (
    <header className='border-b border-gray-100 py-2 px-2'>
        <nav className='flex justify-between items-center'>
            <section>
                <RickSvg />
            </section>
            <section className='flex justify-center items-center'>
                <ul className='flex items-center justify-center gap-3 font-bold'>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </section>
        </nav>
    </header>
    )
}