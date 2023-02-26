import React from 'react';
import PaginationLib from 'react-js-pagination';
import PropTypes from 'prop-types';

export default function Pagination({ className, maxRange, currentPage, total, perPage, onChangePage }) {
    return (
        <div className={`${className}`}>
            <PaginationLib
                activePage={currentPage}
                itemsCountPerPage={perPage}
                totalItemsCount={total}
                pageRangeDisplayed={maxRange}
                onChange={onChangePage}
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

Pagination.propTypes = {
    className: PropTypes.string,
    maxRange: PropTypes.number,
    currentPage: PropTypes.number,
    total: PropTypes.number,
    perPage: PropTypes.number,
    onChangePage: PropTypes.func,
}
Pagination.defaultProps = {
    className: '',
    maxRange: 3,
    currentPage: 1,
    total: 50,
    perPage: 10,
    onChangePage: _ => {},
}