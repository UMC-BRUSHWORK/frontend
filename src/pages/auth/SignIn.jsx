import React from 'react';
import { IoMailOpenOutline, IoLockClosedOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as A from './Auth.style';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .email('이메일 형식이 올바르지않습니다.'),
  password: yup.string().required('비밀번호를 입력해주세요.'),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <A.Wrapper>
      <A.Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <A.FormWrapper>
          <A.InputWrapper>
            <IoMailOpenOutline size={24} color="#888" />
            <A.InputBox
              id="email"
              type="text"
              placeholder="이메일"
              {...register('email')}
            />
          </A.InputWrapper>
          {errors.email && <A.ErrorText>{errors.email.message}</A.ErrorText>}
          <A.InputWrapper>
            <IoLockClosedOutline size={24} color="#888" />
            <A.InputBox
              id="password"
              type="password"
              placeholder="비밀번호"
              {...register('password')}
            />
          </A.InputWrapper>
          {errors.password && (
            <A.ErrorText>{errors.password.message}</A.ErrorText>
          )}
        </A.FormWrapper>
        <A.Button type="submit">로그인</A.Button>
      </form>
      <Link to="/signUp">
        <A.Txt>Brushwork가 처음이신가요?</A.Txt>
      </Link>
    </A.Wrapper>
  );
}
