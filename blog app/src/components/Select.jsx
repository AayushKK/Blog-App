
import PropTypes from 'prop-types'
import { useId , forwardRef} from 'react'
const MySelect = forwardRef(function Select(
        {
            label,
            options,
            className = '',
            ...props
        
        }, ref


) {
    const selectId = useId();
    
  return (
    <div className='w-full'>
    {label && <label htmlFor={selectId} className=''></label>}
    <select
    {...props}
    id={selectId}
    ref={ref}
    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
    >
        {options?.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
    </select>
</div>
  )
});


MySelect.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
};

export default MySelect