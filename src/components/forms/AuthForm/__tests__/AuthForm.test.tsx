import React from 'react';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import AuthForm from '../index';

describe('AuthForm', () => {
  test('should show errors after submitting', async () => {
    const {getByText, getAllByText} = render(
      <AuthForm
        isFetching={false}
        onRecoveryPassword={() => {}}
        onSubmit={() => {}}
      />,
    );
    const emailInput = getByText(/email:/i);
    const passwordInput = getByText(/password:/i);

    const invalidEmailValue = 'email@';
    fireEvent.changeText(emailInput, invalidEmailValue);

    const invalidPasswordValue = '111';
    fireEvent.changeText(passwordInput, invalidPasswordValue);

    const button = getByText(/login/i);
    fireEvent.press(button);

    await waitFor(() => expect(getAllByText(/некоррек/i)).toHaveLength(1));
    expect(getAllByText(/не менее/i)).toHaveLength(1);
  });
  test('should disable submit btn if inputs empty', async () => {
    const mockedSubmit = jest.fn();

    const {getByText} = render(
      <AuthForm
        isFetching={false}
        onRecoveryPassword={() => {}}
        onSubmit={mockedSubmit}
      />,
    );
    const emailInput = getByText(/email:/i);
    const passwordInput = getByText(/password:/i);

    const invalidEmailValue = '';
    fireEvent.changeText(emailInput, invalidEmailValue);

    const invalidPasswordValue = '';
    fireEvent.changeText(passwordInput, invalidPasswordValue);

    const button = getByText(/login/i);
    fireEvent.press(button);

    expect(mockedSubmit).not.toHaveBeenCalled();
  });
  test('should handle submit on correct inputs data', async () => {
    const mockedSubmit = jest.fn();

    const {getByText} = render(
      <AuthForm
        isFetching={false}
        onRecoveryPassword={() => {}}
        onSubmit={mockedSubmit}
      />,
    );
    const emailInput = getByText(/email:/i);
    const passwordInput = getByText(/password:/i);

    fireEvent.changeText(emailInput, 'some@mail.ru');
    fireEvent.changeText(passwordInput, '123456');

    const button = getByText(/login/i);
    await act(async () => fireEvent.press(button));
    waitFor(() =>
      expect(mockedSubmit).toHaveBeenCalledWith({
        password: '123456',
        email: 'some@mail.ru',
      }),
    );
  });
});
