
import PropTypes from 'prop-types';

function Button({
    children,
    type,
    bgColor,
    textColor,
    className,
    ...props
}) {
    return (
        <div>
            <button
                type={type}
                className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
                {...props}
            >
                {children}
            </button>
        </div>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    className: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
    className: '',
};

export default Button;
