import PropTypes from 'prop-types';

export default function Loader({ size, color }) {
    return (
        <span className={`loader animation animate-spin ${size}`} style={{ borderLeftColor: color, borderTopColor: color }}></span>
    )
}

// Props validations
Loader.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
}
Loader.defaultProps = {
    size: 'w-6 h-6',
    color: '',
}