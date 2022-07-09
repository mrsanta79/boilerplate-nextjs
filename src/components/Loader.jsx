import PropTypes from 'prop-types';

export default function Loader({ size }) {
    return (
        <span className={`loader animation animate-spin ${size}`}></span>
    )
}

// Props validations
Loader.propTypes = {
    size: PropTypes.string,
}
Loader.defaultProps = {
    size: 'w-6 h-6',
}