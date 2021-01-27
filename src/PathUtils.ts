/**
 * 文件路径工具类
 */
export class PathUtils {
    /**
     * Window 文件路径转换为 Unix 文件路径
     */
    public static toUnixPath(path: string): string {
        return path.replace(/\\/g, '/')
    }
}
