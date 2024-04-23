import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from "antd";
import DefaultInput from "../common/default-input";
import PasswordInput from "../common/password-input";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  phoneValidation,
} from "@/utils/validation";

const RegisterForm: React.FC = () => {
  const schema = yup.object().shape({
    name: nameValidation,
    email: emailValidation,
    phone: phoneValidation,
    password: passwordValidation,
    confirmPassword: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu")
      .oneOf([yup.ref("password"), ""], "Mật khẩu xác nhận phải trùng khớp"),
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
          name="name"
          label="Full Name"
          placeholder="Full Name"
          defaultValue={""}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <DefaultInput
          control={control}
          name="email"
          label="Email"
          placeholder="Email"
          defaultValue={""}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <DefaultInput
          control={control}
          name="phone"
          label="Phone Number"
          placeholder="Phone Number"
          defaultValue={""}
          error={!!errors.phone}
          helperText={errors.phone?.message}
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
        <PasswordInput
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          defaultValue={""}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
        <Button type="primary" htmlType="submit" className="w-full">
          Sign Up
        </Button>
      </Form>
    </>
  );
};
export default RegisterForm;
