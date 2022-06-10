import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCountryData } from '../hooks/useCountryData';
import ReactPaginate from 'react-paginate';
import CountryFigureController from './CountryFigureController';

const Pagination = () => {
  const { countryData, pageNumber, setPageNumber } = useCountryData();
  const [currentItems, setCurrentItems] = useState([]);
  const [element, setElement] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { number } = useParams();
  const itemsPerPage = 8;
  const [newPage, setNewPage] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(countryData && countryData.length ? countryData.slice(itemOffset, endOffset) : countryData);
      setPageCount(Math.ceil(countryData.length ? countryData.length / itemsPerPage : 1));

      if(number === undefined || number < 0 ) return;
      pageNumber ? setNewPage(pageNumber) : setNewPage(number) 
      const newOffset = ((newPage - 1) * itemsPerPage) % countryData.length;
      setItemOffset(newOffset)
      setElement(document.querySelector(`a[aria-label="Page ${Number(newPage)}"]`));
      const allLinkPages = document.querySelectorAll('a[role="button"]')

      const changeLinkClasses = (linkButton, isActive=false, ariaMessage) => {
        const addOrRemove = isActive ? 'add' : 'remove'
        linkButton.classList[addOrRemove]('text-blue-700');
        linkButton.classList[addOrRemove]('dark:text-green-400');
        linkButton.classList[addOrRemove]('font-bold');
        linkButton.parentElement.classList[addOrRemove]('selected')
        linkButton.ariaLabel = ariaMessage;
        isActive ? linkButton.setAttribute('aria-current', 'page') : 
        linkButton.removeAttribute('aria-current')        
      }

      allLinkPages.forEach(pageButton => {
        if(pageButton.ariaLabel !== "Page previous " || pageButton.ariaLabel !== "Page next"){
            changeLinkClasses(pageButton, false, `Page ${pageButton.textContent}`)
          } 

        const urlLinkPage = pageButton.parentElement.parentElement;
          urlLinkPage.addEventListener('click', function(ev) {
            if(!ev.target.closest(`a[aria-label="Page ${Number(ev.target.textContent)}"]`)) return;
            const newOffset = ((Number(ev.target.textContent - 1)) * itemsPerPage) % countryData.length;
            changeLinkClasses(ev.target, true, `Page ${ev.target.textContent} is your current page`)
            setItemOffset(newOffset)
            setNewPage(Number(number))
            navigate(`/page/${Number(ev.target.textContent)}`);
            return;
        })
      })
      
      if(!element) return;
      changeLinkClasses(element, true, `Page ${element.textContent} is your current page`)
      
  }, [itemOffset, itemsPerPage, countryData, element, number]);

  const handleNewOffset = (event) => {
    const newOffset = (event.selected * itemsPerPage) % countryData.length;
    setItemOffset(newOffset);
    navigate(`/page/${event.selected + 1}`);
    setPageNumber(0)
  };

  return (
    <>
      <CountryFigureController countryData={currentItems}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handleNewOffset}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='w-full flex flex-wrap items-center px-4 h-12 justify-between capitalize bg-white text-very-dark-blue dark:bg-dark-blue dark:text-white shadow-xl rounded-md md:absolute md:inset-x-0 md:mx-auto md:bottom-4 md:h-12 md:w-2/3 md:text-lg lg:text-xl'
        pageLinkClassName='h-full flex items-center px-1 md:px-4 hover:text-blue-700 hover:font-medium dark:hover:text-green-400'
        previousLinkClassName='text-sm text-red-700 h-full flex items-center dark:text-orange-400 md:text-base lg:text-lg xl:text-xl'
        nextLinkClassName='text-sm text-blue-500 h-full flex items-center dark:text-green-500 md:text-base lg:text-lg xl:text-xl'
        activeLinkClassName='text-blue-700 font-bold dark:text-green-400'
      />
    </>
  );
};

export default Pagination;