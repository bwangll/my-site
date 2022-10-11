/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 多久后消息
 * @param {HTMLElement} container 容器， 消息显示在该容器的正中；如果不传，则显示在页面正中
 */
import {default as getComponentRootDom} from "@/utils/getComponentRootDom";
import Icon from "@/components/Icon";
import styles from '@/utils/showMessage.module.less'

export default function (options = {}) {
    const content = options.content || '';
    const type = options.type || 'info';
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    //创建消息元素
    const div = document.createElement("div");
    const el = getComponentRootDom(Icon, {type});
    div.innerHTML = `<span>${el.outerHTML} ${content}</span>`;
    const typeClassName = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClassName}`;

    // 容器的position是否该动过
    if (getComputedStyle(container).position === 'static') {
        container.style.position = 'relative';
    }
    container.appendChild(div);
    // 浏览器强行渲染
    div.clientHeight; // 导致reflow

    // 回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    // 等一段时间，消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.addEventListener(
            "transitionend",
            function () {
                div.remove();
                // 运行回调函数
                options.callback && options.callback();
            },
            {once: true}
        );
    }, duration);
};
