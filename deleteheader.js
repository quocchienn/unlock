// Xóa một số header để tránh bị phát hiện
var headers = $request.headers;

// Danh sách các header cần xóa
delete headers["X-RevenueCat-ETag"];
delete headers["X-RevenueCat-UserID"];
delete headers["X-RevenueCat-Nonce"];
delete headers["X-RevenueCat-Client-Version"];
delete headers["X-RevenueCat-Transaction-Id"];
delete headers["X-RevenueCat-Anonymous-Id"];

$done({ headers });
