/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2024-05-10 19:18:18
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2024-05-10 19:30:39
 * @FilePath: /fast-gateway/src/helper/feishu/const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: Cookie
 * @Description: 
 */

import { getConfig } from "@/utils";

const { FEISHU_CONFIG } = getConfig()

export const APP_ID = FEISHU_CONFIG.FEISHU_APP_ID
export const APP_SECRET = FEISHU_CONFIG.FEISHU_APP_SECRET
