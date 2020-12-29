<template>
  <div class="modalBox" v-show="visible">
    <div class="modalBg"></div>
    <div class="modalContainer">
      <div class="modalheader">
        弹窗
        <span @click="doClose('close')">x</span>
      </div>
      <div class="modalContent">
        <!-- <img v-bind:src="type === 'warning' ? warnImgSrc : confirmImgSrc" /> -->
        <div class="infoBox">
          <div class="title">{{ title }}</div>
          <div class="content">
            <template v-if="typeof message !== 'string'">
              <div v-for="(item, index) in message" :key="index">
                {{ item }}
              </div>
            </template>
            <div v-else>{{ message }}</div>
          </div>
        </div>
      </div>
      <!-- <div class="confirmBtn" @click="doClose('confirm')">确定</div> -->
      <div class="modalFooter">
        <div class="confirmBtn" @click="doClose('confirm')">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default  {
        data(){
            return{
                
            }
        }
    }

</script>
<style lang="scss" scoped>
.modalBox {
  .modalBg {
    position: fixed;
    z-index: 3001;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .modalContainer {
    max-width: 450px;
    min-width: 350px;
    max-height: 250px;
    background: #ffffff;
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 3002;
    border-radius: 3px;
    border: 1px solid #d9dbe2;
    .modalheader {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-indent: 5px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      background: #f2f3f4;
      box-shadow: inset 0 -1px 0 0 #d9dbdf;
      color: black;
      font-weight: bold;
      span {
        font-size: 16px;
        color: #999999;
        display: block;
        float: right;
        margin-right: 5px;
        cursor: pointer;
      }
    }
    .modalContent {
      margin-top: 10px;
      padding: 0 10px;
      // width: 100%;
      height: 150px;
      overflow-x: auto;
      display: flex;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .infoBox {
        margin-top: 5px;
        width: 100%;
        padding-right: 10px;
        .title {
          background: #ffffff;
          // margin-top: 8px;
          font-size: 15px;
          color: #000000;
          text-align: left;
          height: 15px;
          line-height: 15px;
          padding: 0px;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }
        .content {
          margin-top: 10px;
          font-size: 15px;
          color: #000000;
          text-align: left;
          /* line-height: 18px; */
          padding: 0;
          text-overflow: ellipsis;
          div {
            margin-top: 5px;
          }
        }
      }
    }

    .confirmBtn {
      // margin-left:153px;
      // margin-top:25px;
      margin: 0 auto;
      width: 94px;
      height: 29px;
      margin-top: 10px;
      border: 1px solid #4a90e2;
      background: #c3e0ff;
      border-radius: 2px;
      line-height: 27px;
      text-align: center;
      font-size: 14px;
      color: #000000;
      cursor: pointer;
    }
    .modalFooter {
      width: 100%;
      height: 48px;
      background: #f2f3f4;
      box-shadow: inset 0 -1px 0 0 #d9dbdf;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      overflow: hidden;
    }
  }
}
