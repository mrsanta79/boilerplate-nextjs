import React from 'react';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';

export default function CustomPagination({ className, maxRange }) {
    return (
        <div className={`${className}`}>
            <Pagination
                activePage={1}
                itemsCountPerPage={10}
                totalItemsCount={50}
                pageRangeDisplayed={maxRange}
                onChange={_ => {}}
                innerClass='pagination'
                itemClass='paginate-btn'
                prevPageText={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                }
                nextPageText={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                }
                firstPageText={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                }
                lastPageText={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                }
            />
        </div>
    )
}

CustomPagination.propTypes = {
    className: PropTypes.string,
    maxRange: PropTypes.number,
}
CustomPagination.defaultProps = {
    className: '',
    maxRange: 3,
}