import dayjs from 'dayjs'

function dateFormat(_this) {
    recDate(_this)
    setInterval(() => {
        recDate(_this)
    },1000)
}

function recDate(_this) {
    const val = dayjs(Date.now())
    _this.timers.month = val.$M + 1,
    _this.timers.day = val.$D,
    _this.timers.hour = val.$H,
    _this.timers.minute = val.$m,
    _this.timers.second = val.$s
    _this.timers.year = val.$y
    _this.timers.month < 10 ? (_this.timers.month = "0" + _this.timers.month) : _this.timers.month;
    _this.timers.day < 10 ? (_this.timers.day = "0" + _this.timers.day) : _this.timers.day;
    _this.timers.hour < 10 ? (_this.timers.hour = "0" + _this.timers.hour) : _this.timers.hour;
    _this.timers.minute < 10 ? (_this.timers.minute = "0" + _this.timers.minute) : _this.timers.minute;
    _this.timers.second < 10 ? (_this.timers.second = "0" + _this.timers.second) : _this.timers.second;
    switch(val.$W) {
        case 0: 
            _this.timers.week = '日'
            break
        case 1:
            _this.timers.week = '一'
            break
        case 2:
            _this.timers.week = '二'
            break
        case 3:
            _this.timers.week = '三'
            break
        case 4:
            _this.timers.week = '四'
        case 5:
            _this.timers.week = '五'
            break
        case 6:
            _this.timers.week = '六'
            break
        default: 
        _this.timers.week = '一'
    }
}

export {
    dateFormat,
    recDate
}