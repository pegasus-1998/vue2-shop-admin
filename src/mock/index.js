import Mock from 'mockjs'
import goodShop from './message/goodShop'
import guessLike from './message/guessLike'
import bike from './message/bike'
import shoe from './message/shoe'
import fruits from './message/fruits'
import watch from './message/watch'
import xfs from './message/xfs'
import shopMes from './message/shopMes'
Mock.setup({
    timeout: '200-600'
})

Mock.mock('/good/shop', goodShop)
Mock.mock('/guess/like', guessLike)
Mock.mock('/bike', bike)
Mock.mock('/shoe', shoe)
Mock.mock('/fruits', fruits)
Mock.mock('/watch', watch)
Mock.mock('/xfs', xfs)
Mock.mock('/shopMes', shopMes)