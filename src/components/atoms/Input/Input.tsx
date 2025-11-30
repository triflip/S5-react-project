interface InputEmailProps {
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
    placeholder: string;
}

export default function ImputEmail({
    value,
    onChange,
    error = false,
    placeholder = "Enter your mail address",
}: InputEmailProps) {
    return (
        <input
        type="email"
        className={`input-email ${error ? "input-email--error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder= {placeholder}
        aria-invalid={error}
        />
    );
}