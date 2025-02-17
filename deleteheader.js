var headers = $request.headers;
console.log("Headers: ", JSON.stringify(headers, null, 2));

// Xóa các header không cần thiết
delete headers["X-Duolingo-ETag"];
delete headers["X-Duolingo-UserID"];
delete headers["X-Duolingo-Nonce"];
delete headers["X-Duolingo-Client-Version"];

$done({ headers });
