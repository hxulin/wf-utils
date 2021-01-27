/**
 * 格式化文件大小
 *
 * @param value 字节大小
 * @returns {string} 格式化的文件大小
 */
const formatSize = (value: any): string => {
    if (!value) {
        return '0 Bytes';
    }
    const unitArr = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const srcSize = parseFloat(value);
    const index = Math.floor(Math.log(srcSize) / Math.log(1024));
    const size = srcSize / Math.pow(1024, index);
    return size.toFixed(2) + unitArr[index];  // 保留的小数位数
};

const fileUtils1 = {
    formatSize
};

export {fileUtils1 as FileUtils};
