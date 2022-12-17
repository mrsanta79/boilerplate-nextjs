import PropTypes from "prop-types";

export default function Ratings({ children, className, rating, size, showNumber, ratedBy, onClick }) {
    const ratingRounded = Math.round(rating);

    return (
        <div
            className={`flex flex-row items-center gap-1 text-yellow-500 ${className}`}
            onClick={onClick}
        >

            {/* Filled Stars */}
            {[
                ...Array.from(Array(ratingRounded), (item, index) => {
                    return (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className={size} fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    )
                })
            ]}
            {/* Blank Stars */}
            {[
                ...Array.from(Array(5 - ratingRounded), (item, index) => {
                    return (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    )
                })
            ]}

            {/* Show Rating Number */}
            {
                showNumber
                ? <span className="ml-1 text-dark-700 font-semibold text-xs inline-flex flex-row items-center">
                    {rating.toFixed(1)} ({parseInt(ratedBy)})

                    {/* Extra stuffs */}
                    {children}
                </span>
                : null
            }
        </div>
    )
}


// Prop checking
Ratings.propTypes = {
    className: PropTypes.string,
    rating: PropTypes.number,
    size: PropTypes.string,
    showNumber: PropTypes.bool,
    ratedBy: PropTypes.number,
    onClick: PropTypes.func,
}
Ratings.defaultProps = {
    className: null,
    rating: 0,
    size: `w-4`,
    showNumber: true,
    ratedBy: 0,
    onClick: _ => {},
}