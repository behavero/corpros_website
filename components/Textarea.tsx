import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  isValid?: boolean;
}

export default function Textarea({ label, error, isValid, className, ...props }: TextareaProps) {
  const showValidation = props.value && String(props.value).length > 0;
  
  return (
    <div className="w-full relative">
      {label && (
        <label className="block text-label mb-3 text-[#999999]">
          {label}
          {props.required && <span className="text-white ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          className={cn(
            'w-full bg-transparent border-0 border-b pb-3 text-white placeholder:text-[#999999] focus:outline-none transition-all duration-300 resize-none min-h-[120px]',
            error 
              ? 'border-red-500 focus:border-red-500' 
              : isValid && showValidation 
                ? 'border-[#EFBF04]/50 focus:border-[#EFBF04] focus:shadow-[0_1px_8px_rgba(239,191,4,0.15)]' 
                : 'border-white/20 focus:border-white/50',
            className
          )}
          {...props}
        />
        {showValidation && (
          <div className="absolute right-0 top-3">
            {error ? (
              <X size={18} className="text-red-500" />
            ) : isValid ? (
              <Check size={18} className="text-[#EFBF04]" strokeWidth={2} />
            ) : null}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}

