import ReactPaginate from 'react-paginate';

export const Pagination = ({ Pages, Handleclick }) => {

  return (
    <div className="flex w-full justify-center items-center gap-5 mt-5">
        { Pages &&
                  <ReactPaginate
                  pageCount={Pages}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={3}
                  onPageChange={Handleclick}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                />
        }

    </div>
  );
};
