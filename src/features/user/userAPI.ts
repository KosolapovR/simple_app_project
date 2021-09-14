import axios from 'axios';
import {URLS} from '../../const/api';
import {CredentialsType} from '../../types/common';

const signIn = async (credentials: CredentialsType) => {
  return axios.post(URLS.auth, credentials);
};

export {signIn};
