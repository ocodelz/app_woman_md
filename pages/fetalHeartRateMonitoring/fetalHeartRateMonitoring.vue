<template>
	<view class="flex flex-column" :style="'height:' + pageHeight + 'px'">
		<view class="wrap " style="height: 150rpx;" v-if="tapState == 0">
			<u-row gutter="16" justify="around">
				<u-col span="3" class="u-col-item">
					<view class="flex justify-between">
						<text class="font-md font-weight-normal" style="min-height: 43rpx;">胎心一</text>
					</view>
					<view class="flex justify-center u-col-lh">
						<text class="font-lg font-weight-bold"
							:class="(flash == false) && (taixinlv1 > 160 || taixinlv1 < 120) ? 'flash' : '' ">{{ taixinlv1 !== '' ? taixinlv1 : '---' }}</text>
					</view>
				</u-col>
				<u-col span="3" class="u-col-item">
					<view class="flex justify-between">
						<text class="font-md font-weight-normal">胎心二</text>
					</view>
					<view class="flex justify-center u-col-lh">
						<text class="font-lg font-weight-bold"
							:style="taixinlv2 !== '' ? 'color:#9d5a90' : ''">{{ taixinlv2 !== '' ? taixinlv2 : '---' }}</text>
					</view>
				</u-col>
				<u-col span="3" class="u-col-item">
					<view class="flex justify-between">
						<text class="font-md font-weight-normal">宫缩压</text>
					</view>
					<view class="flex justify-center u-col-lh">
						<text class="font-lg font-weight-bold"
							:style="gongsuoya !== '' ? 'color:#28a745' : ''">{{ gongsuoya !== '' ? gongsuoya : '---' }}</text>
					</view>
				</u-col>
				<u-col span="3" class="u-col-item">
					<text class="font-md font-weight-normal">自动胎动</text>
					<view class="flex justify-center u-col-lh">
						<text class="font-lg font-weight-bold"
							:style="fetalHeartRate.manualFetalMovement !== '' ? 'color:#007bff' : ''">
							{{ fetalHeartRate.manualFetalMovement != '' ? fetalHeartRate.manualFetalMovement : '---' }}
						</text>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="flex flex-wrap w-100 p-2" v-if="audit">
			<view class="font-sm" style="width:33.33%;">姓名:{{informationPregnantWomen.name}}</view>
			<view class="font-sm" style="width:33.33%;">手机号:{{informationPregnantWomen.phone}}</view>
			<view class="font-sm" style="width:33.33%;">日期:{{rpt_result.userInfo.date}}</view>
			<view class="font-sm" style="width:33.33%;">年龄:{{informationPregnantWomen.age}}</view>
			<view class="font-sm" style="width:33.33%;">孕周:{{informationPregnantWomen.gestationalWeek}}</view>
			<view class="font-sm" style="width:33.33%;">时长:{{rpt_result.userInfo.duration}}</view>
			<view class="font-sm" style="width:33.33%;">无刺激实验(NST)</view>
			<view class="font-sm" style="width:33.33%;">时间:{{rpt_result.userInfo.time}}</view>
		</view>
		<!-- 胎心 -->
		<view id="chart-taixin" class="flex flex-1" style="position: relative;">
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="chart-size" disable-scroll="true"
				@touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA">
			</canvas>
		</view>
		<!-- 宫缩压 -->
		<view id="chart-gsy" class="flex flex-1" style="margin-top: -20rpx;">
			<!-- :style="'height:'+chart2Height+'px'", -->
			<canvas canvas-id="canvasLineB" id="canvasLineB" class="chart-size" disable-scroll="true"
				@touchstart="touchLineB" @touchmove="moveLineB" @touchend="touchEndLineB"></canvas>
		</view>

		<!-- 开始计时-->
		<view v-if="tapState == 0" class="flex rounded-left w-100 align-center justify-center"
			style="min-height:120rpx;margin-top: -40rpx;">
			<view class="flex align-center " style="border-radius: 50rpx;background-color: #fc979f;">
				<view class="ml-5 flex align-center">
					<!-- <u-icon v-if="isStop" name="play-circle" size="60" @click="tapState == 0 ? handleStartTime() : ''"></u-icon>
					<u-icon v-else name="pause-circle" size="60" @click="handleStartTime"></u-icon> -->
					<view v-if="isStop" @click="tapState == 0 ? handleStartTime() : ''">开始</view>
					<view v-else @click="handleEndTime">停止</view>
				</view>
				<view class="ml-5 flex align-center justify-center mr-5 "
					style=" border-radius: 12rpx;height: 50rpx;width: 130rpx; background-color: rgba(0,0,0,0.5);">
					<uni-countdown @longTime="longTime" ref="setTime" :showDay="false" @stopChange="stopChange"
						@submitChange="submitChange" :hour="hour" :minute="minute" :second="second"></uni-countdown>
				</view>
				<view class="flex align-center justify-center mr-5" v-show="isStop == false"
					@click="isStop == false ? handleClear() : ''">
					<view class="text-white rounded pl-2 pr-2"
						:class="isStop == false && isSwitchFlash == true && switchFlash == true ? 'switchFlash' : 'bg-success'">
						{{jianhuzhuantai}}
					</view>
				</view>
				<view class="ml-2 flex flex-row align-center flex-1" v-show="displays">
					<view class="p-1">实时</view>
					<view class="flex align-center">
						<u-switch size="55" active-color="rgba(0, 170, 0, 0.7)"
							inactive-color="rgba(237, 224, 231, 1.0)" @change="handleIsSwitch" v-model="checked"
							:loading="loading" :disabled="disabled"></u-switch>
					</view>
				</view>
			</view>
		</view>
		<view class="flex align-center justify-center"
			v-if="isStop == false && isSwitchFlash == true && switchFlash == true"
			style="min-height: 80rpx;margin-top: -20rpx;">
			<text class="text-danger"
				:class="isStop == false && isSwitchFlash == true && switchFlash == true ? 'flash' : ''">当前未开启实时模式，请点黄色闪动区域开启实时！</text>
		</view>
		<u-top-tips ref="uTips"></u-top-tips>
		<u-modal :show-title="false" :show-confirm-button="false" v-model="show" confirm-color="#000" negative-top="90">
			<view class="flex align-center justify-center flex-column" style="height: 280rpx;">
				<view class="flex align-center justify-center flex-column">
					<view class="mb-3">
						<u-image width="44" height="44" src="../../static/image/probeConnection/login.gif"></u-image>
					</view>
					<view class="ml-3 mr-3 flex align-center flex-column justify-center">
						<text class="mb-3">请开启仪器,等待仪器自动连接,连接成功后会提示连接成功......</text>
						<u-count-down @end="handleEnd" :timestamp="timestamp" :show-days="false" :show-hours="false"
							:show-minutes="false" show-seconds></u-count-down>
					</view>
				</view>
			</view>
		</u-modal>
		<u-popup mode="center" v-model="isPurchase" width="700" height="500" border-radius="12" safe-area-inset-bottom
			v-if="purchaseState == 0">
			<text class="flex align-center justify-center font-md font-weight-bold mt-4">以下设备即将过期</text>
			<scroll-view scroll-y="true" style="height: 300rpx;">
				<view class="flex flex-column mt-3 ml-3" v-for="(item,index) in updateList" :key="index">
					<text>设备名称: {{item.e_name}}</text>
					<text>设备类型: {{item.e_type}}</text>
					<text>到期时间: {{item.return_time}}</text>
				</view>
			</scroll-view>
			<view class="flex align-center justify-center mt-2">
				<u-button type="error" size="medium" @click="isPurchase = false">我知道了</u-button>
			</view>
		</u-popup>
		<scroll-view class="font-sm pb-2" scroll-y style="height: 400rpx;" v-if="audit">
			<text class="pl-2">胎心率：</text>
			<text>基线:{{rpt_result.txl.jx}} bpm</text>
			<text style="padding-left: 62rpx;">细变异:{{rpt_result.txl.xby}} bpm</text>
			<view class="pl-3 flex" style="line-height: 60rpx;">
				<view style="width: 34%;">加 速：非周期加速:{{rpt_result.accelerate.fzqjs}}次</view>
				<view class="pl-5" style="width: 30%;">周期加速:{{rpt_result.accelerate.zqjs}}次</view>
				<view class="pl-5" style="width: 33%;">不明显加速:{{rpt_result.accelerate.bmxjs}}次</view>
			</view>
			<view class="pl-3 flex">
				<view class="flex-shrink">减 速：</view>
				<view class="flex flex-wrap">
					<view style="width: 33%;">早发减速:{{rpt_result.decelerate.zfjs}}次</view>
					<view style="width: 30%;">迟发减速:{{rpt_result.decelerate.cfjs}}次</view>
					<view class="pl-3 flex-1">重度变化减速:{{rpt_result.decelerate.zdbhjs}}次</view>
					<view style="width: 33%;line-height: 60rpx;">延时减速:{{rpt_result.decelerate.ysjs}}次</view>
					<view style="width: 33%;line-height: 60rpx;">轻度变化减速:{{rpt_result.decelerate.qdbhjs}}次</view>
				</view>
			</view>
			<view class="pl-2">胎动次数：{{rpt_result.tdcs}}次</view>
			<view class="pl-3 flex" style="line-height: 50rpx;">
				<view class="flex-shrink">宫 缩：</view>
				<view class="flex flex-wrap">
					<view class="flex-shrink" style="width: 100%;">宫缩波形：{{rpt_result.gs.gsbx}}型</view>
					<view class="flex-shrink" style="width:33%;">相对幅度:{{rpt_result.gs.xdfd}}%</view>
					<view class="flex-shrink" style="width:30%;">持续时间：{{rpt_result.gs.cxsj}}秒</view>
					<view class="pl-3 flex-1 flex-shrink">时间间隔：{{rpt_result.gs.sjjg}}秒</view>
					<view class="flex-shrink" style="width:33%;">正常宫缩：{{rpt_result.gs.zcgs}}次</view>
					<view class="flex-shrink" style="width:33%;">过强宫缩：{{rpt_result.gs.gqgs}}次</view>
					<view class="flex-shrink flex-1 pl-1">过弱宫缩：{{rpt_result.gs.grgs}}次</view>
				</view>
			</view>
			<view class="pl-3" style="line-height: 50rpx;">结 果：{{rpt_result.result}}次</view>
			<view class="w-100 flex align-center justify-center font-md font-weight-bold">NST评分</view>
			<u-table style="table-layout: fixed" font-size="24">
				<u-tr>
					<u-td width="130rpx">项目</u-td>
					<u-td width="130rpx">0分</u-td>
					<u-td width="130rpx">1分</u-td>
					<u-td width="130rpx">2分</u-td>
					<u-td width="160rpx">本例情况</u-td>
					<u-td width="70rpx">评分</u-td>
				</u-tr>
				<u-tr style="height: 100rpx;">
					<u-td width="130rpx" class="text-ellipsis">胎心率基线（bpm）</u-td>
					<u-td width="130rpx" class="text-ellipsis">&lt;100或&gt;&lt;180&gt;</u-td>
					<u-td width="130rpx" style="word-break:break-all;">100~110,160~180</u-td>
					<u-td width="130rpx">100~160</u-td>
					<u-td width="160rpx">{{rpt_result.txljx.blqk}}</u-td>
					<u-td width="70rpx">{{rpt_result.txljx.pf}}</u-td>
				</u-tr>
				<u-tr>
					<u-td width="130rpx">细变异</u-td>
					<u-td width="130rpx">&lt;=5</u-td>
					<u-td width="130rpx">6~9或&gt;25</u-td>
					<u-td width="130rpx">10~25</u-td>
					<u-td width="160rpx">{{rpt_result.xby.blqk}}</u-td>
					<u-td width="70rpx">{{rpt_result.xby.pf}}</u-td>
				</u-tr>
				<u-tr>
					<u-td width="130rpx">胎动</u-td>
					<u-td width="130rpx">无</u-td>
					<u-td width="130rpx">1～2次</u-td>
					<u-td width="130rpx">3次及以上</u-td>
					<u-td width="160rpx">{{rpt_result.td.blqk}}</u-td>
					<u-td width="70rpx">{{rpt_result.td.pf}}</u-td>
				</u-tr>
				<u-tr>
					<u-td width="130rpx">加速</u-td>
					<u-td width="130rpx">无</u-td>
					<u-td width="130rpx">1次</u-td>
					<u-td width="130rpx">2次及以上</u-td>
					<u-td width="160rpx">{{rpt_result.jianshu.blqk}}</u-td>
					<u-td width="70rpx">{{rpt_result.jianshu.pf}}</u-td>
				</u-tr>
				<u-tr style="height: 100rpx;">
					<u-td width="130rpx">减速</u-td>
					<u-td width="130rpx" class="text-ellipsis">PD，频发LD频发重VD</u-td>
					<u-td width="130rpx" class="text-ellipsis">频发轻VD，ED散发LD重VD</u-td>
					<u-td width="130rpx" style="word-break:break-all;">无减速散发轻VD、ED</u-td>
					<u-td width="160rpx">{{rpt_result.jianshu.blqk}}</u-td>
					<u-td width="70rpx">{{rpt_result.jianshu.pf}}</u-td>
				</u-tr>
			</u-table>
			<view class="p-2 flex flex-column">
				<text>GTX评分：{{rpt_result.ratingsSuggestions.gtxScore}}（注:本分析结果仅供参考，医生需结合临床具体...）</text>
				<text>说明及建议：{{rpt_result.ratingsSuggestions.smjjy}}</text>
				<text>医师(签名)：{{rpt_result.ratingsSuggestions.ys}}</text>
				<text>回复时间：{{rpt_result.ratingsSuggestions.hfsj}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import datas from '@/static/testdata.json';
	import uCharts from '@/components/u-charts/u-charts.js';
	import {
		clearStorageList,
		setStorageList
	} from '@/common/storage.js';
	import tool from '@/utils/util.js';
	// #ifndef H5
	// var Fts6MgrModule = uni.requireNativePlugin('Fts6MgrPlugin-Fts6MgrModule');
	// import aa from '@/static/testdata.json'
	var testModule = uni.requireNativePlugin("whx-MdFhrwhx");
	// #endif
	var _self;
	var canvaLineA = null;
	var canvaLineB = null;
	var tmpToken = '';
	export default {
		data() {
			return {
				informationPregnantWomen: {
					name: '',
					phone: '',
					date: '',
					age: '',
					gestationalWeek: '',
					duration: '',
					time: ''
				},
				purchaseState: 0,
				updateList: [],
				jianhuzhuantai: "启动实时监护",
				displays: false,
				status: false,
				timestamp: 10,
				isPurchase: false,
				show: false,
				maindataInsert: false,
				disabled: true,
				// chart1Height: 400,
				// chart2Height: 350,
				checked: false,
				loading: false,
				flash: true,
				isSwitchFlash: false,
				switchFlash: true,
				testdata: '',
				// 胎心1
				taixinlv1: '',
				// 胎心2
				taixinlv2: '',
				openaudio: false,
				//
				c_time: '',
				// 宫缩压
				gongsuoya: '',
				isConnected: false,
				isTocoCleared: false,
				// 孕妇id
				pregnantID: '',
				// 设备id
				equipment_id: '',
				notice_id: '',
				// 测量时长
				clTime: '',
				// 审核时间
				exam_time: '',
				// 审核结果
				exam_result: '',
				// 医生建议
				yishengjianyi: '',
				// 时
				hour: 0,
				// 分
				minute: 0,
				// 秒
				second: 1,
				// 审核结果显示状态
				audit: false,
				// 宫缩压
				fetalHeartRate: {
					manualFetalMovement: ''
				},
				// 胎心
				chartData: {
					scrollPosition: 'right',
					title: 'xx',
					subtitle: {},
					animation: false,
					categories: [0, 1, 2, 3, 4, 5],
					series: [{
							name: 'a1',
							data: [],
							color: '#000000'
						},
						{
							name: 'a2',
							data: [],
							color: '#c077bf'
						}
					]
				},
				// 宫缩压
				chartDataB: {
					scrollPosition: 'right',
					title: 'xx',
					subtitle: {},
					animation: false,
					categories: [0, 1, 2, 3, 4, 5],
					series: [{
						name: '',
						data: [],
						color: '#000000'
					}]
				},
				chatList: [],
				// 图表初始样式
				cWidth: '',
				cHeight: '',
				bWidth: '',
				bHeight: '',
				pixelRatio: 1,
				// 测量结果
				c_result: '待医生诊断',
				// 开始按钮状态
				isStop: true,
				// 结束时间
				stopTime: {},
				// 页面状态 用于区分页面跳转操作
				tapState: 0,
				updataList: [],
				switchUpdataList: [],
				// 测试时间
				nowTime: '',
				// 测量结果显示状态
				isResult: false,
				isOpenBtn: false,
				taixinId: '',
				pageHeight: 0,
				innerAudioContext: null,
				showBleNodevice: true,
				rpt_result: {
					userInfo: {
						date: '', // 日期
						duration: '', // 时长
						time: '' //时间
					},
					txl: { // 胎心率
						jx: '', // 基线
						xby: '' // 细变异
					},
					accelerate: { // 加速
						fzqjs: '', // 非周期加速
						zqjs: '', // 周期加速
						bmxjs: '' // 不明显加速
					},
					decelerate: { // 减速
						zfjs: '', // 早发减速
						cfjs: '', // 迟发减速
						zdbhjs: '', // 重度变化减速
						ysjs: '', // 延时减速
						qdbhjs: '' // 轻度变化减速
					},
					tdcs: '', // 胎动次数
					gs: { // 宫缩
						gsbx: '', // 宫缩波形
						xdfd: '', // 相对幅度
						cxsj: '', // 持续时间
						sjjg: '', // 时间间隔
						zcgs: '', // 正常宫缩
						gqgs: '', // 过强宫缩
						grgs: '' // 过弱宫缩
					},
					result: '', // 结果
					// 表格部分开始
					txljx: { // 胎心率基线
						blqk: '', // 本例如情况
						pf: '' // 评分
					},
					xby: { // 细变异
						blqk: '',
						pf: ''
					},
					td: { // 胎动
						blqk: '',
						pf: ''
					},
					jiashu: { // 加速
						blqk: '',
						pf: ''
					},
					jianshu: { // 减速
						blqk: '',
						pf: ''
					},
					// 表格部分结束
					ratingsSuggestions: {
						gtxScore: '', // GTX评分
						smjjy: '', // 说明及建议
						ys: '', // 医师
						hfsj: '' // 回复时间
					}
				},
				anlyResult: '',
				times: 0
			};
		},
		onBackPress(e) {
			if (this.isOpenBtn && !this.isStop) {
				if (e.from === 'backbutton') {
					uni.showModal({
						title: '提示',
						content: '您正在进行胎心测量，确定要结束吗？',
						success: (res) => {
							if (res.confirm) {
								this.handleUpfateDuration();
								console.log('-------------ssssssssssssssssssss');
								uni.navigateBack({
									delta: 1
								})
							}
						}
					})
					return true;
				}
			} else {
				return false;
			}
		},
		onReady() {
			try {
				let that = this;
				if (that.tapState == 0) {
					//this.$refs.uToast.show
					that.$refs.uTips.show({
						title: '请先找准孕妇胎心和宫缩位置,然后用绑带固定仪器\r\n到相应位置,点按左下角"开始"按钮进行监护!',
						// 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
						type: 'info',
						position: 'center',
						duration: 10000,
						// 如果不需要图标，请设置为false
						icon: true
					});
					uni.showModal({
						title: '提示',
						content: '请点按左下角"开始"按钮进行胎心查找!',
						showCancel: false
					})
				}
				let info = uni.createSelectorQuery().select('#chart-taixin');
				info.boundingClientRect(function(data) {
					//data - 各种参数
					//this.cWidth = uni.upx2px(750);
					that.cHeight = data.height - uni.upx2px(20);
					that.bHeight = data.height - uni.upx2px(20);
					that.cWidth = data.width + uni.upx2px(10);
					//	this.cHeight = uni.upx2px(460);
					that.bWidth = data.width + uni.upx2px(10); //;uni.upx2px(750);

					that.getServerData();
					that.getServerDatas();

					//this.bWidth = uni.upx2px(750);
					//this.bHeight = uni.upx2px(400);
				}).exec();
			} catch (e) {
				console.log(e.message);
				this.testdata = e.message;
			}
		},
		onLoad(e) {
			try {
				let that = this;
				// #ifdef APP-PLUS
				plus.device.setWakelock(true);
				// #endif
				_self = this;
				if (e.purchaseState) {
					that.purchaseState = e.purchaseState;
				}
				uni.getSystemInfo({
					success: res => {
						_self.pageHeight = res.windowHeight;
					}
				});
				//		this.cWidth = uni.upx2px(750);
				//	this.cHeight = uni.upx2px(460);
				//	this.bWidth = uni.upx2px(750);
				//this.bHeight = uni.upx2px(400);

				that.tapState = e.tapState || 0;
				//this.chartData.categories = [0, 1, 2, 3, 4, 5];
				that.chartData.series[0].data = [];
				that.chartData.series[1].data = [];
				//this.chartDataB.categories = [0, 1, 2, 3, 4, 5];
				that.chartDataB.series[0].data = [];

				that.chartData.categories = [];
				that.chartDataB.categories = [];

				for (var i = 0; i < 300; i++) {
					//let i=index + 1;

					//let di=(i+1) / 60;
					let xLabel = tool.secoundtoMs(i);

					that.chartData.categories.push(xLabel);
					that.chartDataB.categories.push(xLabel);
				}
				that.getServerData();
				that.getServerDatas();

				canvaLineA.updateData(that.chartData);
				canvaLineB.updateData(that.chartDataB);
				// Fts6MgrModule.stop();
				uni.getStorage({
					key: 'user_login',
					success: res => {
						console.log(res);
						let yf_obj = res.data;
						that.pregnantID = yf_obj.PregnantID;
						that.informationPregnantWomen.name = yf_obj.P_Name;
						that.informationPregnantWomen.phone = yf_obj.P_Telephone;
						that.informationPregnantWomen.age = yf_obj.P_Age;
						that.informationPregnantWomen.gestationalWeek = yf_obj.P_Now_Yunzhou;
					}
				});
				uni.$on('equipment_ids', (data) => {
					console.log(data);
					that.equipment_id = data.data.equipment_id;
					console.log(that.equipment_id);
					that.notice_id = data.data.notice_id;
				})

				if (e.detail) {
					let _arr = JSON.parse(e.detail);
					console.log(_arr);
					if(_arr.rpt_result !== null){
						that.rpt_result = JSON.parse(_arr.rpt_result);
					}
					that.rpt_result.ratingsSuggestions.smjjy = _arr.yishengjianyi;
					that.rpt_result.ratingsSuggestions.ys = _arr.exam_doctor;
					that.clTime = _arr.duration;
					that.nowTime = _arr.t_time;
					that.c_time = _arr.t_time;
					that.audit = true;
					that.isResult = true;
					// that.exam_time = _arr.exam_time;
					that.rpt_result.ratingsSuggestions.hfsj = _arr.exam_time;
					that.exam_result = _arr.exam_result;
					// that.yishengjianyi = _arr.yishengjianyi;
					that.chartData.series[0].data = [];
					that.chartData.series[1].data = [];
					//this.chartDataB.categories = [0, 1, 2, 3, 4, 5];
					that.chartDataB.series[0].data = [];
					that.chartData.categories = [];
					that.chartDataB.categories = [];

					if (_arr.state == 1) {
						uni.getSystemInfo({
							success: res => {
								_self.pageHeight = res.windowHeight;
							}
						});
						let i = 0;
						for (var t = 0; t < 300; t++) {
							let xLabel = tool.secoundtoMs(t);
							//let xLabel = minute.toString(); //+"分"+secound+"秒";
							that.chartData.categories.push(xLabel);
							that.chartDataB.categories.push(xLabel);
						}
						canvaLineA.updateData(that.chartData);
						canvaLineB.updateData(that.chartDataB);
						for (let item of _arr.txarr) {
							//let xLabel = parseInt(i / 60).toString(); //+ '分';
							let xLabel = tool.secoundtoMs(i);
							i++;
							if (i >= 300) {
								that.chartData.categories.push(xLabel);
								that.chartDataB.categories.push(xLabel);
							} else {
								that.chartData.categories[i] = xLabel;
								that.chartDataB.categories[i] = xLabel;
							}
							let t1 = item.t1 == 255 || item.t1 == -1 || item.t1 == 0 ? null : item.t1;
							// let t2 = item.t2 == 255 || item.t2 == -1 || item.t2 == 0 ? null : item.t2;
							let gsy = item.gsy == -1 || item.gsy == 255 || item.gsy == 0 || item.gsy == null ? null : item.gsy + '';
							that.nowTime = item.c_time;
							if(gsy !== null) {
								that.chartDataB.series[0].data.push(Number(gsy));
							}else{
								that.chartDataB.series[0].data.push(gsy);
							}
							if(t1 !== null) {
								that.chartData.series[0].data.push(Number(t1));
							}else{
								that.chartData.series[0].data.push(t1);
							}
							
							// that.chartData.series[1].data.push(Number(t2));
						}
						canvaLineA.updateData(that.chartData);
						canvaLineB.updateData(that.chartDataB);
					} else {
						console.log(_arr.id);
						this.$u
							.post('/DocSSTaixinManyDetails', {
								taixinId: _arr.id
							})
							.then(res => {
								console.log(res);
								let i = 0;
								if (res.code == 200) {
									for (var t = 0; t < 300; t++) {
										let xLabel = tool.secoundtoMs(t);
										//let xLabel = minute.toString(); //+"分"+secound+"秒";
										that.chartData.categories.push(xLabel);
										that.chartDataB.categories.push(xLabel);
									}
									canvaLineA.updateData(that.chartData);
									canvaLineB.updateData(that.chartDataB);
									let arr = res.data;
									for (let item of arr) {
										//let xLabel = parseInt(i / 60).toString(); // + '分';

										let xLabel = tool.secoundtoMs(i);
										i++;
										if (i >= 300) {
											that.chartData.categories.push(xLabel);
											that.chartDataB.categories.push(xLabel);
										} else {
											that.chartData.categories[i] = xLabel;
											that.chartDataB.categories[i] = xLabel;
										}
										var heartrate1 = item.taixinlv1 == 255 || item.taixinlv1 == -1  || item.taixinlv1 == 0 ? null : item
											.taixinlv1;
										// var heartrate2 = item.taixinlv2 == 255 || item.taixinlv2 == -1 ? 0 : item
										// 	.taixinlv2;
										if(heartrate1 !== null){
											that.chartData.series[0].data.push(Number(heartrate1));
										}else{
											that.chartData.series[0].data.push(heartrate1);
										}
										// that.chartData.series[1].data.push(Number(heartrate2));
										var contractions = item.gongsuoya == -1 || item.gongsuoya == 255 || item.gongsuoya == 0 || item.gongsuoya == null ? null : item.gongsuoya + '';
										// let gsy = item.gsy == -1 ? 0 : item.gsy + '';
										// console.log(contractions);
										if(contractions !== null){
											that.chartDataB.series[0].data.push(Number(contractions));
										}else{
											that.chartDataB.series[0].data.push(contractions);
										}
									}
									canvaLineA.updateData(that.chartData);
									canvaLineB.updateData(that.chartDataB);
								} else {
									console.log(JSON.stringify(res.info));
									this.$lz.toast(res.info);
								}
							}).catch(err => {
								console.log(err);
								this.$lz.toast(err.errMsg);
								canvaLineA.updateData(that.chartData);
								canvaLineB.updateData(that.chartDataB);
							})
					}
				}
			} catch (e) {
				console.log(e.message);
				this.testdata = e.message;
			}
		},
		onShow() {
			this.handleUpdateEquipStatus();
		},
		destroyed() {
			try {
				// #ifdef APP-PLUS
				plus.device.setWakelock(false);
				// #endif
				// Fts6MgrModule.stop();
				// if (this.innerAudioContext) {
				// 	this.innerAudioContext.destroy();
				// }
			} catch (e) {
				console.log(e.message);
				this.testdata = e.message;
			}
			testModule.StopFetal();
			console.log(3232);
			uni.$off('equipment_ids');
		},
		methods: {
			handleEnd() {
				this.show = false;
				if (this.status == true) {
					uni.showToast({
						title: '探头连接成功!请找到胎心后观察波形，待波形正常后点击下面"启动实时监护"按钮',
						icon: 'none',
						duration: 8000
					});
				} else {
					uni.showModal({
						content: '连接失败，请把探头放回电源插座重新拿起，再点"开始"按钮重新尝试！',
						showCancel: false
					})
					this.$refs.setTime.endTime();
					this.isStop = true;
				}
				this.isOpenBtn = false;
				this.checked = false;
			},
			// 测量时长
			longTime(e) {
				try {
					this.clTime = e.time;
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
				//				console.log(this.clTime + '测量时长');
			},
			// 宫缩压
			getServerDatas() {
				try {
					let LineB = {
						categories: [],
						series: []
					};
					LineB.categories = _self.chartDataB.categories;
					LineB.series = _self.chartDataB.series;
					_self.showLineB('canvasLineB', LineB);
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 胎心1图表配置
			showLineA(canvasId, chartData) {
				try {
					canvaLineA = new uCharts({
						$this: _self,
						canvasId: canvasId,
						type: 'line',
						fontSize: 11,
						legend: {
							show: false
						},
						enableMarkLine: true,
						dataLabel: false,
						dataPointShape: false,
						background: '#FFFFFF',
						pixelRatio: _self.pixelRatio,
						categories: chartData.categories,
						series: chartData.series,
						animation: false,
						enableScroll: true,
						xAxis: {
							type: 'grid',
							gridColor: '#CCCCCC',
							gridType: 'dash',
							// calibration: true,
							dashLength: 1,
							itemCount: 300, //x轴单屏显示数据的数量，默认为5个 实际个数=设置值×2+8   实际值(60)=设置值30×2
							scrollShow: false, //新增是否显示滚动条，默认false
							scrollAlign: 'left', //滚动条初始位置
							scrollBackgroundColor: '#F7F7FF', //默认为 #EFEBEF
							scrollColor: '#DEE7F7', //默认为 #A6A6A6
							gridEval: 10,
							splitNumber: 30,
							labelCount: 6,
							format: val => {
								return parseInt(val / 60).toString() + '分';
							}
						},
						yAxis: {
							//data:{
							// min:0,
							// max:240,
							//calibration:false,
							//axisLine:true,
							//disabled:false
							//},
							type: 'grid',
							padding: 0,
							gridType: 'dash',
							gridColor: '#CCCCCC',
							dashLength: 2,
							max: 240,
							min: 0,
							splitNumber: 24,
							// data:{disabled: false},
							format: val => {
								if (val % 10 == 0) return val;
								else return '';
								//return val.toFixed(0) + '';
							}
						},
						width: _self.cWidth * _self.pixelRatio,
						height: _self.cHeight * _self.pixelRatio,
						extra: {
							touchMoveLimit: 20,
							line: {
								type: 'straight',
								width: 1
							},
							markLine: {
								areacolor: '#087c00',
								areaopacity: 0.15,
								data: [{
									value: 110,
									lineColor: '#087c00'
								}, {
									value: 160,
									lineColor: '#087c00'
								}]
							}
						}
					});
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 胎心1图表回调
			touchLineA(e) {
				try {
					canvaLineA.scrollStart(e);
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 胎心1图表回调
			moveLineA(e) {
				try {
					canvaLineA.scroll(e);
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 胎心1图表回调
			touchEndLineA(e) {
				try {
					canvaLineA.scrollEnd(e);
					//下面是toolTip事件，如果滚动后不需要显示，可不填写
					canvaLineA.showToolTip(e, {
						format: function(item) {
							return item.data;
						}
					});
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 胎心2图表配置
			showLineB(canvasId, chartDataB) {
				try {
					canvaLineB = new uCharts({
						$this: _self,
						canvasId: canvasId,
						type: 'line',
						fontSize: 11,
						legend: {
							show: false
						},
						dataLabel: false,
						dataPointShape: false,
						background: '#FFFFFF',
						pixelRatio: _self.pixelRatio,
						categories: chartDataB.categories,
						series: chartDataB.series,
						animation: false,
						enableScroll: true,
						xAxis: {
							type: 'grid',
							gridColor: '#CCCCCC',
							gridType: 'dash',
							dashLength: 2,
							itemCount: 300, //x轴单屏显示数据的数量，默认为5个
							scrollShow: false, //新增是否显示滚动条，默认false
							scrollAlign: 'left', //滚动条初始位置
							scrollBackgroundColor: '#F7F7FF', //默认为 #EFEBEF
							scrollColor: '#DEE7F7', //默认为 #A6A6A6
							splitNumber: 30,
							labelCount: 6,
							gridEval: 10
						},
						yAxis: {
							gridType: 'dash',
							gridColor: '#CCCCCC',
							dashLength: 2,
							max: 100,
							min: 0,
							splitNumber: 10,
							format: val => {
								return val.toFixed(0) + '';
							}
						},
						width: _self.bWidth * _self.pixelRatio,
						height: _self.bHeight * _self.pixelRatio,
						extra: {
							touchMoveLimit: 20,
							line: {
								type: 'straight',
								width: 1
							}
						}
					});
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			handleUpdateEquipStatus() {
				uni.getStorage({
					key: 'equipment_ids',
					success: res => {
						console.log(res);
						let arr = res.data,
							_arr = [];
						for (let item of arr) {
							let str = item.return_time;
							// console.log(str);
							let date = new Date();
							if (uni.getSystemInfoSync().platform == "ios") {
								date = new Date(str.replace(/-/g, '/'));
							} else {
								date = new Date(str);
							}
							let time = new Date();

							if ((date.getTime() - time.getTime()) / (24 * 3600 * 1000) <= 3 &&
								item.status == '已领用' && item.e_type == "胎心监护仪") {
								_arr.push(item)
								this.updateList = _arr
								this.isPurchase = true;
							}
							if (date.getTime() <= time.getTime() &&
								item.status == '已领用' && item.e_type == "胎心监护仪") {

								// uni.hideTabBar();
								let obj = {
									e_id: item.notice_id,
									lease_id: item.id,
									status: '已过期',
									r_time: item.return_time,
									r_days: item.rent_times,
									r_price: item.rent_price,
									r_deposit: item.rent_deposit,
									r_sum: item.rent_accountprice
								}
								console.log(obj);
								this.$u.post('/UpdateEquipStatus', obj).then(res => {
									console.log(JSON.stringify(res));
								}).catch(err => {
									console.log(err);
								})
							}
						}
					}
				})
			},
			// 胎心2图表拖动回调
			touchLineB(e) {
				try {
					canvaLineB.scrollStart(e);
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
				// console.log(e)
			},
			// 胎心2图表拖动回调
			moveLineB(e) {
				try {
					canvaLineB.scroll(e);
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
				// console.log(e)
			},
			// 胎心2图表回调
			touchEndLineB(e) {
				try {
					// console.log(e)
					canvaLineB.scrollEnd(e);
					canvaLineB.showToolTip(e, {
						format: function(item) {
							return item.data;
						}
					});
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 胎心
			getServerData() {
				try {
					let LineA = {
						categories: [],
						series: []
					};
					LineA.categories = _self.chartData.categories;
					LineA.series = _self.chartData.series;
					_self.showLineA('canvasLineA', LineA);
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 开关状态
			handleIsSwitch(e) {
				try {
					this.isOpenBtn = e;
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 开始计时
			handleStartTime() {
				try {
					if (this.isStop) {
						this.nowTime = tool.getFtSystemTime();
						this.hour = this.stopTime.h || 0;
						this.minute = this.stopTime.i || 0;
						this.second = this.stopTime.s || 0;
						this.taixinId = '';
						this.isStop = false;
						// #ifndef H5
						this.start();
						// #endif
					}
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 设备
			start() {
				let that = this;
				let i = 0;
				let upxh = 0;
				that.maindataInsert = false;
				let taixinid = '';
				that.show = true;
				that.isSwitchFlash = false;
				that.status = false;
				that.isResult = false;
				that.openaudio = false;
				that.chartData.categories = [];
				that.chartDataB.categories = [];
				for (var t = 0; t < 300; t++) {
					let xLabel = tool.secoundtoMs(t);
					that.chartData.categories.push(xLabel);
					that.chartDataB.categories.push(xLabel);
				}
				that.chartData.series[0].data = [];
				// that.chartData.series[1].data = [];
				that.chartDataB.series[0].data = [];
				canvaLineA.updateData(that.chartData);
				canvaLineB.updateData(that.chartDataB);
				that.taixinId = '';
				that.updataList = [];
				let datatime = '';
				var object = {
					"proxy_devicenum": that.notice_id, //设备标签码d62904086556
					"proxy_userid": "20210818abc",
					"proxy_code": "kPUE9aPqPgj7AU+25OR4c0zcOkSF1TL5ywyWNjmNozY="
				};
				console.log(object);
				that.$refs.setTime.startTime();
				testModule.InitBle(object, (res) => {
					var data = res;
					console.log(JSON.stringify(res));
					if(res.hasOwnProperty('AnlyResult')){
						that.anlyResult = res.AnlyResult;
						console.log(that.anlyResult);
						uni.getStorage({
							key: 'user_login',
							success: res => {
								console.log(res);
								that.handleAnlyResult(res.data.PregnantID);
							}
						});
					}
					if (data['ble_token'] != null) {
						tmpToken = data['ble_token'];
						console.log("token==" + tmpToken);
					}
					if(that.times >= 10){
						let result = datas;
						console.log(result);
						result["proxy_token"] = tmpToken;
						testModule.GetAnlyData(result);
						that.times = 0;
					}
					
					if (data.ble_status == 'ble_nodevice' && that.showBleNodevice) {
						that.$lz.toast('搜索设备10s到期，未发现设备!');
						that.isStop = true;
						testModule.StopFetal();
					}
					
					
				// token==MRTMpexvoreQTaL/qjs9YInV2uPT7XzQwZ4JGGwS38Q=
				// token==MRTMpexvoreQTaL/qjs9YK9r/petCyQYarDtF9Tdlmc=

					if (data.ble_status == 'ble_devleagle' || data.ble_data) {
						that.showBleNodevice = false;
						that.status = true;
						that.show = false;
						that.isSwitchFlash = true;
						if (data.hasOwnProperty('ble_data')) {
							if (datatime != data.ble_data.time) {
								datatime = data.ble_data.time;
								let xLabel = tool.secoundtoMs(i);
								if (i >= 300) {
									that.chartData.categories.push(xLabel);
									that.chartDataB.categories.push(xLabel);
								} else {
									that.chartData.categories[i] = xLabel;
									that.chartDataB.categories[i] = xLabel;
								}
								that.taixinlv1 = data.ble_data.FHR == 255 || data.ble_data.FHR == -1 ? 0 : data
									.ble_data.FHR;
								that.gongsuoya = data.ble_data.TOCO == -1 ? '0' : data.ble_data.TOCO;
								if (that.taixinlv1 > 160 || that.taixinlv1 < 110) {
									this.flash = false;
								} else {
									this.flash = true;
								}
								// data.ble_data.FHR = data.ble_data.FHR == 255 || data.ble_data.FHR == -1 ? 0 : data.ble_data.FHR;
								// data.ble_data.TOCO = data.ble_data.TOCO == 255 || data.ble_data.TOCO == -1 ? 0 : data.ble_data.TOCO;
								
								if(	data.ble_data.FHR == 0 || data.ble_data.FHR == 255 || data.ble_data.FHR == -1){
									data.ble_data.FHR = null;
								}
								if(	data.ble_data.TOCO == 0 || data.ble_data.TOCO == 255 || data.ble_data.TOCO == -1){
									data.ble_data.TOCO = null;
								}
								
								// if(data.ble_data.FHR == 0){
								// 	data.ble_data.FHR = '';
								// }
								console.log(data.ble_data.FHR);
								if (i >= 300) {
									if(data.ble_data.FHR == null){
										that.chartData.series[0].data.push(data.ble_data.FHR);
									}else{
										that.chartData.series[0].data.push(Number(data.ble_data.FHR));
									}
									if(data.ble_data.TOCO == null){
										that.chartDataB.series[0].data.push(data.ble_data.TOCO);
									}else{
										that.chartDataB.series[0].data.push(Number(data.ble_data.TOCO));
									}
								} else {
									if(data.ble_data.FHR == null){
										that.chartData.series[0].data[i] = data.ble_data.FHR;
									}else{
										that.chartData.series[0].data[i] = Number(data.ble_data.FHR);
									}
									if(data.ble_data.TOCO == null){
										that.chartDataB.series[0].data[i] = data.ble_data.TOCO;
									}else{
										that.chartDataB.series[0].data[i] = Number(data.ble_data.TOCO);
									}
									// that.chartData.series[0].data[i] = Number(data.ble_data.FHR);
								}
								// canvaLineB.updateData(that.chartDataB);
								canvaLineA.updateData(that.chartData);
								canvaLineB.updateData(that.chartDataB);
								let item = {
									p_id: that.pregnantID,
									e_id: that.equipment_id,
									c_time: that.nowTime,
									t1: data.ble_data.FHR,
									// t2: xtObj.data.heartrate2,
									gsy: data.ble_data.TOCO,
									sdtds: '',
									// zdtds: xtObj.data.movementcount1,
									t_result: that.c_result,
									sbcljy: '',
									taixinId: '',
									duration: that.clTime
								};
								that.updataList.push(item);
								upxh++;
								let _item = {
									e_id: that.equipment_id,
									p_id: that.pregnantID,
									c_time: that.nowTime,
									t1: data.ble_data.FHR,
									// t2: xtObj.data.heartrate2,
									gsy: data.ble_data.TOCO,
									sdtds: '',
									// zdtds: xtObj.data.movementcount1,
									t_result: that.c_result,
									sbcljy: '',
									xh: upxh,
									taixinId: that.taixinId,
									duration: that.clTime
								};
								if (that.isOpenBtn === true) {
									// console.log(that.isOpenBtn)
									if (_item.taixinId == '' && !that.maindataInsert) {
										// console.log('_item.taixinId=============' + _item.taixinId)
										// console.log('maindataInsert=============' + !that.maindataInsert)
										that.switchUpdataList = [];
										that.switchUpdataList.push(_item);
										that.maindataInsert = true;
										that.handleFetalHeartRateData();

									}
									if (_item.taixinId !== '' && that.maindataInsert == true) {
										// console.log('_item.taixinId---------------' + _item.taixinId)
										// console.log('maindataInsert---------------' + that.maindataInsert)
										that.switchUpdataList = [];
										that.switchUpdataList.push(_item);

										that.handleFetalHeartRateData();
									}
								}
								i++;
							}
						}
					}
				});
				testModule.StartFetal();
			},
			handleEndTime() {
				if (this.isOpenBtn == true && this.checked == true) {
					uni.showModal({
						title: '提示',
						content: '正在进行胎心监护，确定要停止吗？',
						success: res => {
							if (res.confirm) {
								this.$refs.setTime.stopTime();
								// this.handleUpfateDuration();
								testModule.StopFetal();
								this.isStop = true;
								this.checked = false;
								this.isOpenBtn = false;
								this.jianhuzhuantai = "启动实时监护";
								this.switchFlash = true;
								uni.navigateBack();
							}
						}
					});
				} else {
					this.$refs.setTime.stopTime();
					testModule.StopFetal();
					this.setStorageFun();
					this.isStop = true;
					this.checked = false;
					this.isOpenBtn = false;
					this.jianhuzhuantai = "启动实时监护";
					this.switchFlash = true;
				}
			},
			// 缓存
			setStorageFun() {
				try {
					let _arr = [{
						p_id: this.pregnantID,
						t_time: this.nowTime,
						value: '',
						flag: '',
						result: this.c_result,
						type: '胎心',
						state: 1,
						txarr: this.updataList,
						duration: this.clTime
					}];
					//缓存
					if (this.isOpenBtn == false && this.checked == false) {
						setStorageList(_arr);
						uni.showModal({
							title: '本次测量已结束',
							content: '是否要提交？',
							success: res => {
								if (res.confirm) {
									this.handleFetalHeartRate();
									clearStorageList('胎心');
								} else {
									this.updataList = [];
									uni.navigateBack();
								}
							}
						});
					} else {
						uni.showModal({
							title: '提示',
							// content: '本次实时监护已成功上传,如需再次监护请点左下角"开始"按钮',
							content: '本次实时监护已成功上传',
							showCancel: false,
							success: res => {
								if (res.confirm) {
									// this.handleUpfateDuration();
									uni.navigateBack();
								}
							}
						});
					}
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			//停止的回调
			stopChange(e) {
				console.log(e);
				try {
					// Fts6MgrModule.stop();
					// this.hour = 0;
					// this.minute = 0;
					// this.second = 0;
					testModule.StopFetal();
					this.isResult = true;
					this.isConnected = false;
					this.isTocoCleared = false;
					this.clTime = e.time;
					console.log(this.clTime + '停止时间');
					for (let item of this.updataList) {
						item.duration = this.clTime;
					}
					if (this.isOpenBtn == true && this.checked == true) {
						this.handleUpfateDuration();
					}
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
				console.log(e.times);
				this.times = e.times;
				
			},
			//超时的回调
			submitChange(e) {
				try {
					// Fts6MgrModule.stop();
					testModule.StopFetal();
					this.isResult = true;
					this.setStorageFun();
					// this.stopTime = e.time;
					this.clTime = e.time;
					console.log(this.clTime + '超时');
					// this.disabled = false;
					for (let item of this.updataList) {
						item.duration = this.clTime;
					}
					this.isStop = e.isStop;
					console.log(this.isOpenBtn);
					console.log(this.checked);
					if (this.isOpenBtn == true && this.checked == true) {
						this.handleUpfateDuration();
					}
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
				this.checked = false;
				this.isOpenBtn = false;
				this.jianhuzhuantai = "启动实时监护";
				this.switchFlash = true;
			},
			// 发送网络请求 上传数据 - 非实时 多条
			handleFetalHeartRate() {
				try {
					console.log(JSON.stringify(this.updataList));
					this.$u
						.post('/UploadListJHYInfo', {
							data: this.updataList
						})
						.then(res => {
							if (res.code == 200 && res.data == true) {
								this.updataList = [];
								uni.showToast({
									title: '上传成功',
									icon: 'none',
									duration: 3000
								});
								setTimeout(() => {
									uni.navigateBack();
								}, 3000)
							}
						});
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 实时数据 
			handleFetalHeartRateData() {
				let that = this;
				try {
					console.log(that.switchUpdataList);
					setTimeout(() => {
						// console.log('switchUpdataList')
						that.$u
							.post('/SS_UploadJHYInfo', {
								data: that.switchUpdataList
							})
							.then(res => {
								console.log(JSON.stringify(res));
								if (res.code == 200) {
									let arr = res.data;
									if (that.maindataInsert) {
										that.taixinId = arr[0].id;
										uni.setStorageSync('taixinId', that.taixinId)
									}

								} else {
									this.$lz.toast(res.info);
								}
							}).catch(e => {
								this.$lz.toast(e.errMsg);
							})
					}, 200);
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			handleUpfateDuration() {
				try {
					this.$u.post('/Rt_Endtime', {
						taixin_id: this.taixinId
					}).then(res => {
						// console.log(res)
					})
				} catch (e) {
					console.log(e.message);
					this.testdata = e.message;
				}
			},
			// 清零
			handleClear() {
				console.log(this.checked, this.isOpenBtn);
				if (this.checked == false && this.isOpenBtn == false) {
					this.checked = true;
					this.isOpenBtn = true;
					this.isStop = true;
					testModule.StopFetal();
					this.handleStartTime();
					uni.showToast({
						title: '已开启实时监护,将自动监护30分钟',
						icon: 'none',
						duration: 5000
					})
					this.show = false;
					this.status = true;
					this.jianhuzhuantai = "实时监护中"
					this.switchFlash = false;
				} else {
					uni.showModal({
						title: '提示',
						content: '胎心监护已经开始,是否重新开始?点击确定重新开始,点击取消继续测量',
						success: (res) => {
							if (res.confirm) {
								this.checked = true;
								this.isOpenBtn = true;
								this.isStop = true;
								this.$refs.setTime.stopTime();
								this.handleUpfateDuration();
								console.log('1111111');
								testModule.StopFetal();
								this.handleStartTime();
								this.show = false;
								this.status = true;
								this.jianhuzhuantai = "实时监护中"
								this.switchFlash = false;
							}
						}
					})
				}
			},
			handleAnlyResult(pregnantID){
				this.rpt_result.result = this.anlyResult.split('|')[0];
				// 144,18,8,12,5,0,7,1,0,0,0,1,0,Ⅲ型,1,0,0,739,0,47
				this.rpt_result.txl.jx = this.anlyResult.split('|')[1].split(',')[0];
				this.rpt_result.txl.xby = this.anlyResult.split('|')[1].split(',')[1];
				this.rpt_result.tdcs = this.anlyResult.split('|')[1].split(',')[2];
				this.rpt_result.accelerate.fzqjs = this.anlyResult.split('|')[1].split(',')[3];
				this.rpt_result.accelerate.zqjs = this.anlyResult.split('|')[1].split(',')[4];
				this.rpt_result.accelerate.bmxjs = this.anlyResult.split('|')[1].split(',')[5];
				this.rpt_result.decelerate.zfjs = this.anlyResult.split('|')[1].split(',')[6];
				this.rpt_result.decelerate.cfjs = this.anlyResult.split('|')[1].split(',')[7];
				this.rpt_result.decelerate.ysjs = this.anlyResult.split('|')[1].split(',')[8];
				this.rpt_result.decelerate.qdbhjs = this.anlyResult.split('|')[1].split(',')[9];
				this.rpt_result.decelerate.zdbhjs = this.anlyResult.split('|')[1].split(',')[10];
				this.rpt_result.gs.gsbx = this.anlyResult.split('|')[1].split(',')[11];
				this.rpt_result.gs.zcgs = this.anlyResult.split('|')[1].split(',')[12];
				this.rpt_result.gs.gqgs = this.anlyResult.split('|')[1].split(',')[13];
				this.rpt_result.gs.grgs = this.anlyResult.split('|')[1].split(',')[14];
				this.rpt_result.gs.cxsj = this.anlyResult.split('|')[1].split(',')[15];
				this.rpt_result.gs.sjjg = this.anlyResult.split('|')[1].split(',')[16];
				this.rpt_result.gs.xdfd = this.anlyResult.split('|')[1].split(',')[17];
				
				this.rpt_result.txljx.blqk = this.anlyResult.split('|')[2].split(';').toString().split(',')[0];
				this.rpt_result.txljx.pf = this.anlyResult.split('|')[2].split(';').toString().split(',')[1];
				this.rpt_result.xby.blqk = this.anlyResult.split('|')[2].split(';').toString().split(',')[2];
				this.rpt_result.xby.pf = this.anlyResult.split('|')[2].split(';').toString().split(',')[3];
				this.rpt_result.td.blqk = this.anlyResult.split('|')[2].split(';').toString().split(',')[4];
				this.rpt_result.td.pf = this.anlyResult.split('|')[2].split(';').toString().split(',')[5];
				this.rpt_result.jiashu.blqk = this.anlyResult.split('|')[2].split(';').toString().split(',')[6];
				this.rpt_result.jiashu.pf = this.anlyResult.split('|')[2].split(';').toString().split(',')[7];
				this.rpt_result.jianshu.blqk = this.anlyResult.split('|')[2].split(';').toString().split(',')[8];
				this.rpt_result.jianshu.pf = this.anlyResult.split('|')[2].split(';').toString().split(',')[9];
				this.rpt_result.ratingsSuggestions.gtxScore +=
				 Number(this.rpt_result.txljx.pf) + Number(this.rpt_result.xby.pf) + Number(this.rpt_result.td.pf) + 
				 Number(this.rpt_result.jiashu.pf) + Number(this.rpt_result.jianshu.pf);
				 this.rpt_result.userInfo.duration = this.clTime;
				 this.rpt_result.userInfo.date = this.nowTime.split(' ')[0];
				 this.rpt_result.userInfo.time = this.nowTime.split(' ')[1];
				 this.rpt_result.userInfo.taixin_id = this.taixinId;
				 this.rpt_result.userInfo.pregrant_id = pregnantID;
				let params = {
					taixin_id: this.taixinId,
					rpt_result: JSON.stringify(this.rpt_result),
					pregrant_id: pregnantID
				}
				console.log(JSON.stringify(params));
				this.$u.post('/UploadTaixinReport',params).then(res => {
					console.log(res);
				}).catch(err => {
					console.log(err);
				})
				console.log('handleAnlyResult');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.wrap {
		background-color: #ede0e7;
	}

	.u-col-item {
		width: 160rpx;
		height: 150rpx;
		border-right: 2rpx solid #ebebeb;
	}

	.u-col-lh {
		line-height: 70rpx;
	}

	.chart-size {
		height: 100%;
		width: 100%;
	}

	@keyframes flash {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 0.8;
			color: #f00;
			font-size: 32rpx;
		}

		75% {
			opacity: 1;
			color: #f00;
			font-size: 32rpx;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes switchFlash {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 1;
			background-color: #FFFF00;
			color: #000;
		}

		100% {
			opacity: 0;
		}
	}

	.flash {
		animation: flash 3s linear infinite;
	}

	.switchFlash {
		animation: switchFlash 2s linear infinite;
	}
</style>
