import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less';
function getLoadingImage(el) {
    return el.querySelector('img[data-role=loading]');

}

function createLoadingImg() {
    const img = document.createElement('img');
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

export default function (el, binding) {
    //根据binding.value的值，决定创建还是删除加载img
    const curImg = getLoadingImage(el);
    if (binding.value) {
        if (!curImg) {
            let img = createLoadingImg();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
};
