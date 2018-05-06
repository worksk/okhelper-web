/**
 * Created by zc on 2017/3/18.
 * AJAX 同一管理
 */

import ajax from "@/utils/http.js";


//用户登录
var login = myData => ajax('post', '/api/user/login', myData);

//商品图片上传
var upLoadGoodsImgs = myData => ajax('post','/api/upload/img',myData);

//商品图片上传
var upLoadPayImgs = myData => ajax('post','/api/upload/img',myData);

//获取我的菜单列表
var getMenuCodeList=myData=>ajax('get','/api/permission/menu/me',myData);

//获取分类列表
var getCategoryList=(id)=>ajax('get','/api/categorys/'+id);

//获取商品列表
var getProductList=myData=>ajax('get','/api/product/category',myData);

export {
  login,
  getMenuCodeList,
  upLoadGoodsImgs,
  upLoadPayImgs,
  getCategoryList,
  getProductList
}
