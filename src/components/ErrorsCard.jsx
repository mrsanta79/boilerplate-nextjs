import PropTypes from 'prop-types';

export default function ErrorsCard({ errors, onClear }) {
    return (
        errors
        ? <div className="flex flex-row justify-between items-start relative bg-red-200 border border-red-500 text-red-600 rounded-global p-2">
            <div className="flex flex-col">
                {
                    typeof errors !== 'string' && errors.length
                    ? errors.map((err, index) => <h1 key={index} className={`block ${index !== errors.length - 1 ? 'mb-2' : ''}`}>{err}</h1>)
                    : <h1 className="block">{errors}</h1>
                }
            </div>
            <span className="relative text-red-600 cursor-pointer" onClick={onClear}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
        </div>
        : null
    )
}

// Props validations
ErrorsCard.propTypes = {
    errors: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    onClear: PropTypes.func,
}
ErrorsCard.defaultProps = {
    errors: null,
    onClear: _ => {},
}