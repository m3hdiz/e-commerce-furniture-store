import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  id: string;
  label: string;
  value: string;
  onChange?: (...args: any) => any;
}
const TextField = ({
  htmlFor,
  id,
  label,
  value,
  onChange = () => {},
  ...props
}: FormFieldProps) => {
  return (
    <div className="grid gap-3">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input id={id} {...props} value={value} onChange={onChange} />
    </div>
  );
};

export default TextField;
