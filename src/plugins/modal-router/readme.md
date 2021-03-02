### modal-router的实现思路
通过在vue实例下添加属性modals存储弹窗,并提供方法维护当前的弹窗

> 缺点: 将modals写入了vue实例中,添加了属性,导致对ts支持度的问题
> 考虑: 是否可以使用composition api,来达到对ts友好的支持度
> 问题: 改造后,使用composition api,来处理的数据如何存储
> 是否需要在全局添加一个对弹窗的数据存储管理

---
vue-modal-router的原理
> 先通过将routes进行收集,放入modalRouter实例中做维护
> modal-router-view 用于存储所有的弹窗
> 通过在vue实例上添加watch 用于监听_modalComponents的变化，来打开modalComponent或销毁modalComponent
> 通过操作_modalComponents


