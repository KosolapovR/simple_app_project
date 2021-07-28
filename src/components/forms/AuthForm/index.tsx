import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Button, View} from 'react-native-ui-lib/core';
import {TextField, Colors, KeyboardAwareScrollView} from 'react-native-ui-lib';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Некорректый email')
    .min(6, 'Не менее 6 символов!')
    .max(30, 'Не более 30 символов')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Не менее 6 символов')
    .max(30, 'Не более 30 символов')
    .required('Обязательное поле'),
});

type PropsType = {
  isFetching: boolean;
  onRecoveryPassword: () => void;
  onSubmit: (values: {password: string; email: string}) => any;
};
const AuthForm = ({
  isFetching = false,
  onRecoveryPassword,
  onSubmit,
}: PropsType) => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isValid,
    dirty,
    submitCount,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: {email: '', password: ''},
    onSubmit,
  });

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="always">
      <TextField
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        error={!!submitCount ? errors.email : undefined}
        titleColor={{focus: Colors.black, error: 'red', default: Colors.gray}}
        title={'Email:'}
        underlineColor={{
          focus: Colors.black,
          error: 'red',
          default: Colors.gray,
        }}
      />
      <TextField
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        error={!!submitCount ? errors.password : undefined}
        title={'Password:'}
        titleColor={{focus: Colors.black, error: 'red', default: Colors.gray}}
        underlineColor={{
          focus: Colors.black,
          error: 'red',
          default: Colors.gray,
        }}
      />
      <View>
        <Button
          marginB-16
          color={Colors.white}
          backgroundColor={Colors.primary}
          label="LOGIN"
          onPress={handleSubmit}
          disabled={submitCount ? !isValid || !dirty || isFetching : false}
        />
        <Button
          link
          label={'Forgot your password?'}
          color={Colors.black}
          onPress={onRecoveryPassword}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AuthForm;
