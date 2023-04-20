/** 地址 */
export function genAddress(id) {
  return {
    saasId: '88888888',
    uid: `8888888820550${id}`,
    authToken: null,
    id: `${id}`,
    addressId: `${id}`,
    phone: '15185070538',
    name: `测试用户${id}`,
    countryName: '中国',
    countryCode: 'chn',
    provinceName: '贵州省',
    provinceCode: '520000',
    cityName: '贵阳市',
    cityCode: '520100',
    districtName: '南明区',
    districtCode: '520102',
    detailAddress: `首开紫郡${id}栋${id}号`,
    isDefault: `${id}` === '0' ? 1 : 0,
    addressTag: id === 0 ? '' : '公司',
    latitude: '26.553389',
    longitude: '106.776059',
    storeId: null,
  };
}

/** 地址列表 */
export function genAddressList(len = 10) {
  return new Array(len).fill(0).map((_, idx) => genAddress(idx));
}