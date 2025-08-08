/****************************************************************************
 *  @Author earthnut
 *  @Email earthnut.dev@outlook.com
 *  @ProjectName website
 *  @FileName req.ts
 *  @CreateDate  周四  01/09/2025
 *  @Description req 请求
 ****************************************************************************/

import { typeOf } from 'a-type-of-js';

/**************************************
 *
 * 请求参数
 *
 **************************************/
export type RequestOptions<T> = RequestInit & {
  data?: string | object | T;
};

/**
 *  请求配置参数
 **/
export type ReqOptions = {
  /**
   * 域名
   **/
  domain: string;
  /**
   * 端口
   **/
  port: number;
  /**
   * headers
   **/
  headers: HeadersInit;
};

/**************************************
 *
 * 请求
 *
 **************************************/
export class Req {
  options: ReqOptions = {
    domain: 'environmentalData.domain',
    port: 9863,
    headers: {},
  };

  constructor() {
    Object.defineProperties(this, {
      options: {
        value: this.options,
        writable: false,
        enumerable: true,
        configurable: false,
      },
    });
  }

  /**  私有属性，保证 beforeRequest 只能被调用一次  */
  private beforeRequestHasCalled: boolean = false;
  /**
   * 请求前要执行的逻辑
   **/
  beforeRequest(callback: (options: ReqOptions) => void) {
    // if (this.beforeRequestHasCalled === true) {
    //   // throw new Error('该方法仅且允许调用一次');
    // } else {
    //   this.beforeRequestHasCalled = true;
    // }
    Reflect.apply(callback, null, [this.options]);
  }
  /**  私有属性，保证 afterResponse 只能被调用一次  */
  private afterResponseHasCalled: boolean = false;
  /**
   * 请求后的数据
   **/
  afterResponse() {
    // if (this.afterResponseHasCalled === true) {
    //   // throw new Error('该方法仅且允许调用一次');
    // } else {
    //   this.afterResponseHasCalled = true;
    // }
  }

  /**
   * 使用 get 获取 text 数据
   **/
  async getText(url: string) {
    const result = await this.get(url);
    if (result === null) {
      return null;
    }
    try {
      return await result.text();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  /**
   * 使用 get 获取 json 数据
   **/
  async getJson<T>(url: string): Promise<T | null> {
    const result = await this.get<T>(url);
    if (result === null) {
      return null;
    }
    try {
      return await result.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // 'Content-Type': 'application/json',

  async postJson<T>(
    url: string,
    data?: string | object,
    option?: RequestInit,
  ): Promise<T | null> {
    try {
      const result = await this.post(url, data, option);
      if (result === null) return null;
      return await result?.json();
    } catch (error) {
      console.log(error);
    }

    return null;
  }
  async postText(
    url: string,
    data?: string | object,
    option?: RequestInit,
  ): Promise<string | null> {
    try {
      const result = await this.post(url, data, option);
      if (result === null) return null;
      return await result?.text();
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  /**
   * - application/json
   * - application/x-www-form-urlencoded
   **/
  async post(
    url: string,
    data?: string | object,
    option?: RequestInit,
  ): Promise<Response | null> {
    const dataType = typeOf(data);
    const options: RequestInit =
      dataType == 'object'
        ? {
            method: 'post',
            body: JSON.stringify(data),
            ...option,
            headers: {
              'Content-Type': 'application/json',
              ...option?.headers,
            },
          }
        : dataType === 'string'
          ? {
              body: data as string,
              ...option,
              headers: {
                'Content-Type': 'application/json',
                ...option?.headers,
              },
            }
          : { ...option };
    try {
      return await this.requestData(url, options);
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  /**
   * 使用 get
   * @param url 请求的网址
   **/
  async get<T>(url: string, options?: { options?: RequestOptions<T> }) {
    return await this.requestData(url, options?.options);
  }

  private async requestData(url: string, options?: RequestInit) {
    /**  解析请求 url  */
    const _parseUrl = this.parseUrl(url);
    try {
      return await fetch(_parseUrl, {
        method: 'get',
        mode: 'cors',
        cache: 'no-cache',
        /**
         * - include 是包含 cookie
         **/
        credentials: 'include',
        redirect: 'follow',
        referrerPolicy: 'same-origin',
        referrer: 'https://lmssee.com',
        ...options,
        /**
         * 防止非原始类型数据被覆盖
         **/
        headers: {
          referer: 'lmssee.com',
          ...this.options.headers,
          ...options?.headers,
        },
      });
    } catch (error) {
      console.log(url, error);
      return null;
    }
  }

  /**
   * 解析 url 请求
   **/
  private parseUrl(url: string) {
    url = decodeURIComponent(url);
    const { options } = this;
    /**  使用 URL.parse 解析  */
    const parseUrl = URL.parse(url, `${options.domain}:${options.port}`);
    if (parseUrl === null) {
      if (url.startsWith('http')) return url;
      else {
        const originUrl = `${this.options.domain}:${
          this.options.port
        }/${url.replace(/^\//, '')}`;
        return originUrl;
      }
    }
    return parseUrl;
  }
}

export const req = new Req();
