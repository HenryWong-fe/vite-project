// hooks的设计
// 需要实现哪些功能
// 跳转,关闭,全部关闭
import { ModalRouter } from "./index";
export default function useModalRouter(ctx?: any) {
  const _ctx = ctx
  const modalRouter = _ctx.$modalRouter || null;
  if (!modalRouter) {
    console.warn('请先注册并使用vue-modal-router')
    return false
  }
  const push = modalRouter.push;
  const close = modalRouter.close;
  const closeAll = modalRouter.closeAll;
  return {
    push,
    close,
    closeAll
  }
}
