<template>
  <view v-if="openSync">

    <view class="popup-mask" :style="{'opacity': show ? '1' : '0'}" @click="positionSync == 'ad' ? '' : close()"></view>

    <view v-if="positionSync == 'center' || positionSync == 'ad'" class="popup popup-center" :class="{'popup-center-dec': positionSync == 'ad'}">
      <view class="popup-center-transStart" :class="{
        'popup-center-border': positionSync != 'ad' || background != 'none',
        'popup-center-transEnd': show
        }"
        :style="{'background': background}">
        <scroll-view scroll-y class="popup-transStart" :style="{
          'width': size.width, 
          'height': size.height,
          'max-height': size.maxHeight
        }">
          <slot />
        </scroll-view>
        <view v-if="positionSync == 'ad'" class="popup-close" @click="close"></view>
      </view>
    </view>

    <scroll-view v-else scroll-x scroll-y class="popup popup-transStart" :class="{
        'popup-top': positionSync == 'top',
        'popup-bottom': positionSync == 'bottom',
        'popup-left': positionSync == 'left',
        'popup-right': positionSync == 'right',
        'popup-transEnd': show
      }"
      :style="{
        'background': background,
        'width': size.width,
        'height': size.height,
        'max-width': size.maxWidth
      }">
      <slot />
    </scroll-view>

  </view>
</template>

<script>
  export default {
    props: {
      open: {
        type: Boolean,
        default: false
      },

      //center top bottom left right ad (初始化有效)
      position: {
        type: String,
        default: 'center'
      },

      // 宽高百分比 center top bottom ad 对应高度 left right对应宽度
      // 默认为自适应
      percent: Number,

      background: {
        type: String,
        default: '#fff'
      },
    },

    data() {
      return {
        openSync: false,
        positionSync: String,
        show: false,
        size: Object
      }
    },

    onLoad: function() {
      this.size = this._size();
      this.openSync = this.open;
      this.positionSync = this.position;
      setTimeout(() => {
        this.show = this.open;
      }, 100)
    },

    watch: {
      open: function(val) {
        this.size = this._size();
        this.openSync = val;
        this.positionSync = this.position;
        setTimeout(() => {
          this.show = val;
        }, 100)
      },
      percent: function() {
        this.size = this._size();
      }
    },

    methods: {
      close: function() {
        this.show = false;
        setTimeout(() => {
          this.openSync = false;
          this.$emit('close');
        }, 300)
      },

      _size: function() {
        let sysInfo = uni.getSystemInfoSync();
        let width, height, maxWidth, maxHeight;
        let heightPositions = ['center', 'top', 'bottom', 'ad'];
        if (heightPositions.includes(this.position)) {
          width = '100%';
          if (this.percent > 0) {
            height = sysInfo.windowHeight * (this.percent / 100) + 'px';
          } else {
            height = 'auto';
            maxHeight = sysInfo.windowHeight * (60 / 100) + 'px';
          }
        } else {
          height = '100%';
          if (this.percent > 0) {
            width = sysInfo.windowWidth * (this.percent / 100) + 'px';
          } else {
            width = 'auto';
            maxWidth = sysInfo.windowWidth * (80 / 100) + 'px';
          }
        }
        return {
          width: width,
          height: height,
          maxWidth: maxWidth,
          maxHeight: maxHeight
        }
      },

      _moveHandle: function() {}
    }
  }
</script>

<style>
  .popup-mask {
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    transition: opacity .3s;
    z-index: 1000;
  }

  .popup {
    position: fixed;
    z-index: 1001;
  }

  .popup-center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }

  .popup-center-dec {
    margin-top: -90px;
  }

  .popup-center-border {
    border-radius: 10upx;
    padding: 20upx;
  }

  .popup-center-transStart {
    opacity: 0;
    transition: all .3s;
    transform: scale(0.8);
  }

  /* CSS写在初始效果之后(否则渲染顺序原因无法覆盖之前效果) */
  .popup-center-transEnd {
    opacity: 1;
    transform: scale(1);
  }

  .popup-top,
  .popup-bottom {
    left: 0;
  }

  .popup-top {
    top: 0;
    transform: translate(0, -100%);
  }

  .popup-bottom {
    bottom: 0;
    transform: translate(0, 100%);
  }

  .popup-left,
  .popup-right {
    top: 0;
  }

  .popup-left {
    left: 0;
    transform: translatex(-100%);
  }

  .popup-right {
    right: 0;
    transform: translatex(100%);
  }

  .popup-transStart {
    transition: all .3s ease-out;
  }

  /* CSS写在初始效果之后(否则渲染顺序原因无法覆盖之前效果) */
  .popup-transEnd {
    transform: translate(0);
  }

  .popup-close {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: -90px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACVElEQVRIS6VW0VHbQBDd1Z9vbyZQAVABpAJMBaaDQAUhFWAqCFQQUwF2BU4qiFNBnArizOikL99mnnJizqeTBURf0tzdvr19u++Jac+jqgfOuQkzX+KdiM7C9hUzb1R1LiILvPeF4dwCglVV9ZGIpvG6qn7DNzOfJ+emxpiHHFAHoK7r8Xa7fWJmZPyLme+ZeT4ajdZx0Lquj1UVN7shoiNVxS0urLWreN8OQFmWV8z8RVX/FEWBrO73lbBdq6rqxns/ZeZ3qnptrZ21a88AyNx7v0RwIhqnmQwBlWUJfr4GkPft+QYgkPkT5X1L8Ba8BUFIETkBJw2Acw5k3jLzp5eWpe9GKJeqfiaiOxGZcuiY3yBURI7jg2VZbpj5SUSucwGdczNVnVhrD+N15xwa4sgYc8gtsbnsEYCIPhDRLAWJ1n6ISDsfDU57CxDOzrk5EU2KojhJWzGUrwMSBzfGjNP+Rwt778HpAjcA8+cikh26FCSU4gqHjTFo6+wUO+cUgwkAbFhZa8f7WjHKGtseRQQgvQ8SJ6LTtwJ0OEmRAsDZa0v0GATvNEd80kn/SvQKkpuyhLZurt8HkpLc6M9Am+7UfAhkp02jQVtjvDODBs3vEBqDNAMVddPOoP2vVKAc8fx0pCISO4y35jR9SEkTsVtCNCE7z2KHDVBCZv7eZxxDIEFJlzAqVd2V6yiD1nA2wXAehgK32uO9hxojeN5wUk2HcRDROljmoscyJ8EyYZ9Zo9pn+vDa2/gGqor+h+mnsnIHH3mR6ScB8dtyOfDbMt/32/IXtIjJp6aB1ZUAAAAASUVORK5CYII=);
    width: 24px;
    height: 24px;
  }

  .popup-close:after {
    content: '';
    position: absolute;
    width: 0px;
    border: 1px #F5F5F5 solid;
    top: -66px;
    bottom: 24px;
    left: 50%;
    transform: translate(-50%, -0%);
    opacity: 0.8;
  }
</style>
