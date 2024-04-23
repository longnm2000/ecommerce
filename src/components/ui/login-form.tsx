import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from "antd";
import DefaultInput from "../common/default-input";
import PasswordInput from "../common/password-input";
import { emailValidation, passwordValidation } from "@/utils/validation";

const LoginForm: React.FC = () => {
  const schema = yup.object().shape({
    email: emailValidation,
    password: passwordValidation,
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        <DefaultInput
          control={control}
          name="email"
          label="Email"
          placeholder="Email"
          defaultValue={""}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <PasswordInput
          control={control}
          name="password"
          label="Password"
          placeholder="Password"
          defaultValue={""}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="primary" htmlType="submit" className="w-full">
          Sign In
        </Button>
      </Form>
    </>
  );
};
export default LoginForm;
