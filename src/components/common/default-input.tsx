import { Controller } from "react-hook-form";
import { Form, Input } from "antd";
interface CustomInputProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  error: boolean;
  helperText: string | undefined;
  defaultValue: string | number | undefined;
}
const DefaultInput: React.FC<CustomInputProps> = ({
  control,
  name,
  label,
  placeholder,
  error,
  helperText,
  defaultValue,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Form.Item
            label={label}
            required
            validateStatus={error ? "error" : "success"}
            help={helperText}
          >
            <Input type="text" {...field} placeholder={placeholder} />
          </Form.Item>
        )}
      />
    </>
  );
};
export default DefaultInput;
