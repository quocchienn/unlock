var obj = JSON.parse($response.body);

// Mở khóa gói Duolingo Max
obj['duolingo_plus'] = true;
obj['max_ai_tutor'] = true;
obj['practice_hub'] = true;

// Đánh dấu tài khoản là Premium vĩnh viễn
if (obj['currentUser']) {
    obj['currentUser']['has_plus'] = true;
    obj['currentUser']['plus_style'] = 'SUPER';
    obj['currentUser']['has_ai_tutor'] = true;
    obj['currentUser']['has_practice_hub'] = true;
    
    // Thêm thông tin gói Max
    obj['currentUser']['subscription'] = {
        "product_id": "duolingo_max",
        "tier": "MAX",
        "expiration": "9999-09-27T23:59:59Z", // Thời gian hết hạn vĩnh viễn
        "is_lifetime": true
    };
}

// Nếu Duolingo lưu thông tin trong `features`
if (obj['features']) {
    obj['features']['plus'] = true;
    obj['features']['max_ai_tutor'] = true;
    obj['features']['practice_hub'] = true;
    obj['features']['subscription'] = {
        "product_id": "duolingo_max",
        "tier": "MAX",
        "expiration": "9999-09-27T23:59:59Z",
        "is_lifetime": true
    };
}

$done({body: JSON.stringify(obj)});
