import React from 'react';
import {
  IoMailOpenOutline,
  IoLockClosedOutline,
  IoPersonOutline,
  IoHappyOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as A from './Auth.style';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .email('이메일 형식이 올바르지않습니다.'),
  password: yup
    .string()
    .required('영문, 숫자포함 8자리를 입력해주세요.')
    .min(8, '최소 8자 이상 입력해주세요.')
    .matches(
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,}$/,
      '영문,숫자,특수문자 최소 2가지 이상을 입력해주세요.',
    ),
  passwordConfirm: yup
    .string()
    .required('비밀번호 확인을 해주세요.')
    .oneOf([yup.ref('password')], '비밀번호를 다시 입력해주세요.'),
  name: yup.string().required('이름을 입력해 주세요'),
  nickname: yup.string().required('닉네임을 입력해 주세요'),
  phone: yup.string().required('휴대전화번호를 입력해 주세요'),
});

export default function SignUp() {
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
      <A.Title>Brushwork가 처음이신가요?</A.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <A.FormWrapper>
          <A.InputWrapper top error={!!errors.email}>
            <IoMailOpenOutline size={24} color="#888" />
            <A.InputBox
              id="email"
              type="text"
              placeholder="이메일"
              {...register('email')}
            />
          </A.InputWrapper>
          {errors.email && <A.ErrorText>{errors.email.message}</A.ErrorText>}

          <A.InputWrapper error={!!errors.password}>
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

          <A.InputWrapper bottom error={!!errors.passwordConfirm}>
            <IoLockClosedOutline size={24} color="#888" />
            <A.InputBox
              id="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
              {...register('passwordConfirm')}
            />
          </A.InputWrapper>
          {errors.passwordConfirm && (
            <A.ErrorText>{errors.passwordConfirm.message}</A.ErrorText>
          )}
        </A.FormWrapper>

        <A.FormWrapper>
          <A.InputWrapper top error={!!errors.name}>
            <IoPersonOutline size={24} color="#888" />
            <A.InputBox
              id="name"
              type="text"
              placeholder="이름"
              {...register('name')}
            />
          </A.InputWrapper>
          {errors.name && <A.ErrorText>{errors.name.message}</A.ErrorText>}

          <A.InputWrapper error={!!errors.nickname}>
            <IoHappyOutline size={24} color="#888" />
            <A.InputBox
              id="nickname"
              type="text"
              placeholder="닉네임"
              {...register('nickname')}
            />
          </A.InputWrapper>
          {errors.nickname && (
            <A.ErrorText>{errors.nickname.message}</A.ErrorText>
          )}
          <A.InputWrapper bottom error={!!errors.phone}>
            <IoPhonePortraitOutline size={24} color="#888" />
            <A.InputBox
              id="phone"
              type="text"
              placeholder="휴대전화번호"
              {...register('phone')}
            />
          </A.InputWrapper>
          {errors.phone && <A.ErrorText>{errors.phone.message}</A.ErrorText>}
        </A.FormWrapper>
        <A.Button type="submit">가입하기</A.Button>
      </form>
    </A.Wrapper>
  );
}
