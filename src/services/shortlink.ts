import type {Link, MessageErrors, MessageLoginError, ShortLinks, UserID} from '../types/api';
import {isMessageErrors, isMessageLoginError} from '../types/validation-type';

const API_URL_BASE = import.meta.env.PUBLIC_URL_API_BASE

export const getLinks =
    async () => {
  const res = await fetch(API_URL_BASE + 'api/links');
  const {links} = (await res.json()) as ShortLinks;
  return links
}

export const getLinkByUser =
    async (_user: string) => {
  const {token, user} = JSON.parse(_user)

  const res = await fetch(
      API_URL_BASE + 'api/links/user/' + user._id,
      {headers: {'Content-Type': 'application/json', 'x-token': token}});
  const data = await res.json() as ShortLinks | MessageErrors
  if (!isMessageErrors(data)) {
    return data.links
  }
  return []
}

export const getLinksByTitle =
    async ({title}: {title: string}) => {
  const res = await fetch(API_URL_BASE + title.trim());

  const data = await res.json()
  return data
}

export const createLink =
    async (title: string, url: string) => {
  const {user} = JSON.parse(document.cookie.split('=')[1]);
  if (!title.trim() || !url.trim()) {
    alert('Title and URL fields are required. Please try again.')
  }

  try {
    new URL(url)
  } catch (e) {
    alert('URL is not valid!')
  }

  const regEx = new RegExp('[a-zA-Z0-9_]+')

  if (!regEx.test(title)) {
    alert('Title is not valid!')
  }

  const res = await fetch(API_URL_BASE + 'api/links', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title, url, userId: user._id})
  })
  const data = await res.json() as MessageErrors | Link

  if (isMessageErrors(data)) {
    let msgError = 'Something went wrong!'
    data.errors.forEach(err => {
      if (err.msg === `The title: ${title} already exists in the database`) {
        msgError = err.msg
        return
      }
    })
    alert(msgError)
    return
  }
  alert(data.title + ' has been created successfully!')
  location.href = '/me'
}

export const updateLink =
    async (linkId: string, title: string, url: string) => {
  // const {user} = JSON.parse(document.cookie.split('=')[1]);
  if (!title.trim() || !url.trim()) {
    alert('Title and URL fields are required. Please try again.')
  }

  try {
    new URL(url)
  } catch (e) {
    alert('URL is not valid!')
  }

  const regEx = new RegExp('[a-zA-Z0-9_]+')

  if (!regEx.test(title)) {
    alert('Title is not valid!')
  }

  const res = await fetch(API_URL_BASE + 'api/links/' + linkId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({_id: linkId, title, url})
  })
  const data = await res.json() as MessageErrors | Link

  if (isMessageErrors(data)) {
    let msgError = 'Something went wrong!'
    data.errors.forEach(err => {
      if (err.msg === `The title: ${title} already exists in the database`) {
        msgError = err.msg
        return
      }
    })
    alert(msgError)
    return
  }
  alert(data.title + ' has been updated successfully!')
  location.href = '/me'
}

export const login =
    async (pass: string, email: string) => {
  const res = await fetch(API_URL_BASE + 'api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({pass, email})
  });
  const data = await res.json() as MessageLoginError  // or data

  if (isMessageLoginError(data)) {
    alert('User/Password invalid!')
    return
  }
  const d = new Date();
  d.setTime(d.getTime() + (60 * 60 * 1000));
  const expires = 'expires=' + d.toUTCString();
  document.cookie = 'user=' + JSON.stringify(data) + ';' + expires + ';path=/';
  location.href = '/'
}

export const register = async (name: string, email: string, pass: string) => {
  if (!name.trim() || !email.trim() || !pass.trim()) {
    alert('Name, email and password fields are required. Please try again.')
    return
  }

  const regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[=+-@#$%&])(?=.{8,})/
  if (!regEx.test(pass)) {
    alert(
        'The password must have at least 1 uppercase letter, at least 1 digit, at least 1 non-alphanumeric character, and a minimum length of 8.')
    return
  }
  const res = await fetch(API_URL_BASE + 'api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({pass, name, email})
  })

  const data = (await res.json()) as MessageErrors | Link
  if (isMessageErrors(data)) {
    alert(data.errors[0])
    return
  }
  alert('Your account has be created!')
  location.href = '/me'
}