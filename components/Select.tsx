import { cn } from '@/lib/utils';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export default function Select({ label, error, options, className, ...props }: SelectProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-label mb-3 text-[#999999]">
          {label}
          {props.required && <span className="text-white ml-1">*</span>}
        </label>
      )}
      <select
        className={cn(
          'w-full bg-transparent border-0 border-b border-white/20 pb-3 text-white focus:outline-none focus:border-white/50 transition-all duration-300 cursor-pointer',
          error && 'border-red-500',
          className
        )}
        {...props}
      >
        <option value="" className="bg-[#262626]">
          Sélectionnez...
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-[#262626]">
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}

