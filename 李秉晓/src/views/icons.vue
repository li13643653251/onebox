<template>
	<div class="icon">
		<swiper :options="swiperOptions">
		  <swiper-slide v-for="(page, index) in pages" :key="index">
			  <ul>
				  <li v-for="item in page" :key="item.id">
				   <img :src="item.imgUrl" alt  />
				   <p class="zi">{{item.desc}}</p>
				  </li>
			  </ul>
		
		  </swiper-slide>
		</swiper>
	</div>
</template>

<script>
	import '../assets/css/swiper.css'
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	import Vue from 'vue'
	export default {
		name: 'HomeIcons',
		props: {
		    listicons:Array
		},
		
		data () {
		    return {
		        swiperOptions: {
					  autoplay: false
				}
		
		    }
		},
		created() {
			// console.log(666)
			// console.log(this.listicons)
		},
		mounted() {
			console.log(this.listicons)
		},
		computed:{
		  pages () {
		    const pages = []
		    this.listicons.forEach((item, index) => {
		      const page = Math.floor(index / 8)
			  console.log(page)
		      if (!pages[page]) {
		        pages[page] = []
		      }
		      pages[page].push(item)
		    })
		    return pages
		  }
		},
	}
</script>

<style>
	.icon{
		padding: 10px;
	}
	.icon ul  {
		display: flex;
		 flex-wrap:wrap;
		/* width: 25%; */
		list-style: none;
		/* float: left; */
		text-align: center;
	}
	.icon ul li{
		overflow: hidden;
		width: 25%;
		list-style: none;
	}
	.icon ul li img{
	width: 40%;
	}
</style>
