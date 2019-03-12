# BaseCms 前端接口文档

<br/><br/>

> 说明： 接口返回数据格式必须统一，固定格式为：
``` javascript
{
	state: 1000,				// 状态码
	message: '操作成功',		// 消息
	data: {}				   // 返回的数据对象
}
```

<br/><br/>


#### 一、 登录模块

<font color="blue">1. 登录： api/login/index</font>

|参数|数据类型|是否必填|说明|
|--|--|--|--|
|username|string|yes|用户名|
|password|string|yes|密码|

``` javascript
// 接口返回值
{
	state: 1000,
	message: '操作成功',
	data: null
}
```

<br/><br/>

#### 二、 权限模块

<font color="blue">1. 列表： api/authority/list</font>

|参数|数据类型|是否必填|说明|
|--|--|--|--|
|name|string|yes|权限名称|
|url|string|yes|对应页面路径|
|icon|string|yes|菜单图标|
|order|int|no|排序，默认值0|
|state|bool|yes|是否启用： 1启用，0禁用|

``` javascript
// 接口返回值
{
	state: 1000,
	message: '操作成功',
	data: {
		total: 100,	// 总条数

		// 列表数据
		list: [{
			id: 1,
			name: '角色管理',
			url: '/roles',
			icon: 'icon icon-role',
			order: 1,
			state: 1
		}]
	}
}
```

<br/>

<font color="blue">2. 新增： api/authority/add</font>

|参数|数据类型|是否必填|说明|
|--|--|--|--|
|name|string|yes|权限名称|
|url|string|yes|对应页面路径|
|icon|string|yes|菜单图标|
|order|int|no|排序，默认值0|
|state|bool|yes|是否启用： 1启用，0禁用|

``` javascript
// 接口返回值
{
	state: 1000,
	message: '操作成功',
	data: null
}
```

<br/>

<font color="blue">3. 修改： api/authority/update</font>

|参数|数据类型|是否必填|说明|
|--|--|--|--|
|id|int|yes|权限对应的id号|
|name|string|yes|权限名称|
|url|string|yes|对应页面路径|
|icon|string|yes|菜单图标|
|order|int|no|排序，默认值0|
|state|bool|yes|是否启用： 1启用，0禁用|

``` javascript
// 接口返回值
{
	state: 1000,
	message: '操作成功',
	data: null
}
```

<br/>

<font color="blue">4. 删除： api/authority/delete</font>

|参数|数据类型|是否必填|说明|
|--|--|--|--|
|id|int|yes|权限对应的id号|

``` javascript
// 接口返回值
{
	state: 1000,
	message: '操作成功',
	data: null
}
```

<br/><br/>

#### 三、 用户模块

<br/><br/>

#### 四、 角色模块

<br/><br/>

#### 五、 设置模块