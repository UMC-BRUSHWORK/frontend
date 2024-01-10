import React from 'react';
import { IoMailOpenOutline, IoLockClosedOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as A from './Auth.style';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
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
              {...register('email', { required: '이메일을 입력해주세요' })}
            />
          </A.InputWrapper>
          {errors.email && <A.ErrorText>{errors.email.message}</A.ErrorText>}
          <A.InputWrapper>
            <IoLockClosedOutline size={24} color="#888" />
            <A.InputBox
              id="password"
              type="password"
              placeholder="비밀번호"
              {...register('password', { required: '비밀번호를 입력해주세요' })}
            />
          </A.InputWrapper>
          {errors.password && (
            <A.ErrorText>{errors.password.message}</A.ErrorText>
          )}
        </A.FormWrapper>
        <A.Button type="submit">로그인</A.Button>
      </form>
      <Link to="/auth/signUp">
        <A.Txt>Brushwork가 처음이신가요?</A.Txt>
      </Link>
    </A.Wrapper>
  );
}
