<template>
	<div>
		<div class="cityheardr">
			<div class="heardrtop">
				<div class="headericon">
					<h1 @click="go()"><</h1>
				</div>
				<div class="headertext">
					<p style="margin-left: 30%;">城市选择</p>
				</div>
			</div>
			<div class="header-input">
				<input type="text" v-model="citytext" @keyup="showcity()" placeholder="选择城市">
			</div>
			
		</div>
		<div class="showcity" v-show="show">
			<ul>
				<li v-for="item in searchcity" @click="fanhui(item)">{{item}}</li>
			    <li v-if="searchcity==''">暂无城市</li>
			</ul>
		</div>
		<p class="newdatatit">当前城市</p>
		<div class="newcitys">
			<li>{{newcity}}</li>
		</div>

		<p class="hotcity">热门城市</p>
		<div class="hotcitys">
			<ul>
				<li v-for="item in hotcity" @click="fanhui(item.name)" >{{item.name}}</li>
			</ul>
		</div>
		<div class="leftmao">
			<p v-for="(item,key,index) in city">
				<a :href="'#'+key" > {{  key}}</a>
			</p>
			
		</div>
		<div v-for="(item,key,index) in city">
			<div class="hotcity" :id="key">
				<span>{{key}} </span>
			</div>
			<ul v-for="(item,indexs) in item">
				<li class="allli" @click="fanhui(item.name)"><span>{{item.name}}</span></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				newcity:"",
                hotcity:[],
				city:[],
				citytext:"",
				arr:[]
				
			}
		},
		created() {
			this.newcity=this.$store.state.data;
			this.getlist()
		},
		methods:{
		  async	getlist(){
				const {data:res} = await this.$axios.get('static/mock/city.json')
				this.hotcity=res.data.hotCities
				this.city = res.data.cities
				for( var  i  in this.city){
					this.city[i].forEach(item=>{
							this.arr.push(item.name)
					})
				}
			},
			go(){
				this.$router.push("/")
			},
			fanhui(item){
				  this.$store.commit('a',item) 
				  this.$router.push(`/`)
			},
			showcity(){
				this.show=true
				if(this.citytext==""){
					this.show=false
				}
			
			}
		},
		computed: {
			searchcity: function() {
				return this.arr.filter((text) => {
					return text.match(this.citytext);
				})
			}
		},
		components: {

		}
	}
</script>

<style>
	.showcity{
		z-index: 999;
		width: 100%;
		background-color: #FFFFFF;
	}
	.showcity li{
		color: #000000;
	}
	.leftmao{
		position: fixed;
		
		right: 0;
		top: 91px;
	}
	.leftmao a{
		    text-decoration: none;
		    width: 20px;
		    height: 20px;
		    text-align: center;
		    line-height: 20px;
		    margin: 5px 0;
		    color: #02B2EC;
	}
	.cityheardr {
		height: 90px;
		line-height: 42.4px;
		background: #00bcd4;
		color: #fff;
		width: 100%;
	}

	.heardrtop {
		display: flex;

		width: 100%;
		height: 43px;
	}

	.headericon {
		width: 20%;
	}

	.headertext {
		width: 80%;
		line-height: 43px;
		/* text-align: center; */
	}

	.header-input {
		line-height: 30px;
		height: 32px;
		margin: 0 5px;
		margin-top: 10px;
		padding-left: 20px;
		background: #fff;
		border-radius: 5px;
		color: #ccc;
	}

	.header-input input {
		outline: none;
		border: 1px solid #fff;
		width: 249px;
		height: 23px;
	}

	.hotcity {
		line-height: 30px;
		font-size: 15px;
		color: #FFFDEF;
		width: 100%;
		height: 30px;
		background-color: #CACACA;
	}

	.hotcitys {
		/* height: 40px; */
		background-color: #fff;
		padding: 10px;
	}

	.hotcitys ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.hotcitys ul li {
		float: left;
		width: 27%;
		margin: 10px;
		/* flex: 1;
		flex-grow:1; */
		list-style: none;

		border: 1px solid #404040;
		text-align: center;
	}

	.newdatatit {

		line-height: 30px;
		font-size: 15px;
		color: #FFFDEF;
		width: 100%;
		height: 30px;
		background-color: #CACACA;
	}

	.newcitys {
		height: 40px;
		background-color: #fff;
		padding: 10px;
	}

	.newcitys li {
		list-style: none;
		width: 100px;
		border: 1px solid #404040;
		text-align: center;

	}
	.allli{
		height: 32px;
		    line-height: 32px;
		    border-bottom: 1px solid #ccc;
		    font-size: 13px;
		    text-indent: 20px;
		    list-style: none;
	}
</style>
