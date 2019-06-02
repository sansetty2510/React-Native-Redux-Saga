import {filter, findIndex, omit, cloneDeep,
    remove} from 'lodash'
import {AsyncStorage} from 'react-native';

export const addNewShopItem = (shopList, shopItemList, shopItemObject) => {
    const tempShopList = cloneDeep(shopList)
    const tempshopItemList = cloneDeep(shopItemList)
    const tempShopItemObject = omit(shopItemObject, 'shopName')
    tempshopItemList.push({
        ...tempShopItemObject,
        lastUpdateOn : new Date() + '',
        itemId : Math.random() + '',
    })
    const itemCount = (filter(tempshopItemList, { 'shopId': shopItemObject.shopId})).length;
    const shopListIndex = findIndex(tempShopList, (o) => { return o.shopId === shopItemObject.shopId; })
    tempShopList[shopListIndex].itemCount = itemCount
	return {
		updatedShopList : tempShopList,
		updatedShopItemList : tempshopItemList
	};
}
export const getShopItemList = (shopId, shopItemList) => {
    return (filter(shopItemList, { 'shopId': shopId}));
}
export const storeData = async (storeKey, storeValue) => {
    try {
        var jsonOfItem = await AsyncStorage.setItem(storeKey, JSON.stringify(storeValue));
        return jsonOfItem
    } catch (error) {
      console.log(error.message);
    }
}

export const getData = async (key) => {
    try {
      value = await AsyncStorage.getItem(key).then(
        (values) => {
            value = values;
            return values;
        });
    } catch (error) {
      console.log('Error: ',error);
    }
}
export const deleteShopDetails = (idVal, isShopList, tempDelShopList, tempDelShopItemList) => {
    const tempShopList = [...tempDelShopList]
    const tempShopItemList = [...tempDelShopItemList]
    let delShopId = null
    if(isShopList){
        remove(tempShopList, (o) => {
            return o.shopId === idVal;
        });
    }else{
        const deletedShopItemObj = remove(tempShopItemList, (o) => {
            return o.itemId === idVal;
        });
        const itemCount = (filter(tempShopItemList, { 'shopId': deletedShopItemObj[0].shopId})).length;
        const shopListIndex = findIndex(tempShopList, (o) => { return o.shopId === deletedShopItemObj[0].shopId; })
        tempShopList[shopListIndex].itemCount = itemCount
        delShopId = deletedShopItemObj[0].shopId
    }
    return{
        deletedShopList : tempShopList, 
        deletedShopItemList : tempShopItemList,
        delShopId : delShopId
    }
}