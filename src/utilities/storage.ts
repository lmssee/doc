'use client';
function set(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}
function get<T>(key: string): T {
  const value: string | null = localStorage.getItem(key);
  return (value != null && JSON.parse(value)) || '';
}
function getAndDel<T = boolean>(key: string): T {
  const value = get<T>(key);
  del(key);
  return value;
}
function del(key: string): void {
  return localStorage.removeItem(key);
}
function clear(): void {
  localStorage.clear();
}
function setSession(key: string, value: unknown): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

function getSession<T>(key: string): T {
  const value: string | null = sessionStorage.getItem(key);
  return (value != null && JSON.parse(value)) || '';
}
function delSession(key: string): void {
  return sessionStorage.removeItem(key);
}

export {
  del as delStorage,
  set as setStorage,
  get as getStorage,
  getAndDel as getStorageAndDel,
  clear as clearStorage,
  setSession as setSessionStorage,
  getSession as getSessionStorage,
  delSession as delSessionStorage,
};

const storage = {
  del,
  set,
  get,
  getAndDel,
  clear,
  setSession,
  getSession,
  delSession,
};

export default storage;
