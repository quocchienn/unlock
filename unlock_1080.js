# Shadowrocket: 2024-12-1 12:07:55

let obj = JSON.parse($response.body);

// Mở khóa VIP
if (obj.data) {
    obj.data.vip = {
        "type": 2,
        "status": 1,
        "vipDueDate": 4092599349000,
        "isVip": 1,
        "vipStatus": 1,
        "themeType": 0
    };
    obj.data.vipType = 2;
    obj.data.vipStatus = 1;
}

// Mở khóa độ phân giải
if (obj.data.video) {
    obj.data.video.supportFormats = [1080, 720, 480, 360];
}

$done({ body: JSON.stringify(obj) });
