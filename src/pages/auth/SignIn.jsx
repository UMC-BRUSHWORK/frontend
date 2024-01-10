import React from 'react';
import { IoMailOpenOutline, IoLockClosedOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import * as A from './Auth.style';

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <A.Wrapper>
      <A.Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <A.FormWrapper hasborders={false}>
          <A.InputWrapper>
            <IoMailOpenOutline size={24} color="#888" />
            <A.InputBox
              id="email"
              type="text"
              placeholder="이메일"
              ref={register({ required: true })}
              name="email"
            />
          </A.InputWrapper>
          {errors.email && <A.ErrorText>이메일을 입력해주세요</A.ErrorText>}
          <A.InputWrapper>
            <IoLockClosedOutline size={24} color="#888" />
            <A.InputBox
              id="password"
              type="password"
              placeholder="비밀번호"
              ref={register({ required: true })}
              name="password"
            />
          </A.InputWrapper>
          {errors.password && (
            <A.ErrorText>비밀번호를 입력해주세요</A.ErrorText>
          )}
        </A.FormWrapper>
        <A.Button type="submit">로그인</A.Button>
      </form>
      <A.Txt>Brushwork가 처음이신가요?</A.Txt>
    </A.Wrapper>
  );
}
