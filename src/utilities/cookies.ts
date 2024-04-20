"use server";

import { cookies } from "next/headers";

export function getCookie(name: string) {
  return cookies().get(name)?.value;
}

export function setCookie(key: string, name: string) {
  return cookies().set(key, name);
}

export function deleteCookie(key: string) {
  return cookies().delete(key);
}

export function getCookies() {
  return cookies().getAll();
}
