/**
 * 为了应对有多个接口域名的情况
 * 所以没有全局配置 axios 的 baseURL
 * 放在这里配置更加灵活
 */

const base = {
  server1: 'http://www.baidu.com',
  server2: 'http://www.baidu.com',
  server3: 'http://www.baidu.com'
}

export default base
