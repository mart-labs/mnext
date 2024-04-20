"use server";

import { cookies } from "next/headers";

export async function getCookie(name: string) {
  return cookies().get(name)?.value;
}

export async function setCookie(key: string, name: string) {
  return cookies().set(key, name);
}

export async function deleteCookie(key: string) {
  return cookies().delete(key);
}

export async function getCookies() {
  return cookies().getAll();
}
