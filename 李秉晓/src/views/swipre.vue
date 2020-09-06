<template>
	<div class="wrapper">	
	<swiper :options="swiperOption" v-if="showSwiper">
	    <swiper-slide v-for='item in list' :key="item.id">
	        <img class="swiper-img" :src="item.imgUrl">
	    </swiper-slide>
	    <div class="swiper-pagination"   v-for='item in list' :key="item.id" slot="pagination"></div>
	</swiper>
	</div>
</template>

<script>
	import '../assets/css/swiper.css'
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	import Vue from 'vue'
	
	export default {
	props: {
	    list: Array
	},
	name: 'HomeSwiper',

	data () {
	    return {
	        swiperOption: {
	          
	        
	            loop: true,
				
                type: "bullets"
	        }
	
	    }
	},
	computed: {
	    showSwiper() {
			console.log(666)
	        return this.list.length
	    }
	}
	}
</script>

<style>
	.wh_content {
		font-size: 50px;
		text-align: center;
	}
	
	.wh_content img {
		width: 100%;
		height: 100%;
	}
</style>
