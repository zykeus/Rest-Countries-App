import { HiOutlineMoon } from 'react-icons/hi';
import { HiOutlineSun } from 'react-icons/hi';

const HeaderView = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className='relative flex items-center justify-between px-6 py-8 font-medium shadow-lg 
        dark:bg-dark-blue dark:text-white md:col-start-1 md:col-span-full md:grid md:grid-cols-header md:px-10 md:text-lg
        lg:px-12 lg:text-xl xl:px-20 xl:text-2xl 2xl:px-24 2xl:text-3xl'>

        <a href="/">
          <h2 className='font-extra-bold md:col-start-1 md:col-span-1 cursor-pointer'>
            Where in the World?
          </h2>
        </a>

      <div className='flex justify-betweenn md:col-start-3 md:col-span-full 
        md:grid md:auto-cols-max md:grid-flow-col md:gap-4'>
        <button onClick={toggleDarkMode}>
          {isDarkMode ?
            <HiOutlineSun className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' /> :
            <HiOutlineMoon className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl' />
          }
        </button>
        <p className='ml-2 md:ml-0'>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</p>
      </div>
    </header>
  )
};

export default HeaderView;
