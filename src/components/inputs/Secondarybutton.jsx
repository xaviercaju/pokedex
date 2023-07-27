function SecondaryButton({ children, onClick }) {
    return <button
        onClick={onClick}
        className='relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-white bg-sky-700 hover:bg-sky-600  focus:bg-sky-700 px-4 py-1 sm:py-1.5 sm:px-5'>
        {children}
    </button>;
}

export default SecondaryButton;