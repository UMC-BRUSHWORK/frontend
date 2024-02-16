import React, { useState } from 'react';
import { IoMailOpenOutline, IoLockClosedOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atom';
import * as A from './Auth.style';
import { postOauthLogin } from '../../apis/user';
import { useToast } from '../../hooks/useToast';
import Toast from '../../components/common/toast/Toast';

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

  const navigate = useNavigate();

  // useToast hook
  const { toastVisible, showToast } = useToast();
  const [toastMsg, setToastMsg] = useState(null);
  const [, setUserData] = useRecoilState(userState);

  const onSubmit = async (data) => {
    try {
      const { email: userEmail, password: userPassword } = data;
      const loginResponse = await postOauthLogin({ userEmail, userPassword });
      const { token } = loginResponse.result;

      localStorage.setItem('token', token);
      setUserData({
        nickname: loginResponse.result.nickname,
        userId: loginResponse.result.userId,
      });
      navigate('/');
    } catch (error) {
      const errorMsg = error.response.data.message;
      setToastMsg(errorMsg);
      showToast();
    }
  };

  return (
    <A.Wrapper>
      {toastVisible && <Toast message={toastMsg} toastVisible={toastVisible} />}
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
      <Link to="/sign-up">
        <A.Txt>Brushwork가 처음이신가요?</A.Txt>
      </Link>
    </A.Wrapper>
  );
}
