import type {MessageErrors, MessageLoginError} from './api';

export const isMessageErrors = (msg: any):
    msg is MessageErrors => {
      if (msg && typeof msg === 'object') {
        if (Array.isArray(msg.errors)) {
          return msg.errors.every(
              (error: any) => typeof error.type === 'string' &&
                  typeof error.value === 'string' &&
                  typeof error.msg === 'string' &&
                  typeof error.path === 'string' &&
                  typeof error.location === 'string');
        }
      }
      return false;
    }

export const isMessageLoginError = (msg: any): msg is MessageLoginError => {
  if (msg && typeof msg === 'object') {
    if (typeof msg.msg === 'string') return true
  }
  return false
}