/**
 * 随机工具类
 */
export class RandomUtils {

    private static readonly UPPER_CHARS: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    private static readonly LOWER_CHARS: string = 'abcdefghijklmnopqrstuvwxyz'

    private static readonly NUMBER_CHARS: string = '0123456789'

    /**
     * 生成一个随机整数: [min, max)
     *
     * @param min 随机范围最小值
     * @param max 随机范围最大值
     */
    public static createInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min
    }

    /**
     * 生成数字、大小写字母组成的随机字符串
     *
     * @param length 长度
     */
    public static createString(length: number): string {
        const chars = RandomUtils.UPPER_CHARS + RandomUtils.LOWER_CHARS + RandomUtils.NUMBER_CHARS
        return RandomUtils.createRandomString(chars, length)
    }

    /**
     * 生成大小写字母组成的随机字符串
     *
     * @param length 长度
     */
    public static createLetterString(length: number): string {
        const chars = RandomUtils.UPPER_CHARS + RandomUtils.LOWER_CHARS
        return RandomUtils.createRandomString(chars, length)
    }

    /**
     * 生成大写字母组成的随机字符串
     *
     * @param length 长度
     */
    public static createUpperString(length: number): string {
        return RandomUtils.createRandomString(RandomUtils.UPPER_CHARS, length)
    }

    /**
     * 生成小写字母组成的随机字符串
     *
     * @param length 长度
     */
    public static createLowerString(length: number): string {
        return RandomUtils.createRandomString(RandomUtils.LOWER_CHARS, length)
    }

    /**
     * 生成数字组成的随机字符串
     *
     * @param length 长度
     */
    public static createNumberString(length: number): string {
        return RandomUtils.createRandomString(RandomUtils.NUMBER_CHARS, length)
    }

    private static createRandomString(chars: string, length: number) {
        let result = ''
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * chars.length)
            result += chars.charAt(index)
        }
        return result
    }
}
