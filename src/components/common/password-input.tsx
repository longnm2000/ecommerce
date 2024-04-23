import { Controller } from "react-hook-form";
import { Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
interface CustomInputProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  error: boolean;
  helperText: string | undefined;
  defaultValue: string | number | undefined;
}
const PasswordInput: React.FC<CustomInputProps> = ({
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
            <Input.Password
              {...field}
              placeholder={placeholder}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        )}
      />
    </>
  );
};
export default PasswordInput;
