export default function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="
          peer block w-full px-3 pt-4 pb-2 text-sm
          bg-transparent rounded-lg
          border border-gray-300
          appearance-none outline-none
          focus:border-purple-600 focus:ring-0
        "
      />
      <label
        htmlFor={id}
        className="
          absolute left-3 top-2 z-10 origin-[0]
          bg-white px-1 text-sm text-gray-500
          transition-all duration-300 transform
          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:-translate-y-1/2
          peer-placeholder-shown:scale-100
          peer-focus:top-2
          peer-focus:-translate-y-4
          peer-focus:scale-75
          peer-focus:text-purple-600
        "
      >
        {label}
      </label>
    </div>
  );
}
