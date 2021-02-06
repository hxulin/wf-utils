/**
 * 判断是否为小数的正则表达式
 */
const FloatRule = /^(-?\d+)(.\d+)?$/
/**
 * 判断是否为整数的正则表达式
 */
const IntegerRule = /^-?\d+$/
/**
 * 判断是否为邮箱的正则表达式
 */
const EmailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+(([.\-])[A-Za-z0-9]+)*\.[A-Za-z]+$/
/**
 * 判断是否为 ipv4 地址的正则表达式
 */
const Ipv4Rule = /^((25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(25[0-5]|2[0-4]\d|1?\d?\d)$/
/**
 * 判断是否为固定电话的正则表达式
 */
const TelephoneRule = /^0[1-9][0-9]{1,2}-[2-8][0-9]{6,7}$/
/**
 * 判断是否为移动电话的正则表达式
 * 注：不再判断二三位的数字，具体参考：http://caibaojian.com/phone-regexp.html
 */
const MobileRule = /^1\d{10}$/
/**
 * 判断是否为域名的正则表达式
 */
const DomainRule = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/
/**
 * 判断是否为邮政编码的正则表达式
 */
const PostcodeRule = /^\d{6}$/

/**
 * 判断是否为身份证的正则表达式
 *
 * 第一位不可能是 0
 * 第二位到第六位可以是 0-9
 * 第七位到第十位是年份, 所以七八位为 19 或者 20
 * 十一位和十二位是月份, 这两位是 01-12 之间的数值
 * 十三位和十四位是日期, 是从 01-31 之间的数值
 * 十五, 十六, 十七都是数字 0-9
 * 十八位可能是数字 0-9, 也可能是 X
 */
const IDCardRule = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|12])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/

/**
 * 字符串工具类
 */
export class StringUtils {
    /**
     * 判断字符串是否为空: null | undefined | ''
     */
    public static isEmpty(str: string): boolean {
        return str == null || str === ''
    }

    /**
     * 判断字符串是否非空
     */
    public static isNotEmpty(str: string): boolean {
        return !StringUtils.isEmpty(str)
    }

    /**
     * 判断一个字符串是否为空白的字符串
     */
    public static isBlank(str: string): boolean {
        return StringUtils.isEmpty(str) || str.trim() === ''
    }

    /**
     * 判断一个字符串是否为非空白的字符串
     */
    public static isNotBlank(str: string): boolean {
        return !StringUtils.isBlank(str)
    }

    /**
     * 判断字符串是否为小数
     */
    public static isFloat(str: string): boolean {
        return FloatRule.test(str)
    }

    /**
     * 判断字符串是否为整数
     */
    public static isInteger(str: string): boolean {
        return IntegerRule.test(str)
    }

    /**
     * 判断邮箱的格式是否正确
     */
    public static isEmail(str: string): boolean {
        return EmailRule.test(str)
    }

    /**
     * 判断 ipv4 地址的格式是否正确
     */
    public static isIpv4(str: string): boolean {
        return Ipv4Rule.test(str)
    }

    /**
     * 判断字符串是否为正确的端口号
     * 正确的端口号是 1-65535
     */
    public static isPort(str: string): boolean {
        return (
            StringUtils.isInteger(str) &&
            parseInt(str) >= 1 &&
            parseInt(str) <= 65535
        )
    }

    /**
     * 判断是否为固定电话
     */
    public static isTelephone(str: string): boolean {
        return TelephoneRule.test(str)
    }

    /**
     * 判断是否为移动电话
     */
    public static isMobile(str: string): boolean {
        return MobileRule.test(str)
    }

    /**
     * 判断是否为域名
     */
    public static isDomain(str: string): boolean {
        return DomainRule.test(str)
    }

    /**
     * 判断是否为邮政编码
     */
    public static isPostcode(str: string): boolean {
        return PostcodeRule.test(str)
    }

    /**
     * 判断是否为身份证号
     * https://blog.csdn.net/gqzydh/article/details/90295842
     */
    public static isIDCard(str: string): boolean {
        if (IDCardRule.test(str)) {
            // 加权因子
            const weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
            // 校验码
            const checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
            // 最后一位字符
            const lastChar = str[17]
            // 前 17 位字符
            const top17 = str.substring(0, 17)
            // ISO 7064:1983.MOD 11-2 算法校验最后一位是否正确
            const arr = top17.split('')
            let num = 0
            for (let i = 0; i < arr.length; i++) {
                num += parseInt(arr[i]) * weightFactor[i]
            }
            const remainder = num % 11  // 取余
            const checkDigit = checkCode[remainder]
            return lastChar === checkDigit
        }
        return false
    }

    /**
     * 字符串格式化, 替换字符串中的 {0}、{1} 等占位符
     * 类似于 Java 中的 MessageFormat.format 方法
     */
    public static format(str: string, ...args: string[]): string {
        return str.replace(
            /{(\d+)}/g,
            (match, index) => (args.length > index ? args[index] : '')
        )
    }
}
