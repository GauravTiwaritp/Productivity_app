/* eslint-disable react/prop-types */

const Text = (props) => {
  const {
    name,
    value,
    class1,
    class2,
    placeholder,
    handleChange,
    type,
    error,
  } = props;
  return (
    <>
      <label htmlFor="name" className={class1}>
        {placeholder}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        className={class2}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error ? null : (
        <p className="text-xs italic text-red-500">Please choose a password.</p>
      )}
    </>
  );
};

export default Text;
