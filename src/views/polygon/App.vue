<!--
@file: 主APP引入文件
-->
<template>
	<div id="app">
		<index></index>
	</div>
</template>

<style lang="less">
html,body,#app{
	width:100%;
	height:100%;
	margin:0;
	padding:0;
}
</style>

<script>
import index from './src/index';
import { baseMixin } from "@Lib/bus/baseMixin";
export default {
	mixins: [baseMixin],
	components: {
		index
	},
	data() {
		return {};
	}
};
</script>
