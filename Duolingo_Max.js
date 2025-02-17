const mapping = {
  'Duolingo': ['max_subscription']
};

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
var obj = JSON.parse($response.body);

// Cập nhật thông báo
obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

// Cấu hình gói Duolingo Max với thời gian hết hạn vĩnh viễn
var duolingoSub = {
    is_sandbox: false,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: "9999-09-27T23:59:59Z",  // Vĩnh viễn
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: "2024-09-12T01:04:18Z",
    purchase_date: "2024-09-12T01:04:17Z",
    store: "app_store"
};

var duolingoEntitlement = {
    grace_period_expires_date: null,
    purchase_date: "2024-09-12T01:04:17Z",
    product_identifier: "duolingo_max",
    expires_date: "9999-09-27T23:59:59Z"
};

// Kiểm tra nếu User-Agent khớp với Duolingo
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
    let [entitlement, subscription] = mapping[match];
    obj.subscriber = obj.subscriber || {};
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};
    
    obj.subscriber.subscriptions[subscription] = duolingoSub;
    obj.subscriber.entitlements[entitlement] = duolingoEntitlement;
} else {
    obj.subscriber = obj.subscriber || {};
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};
    
    obj.subscriber.subscriptions["duolingo_max"] = duolingoSub;
    obj.subscriber.entitlements["max"] = duolingoEntitlement;
}

$done({body: JSON.stringify(obj)});
