import {AES, enc, mode, pad} from './crypto-ts'

/**
 * AES 加解密相关
 */
export class AESUtils {

    /**
     * AES加密
     *
     * @param content 待加密的内容
     * @param secretKey 密钥
     * @param iv 初始向量
     * @returns {string} 加密结果
     */
    public static encrypt(content: string, secretKey: string, iv: string): string {
        return AES.encrypt(content, enc.Utf8.parse(secretKey), {
            iv: enc.Utf8.parse(iv),
            mode: mode.CBC,
            padding: pad.PKCS7
        }).toString()
    }

    /**
     * AES解密
     *
     * @param content 待解密的内容
     * @param secretKey 密钥
     * @param iv 初始向量
     * @returns {string} 解密结果
     */
    public static decrypt(content: string, secretKey: string, iv: string): string {
        return AES.decrypt(content, enc.Utf8.parse(secretKey), {
            iv: enc.Utf8.parse(iv),
            mode: mode.CBC,
            padding: pad.PKCS7
        }).toString(enc.Utf8)
    }
}
