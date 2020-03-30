export default function (preState=0,action){ //preState=0的含义是设置初始化状态
	//从action中获取type(加还是减？)、data(加几？减几？)
	const {type,data} = action
	//提前准备好一个newState用于返回
	let newState
	//根据type执行不同的逻辑
	switch (type) {
		case 'increment': //如果是加
			newState = preState + data
			return newState
		case 'decrement': //如果是减
			newState = preState - data
			return newState
		default: //如果是初始化
			return preState
	}
} 