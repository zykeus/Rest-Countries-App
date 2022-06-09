
const MainView = ({ children }) => {
    return (
        <main className='relative grid md:grid-cols-main pt-8 pb-20 px-6 md:col-start-1 md:col-span-full md:gap-8 md:justify-items-center lg:px-12'>{children}</main>
    )
};

export default MainView;