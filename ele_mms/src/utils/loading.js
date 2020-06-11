import { Loading, Message } from 'element-ui';

const loading = {
    LoadingInstance: null, // Loading实例
    // 打开Loading加载
    open () {
        if (this.LoadingInstance === null) {
            this.LoadingInstance = Loading.service({ target: '#main', background: 'rgba(255,255,255,0.6)' })
        }
    },
    // 关闭Loading加载
    close () {
        if (this.LoadingInstance !== null) {
            this.LoadingInstance.close()
        }
        this.LoadingInstance = null
    }
}

export default loading