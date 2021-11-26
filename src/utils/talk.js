import { numRan } from './numberDis.js'
import { recDate } from './format.js'
const list = [
    {
        date: talkDate(),
        text: { text: "我是您的淘客服！" },
        mine: false,
        name: "淘客服",
        img: require('@/images/kf.png')
    },
    {
        date: talkDate(),
        text: { text: "你有什么话想对我说的吗？" },
        mine: false,
        name: "淘客服",
        img: require('@/images/kf.png')
    }
]

const ranTalk = [
    '亲，我不知道你在说什么！',
    '山有木兮木有枝，心悦君兮君不知。',
    '人生若只如初见，何事秋风悲画扇。',
    '十年生死两茫茫，不思量，自难忘。',
    '曾经沧海难为水，除却巫山不是云。',
    '只愿君心似我心，定不负相思意。',
    '愿得一心人，白头不相离。',
    '人间四月芳菲尽，山寺桃花始盛开。',
    '春宵一刻值千金，花有清香月有阴。',
    '今人不见古时月，今月曾经照古人。',
    '海上生明月，天涯共此时。',
    '明月几时有？把酒问青天。',
    '男儿何不带吴钩，收取关山五十州。',
    '落红不是无情物，化作春泥更护花。',
    '苟利国家生死以，岂因祸福避趋之！',
    '落霞与孤鹜齐飞，秋水共长天一色。',
    '自古逢秋悲寂寥，我言秋日胜春朝。',
    '青山隐隐水迢迢，秋尽江南草未凋。',
    '银烛秋光冷画屏，轻罗小扇扑流萤。',
    '停车坐爱枫林晚，霜叶红于二月花。',
    '庭前落尽梧桐，水边开彻芙蓉。',
    '繁霜尽是心头血，洒向千峰秋叶丹。'
]

function ranOnTa() {
    return {
        date: talkDate(),
        text: { text: ranTalk[numRan()] },
        mine: false,
        name: "淘客服",
        img: require('@/images/kf.png')
    }
}

function talkDate() {
    const obj = {
        timers: {}
    }
    recDate(obj)
    const { timers: { year, month, day, hour, minute, second} } = obj
    return `${year}/${month}/${day} ${hour}:${minute}:${second}`
}

export {
    list,
    ranTalk,
    ranOnTa,
    talkDate
}