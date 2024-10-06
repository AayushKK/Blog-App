import { useId, forwardRef } from 'react';
import PropTypes from 'prop-types';
const MyInput = forwardRef(function MyInput({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const inputId = useId();
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                id={inputId}
                type={type}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${className}`}
                ref={ref}
                {...props}
            />
        </div>
    );
});

MyInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
};
 
export default MyInput;
