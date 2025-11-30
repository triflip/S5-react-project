interface InputEmailProps {
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
    placeholder: string;
    required?: boolean; 
    className?: string;
}

export default function InputEmail({
    value,
    onChange,
    error = false,
    placeholder = "Enter your mail address",
    required = false,
}: InputEmailProps) {
    return (
        <input
        type="email"
        className={`input-email ${error ? "input-email--error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder= {placeholder}
        aria-invalid={error}
        required={required}
        />
    );
}