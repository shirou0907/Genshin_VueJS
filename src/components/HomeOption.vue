<template>
    <div class="wrap-option">
        <div class="option-description" v-if="option == 'Window'">
            <span>● Cấu hình tối thiểu</span>
            <p>Hệ điều hành: Windows 7 SP1 64-bit hoặc Windows 8.1 64-bit hoặc Windows 10 64-bit</p>
            <p>Bộ xử lý: Intel Core i5 hoặc tương đương</p>
            <p>RAM: 8GB</p>
            <p>Card đồ họa: tối thiểu NVIDIA® GeForce® GT 1030 </p>
            <p>Phiên bản DirectX: 11</p>
            <p>Dung lượng lưu trữ: Để trống khoảng 40GB</p>
            <br>
            <span>● Cấu hình đề xuất</span>
            <p>Hệ điều hành: Windows 7 SP1 64-bit hoặc Windows 8.1 64-bit hoặc Windows 10 64-bit</p>
            <p>Bộ xử lý: Intel Core i7 hoặc tương đương</p>
            <p>RAM: 16GB</p>
            <p>Card đồ họa: Từ NVIDIA® GeForce® GTX 1060 6GB trở lên</p>
            <p>Phiên bản DirectX: 11</p>
            <p>Dung lượng lưu trữ: Để trống khoảng 40GB</p>
            <p>Đối với các thiết bị có hiệu suất thấp, có thể sẽ xuất hiện các tình trạng như không thể cài đặt, không
                thể khởi động, đen màn hình, giật lag v.v...</p>
        </div>

        <div class="option-description" v-if="option == 'Android'">
            <span>● Cấu hình hỗ trợ</span>
            <p>Yêu cầu tương thích: Thiết bị sử dụng CPU 64-bit Arm v8a</p>
            <p>GPU không dùng kiến trúc PowerVR</p>
            <p>Bộ nhớ: 3GB trở lên</p>
            <p>Phiên bản hệ thống: Android 7.0 trở lên</p>
            <p>Dung lượng lưu trữ: Để trống khoảng 10 GB bộ nhớ</p>
            <br>
            <span>● Cấu hình đề xuất</span>
            <p>CPU: Qualcomm Snapdragon 845, Kirin 820 trở lên</p>
            <p>CPU: Qualcomm Snapdragon 845, Kirin 820 trở lên</p>
        </div>

        <div class="option-description" v-if="option == 'iOS'">
            <span>● Dung lượng lưu trữ: </span>
            <p>Để trống khoảng 20 GB bộ nhớ</p>
            <br>
            <span>● Hệ thống hỗ trợ: </span>
            <p>iOS 9.0 trở lên</p>
            <p>(Hỗ trợ tay cầm Bluetooth yêu cầu hệ thống iOS 14 trở lên)</p>
            <br>
            <span>● Thiết bị đề cử:</span>
            <p>iPhone 8 Plus, iPhone X, iPhone XS, iPhone XS Max, iPhone XR, iPhone 11, iPhone 11 Pro, iPhone 11 Pro
                Max, iPhone SE (Thế hệ thứ 2), iPhone 12, iPhone 12 mini, iPhone 12 Pro, iPhone 12 Pro Max, iPhone 13,
                iPhone 13 mini, iPhone 13 Pro, iPhone 13 Pro Max, iPad Air (Thế hệ thứ 3), iPad mini (Thế hệ thứ 5),
                iPad Pro (Thế hệ thứ 2) 12.9 inch, iPad Pro (Thế hệ thứ 2) 10.5 inch, iPad Pro (Thế hệ thứ 3) 11 inch,
                iPad Pro (Thế hệ thứ 3) 12.9 inch, iPad Pro (Thế hệ thứ 4) 11 inch, iPad Pro (Thế hệ thứ 4) 12.9 inch,
                iPad Air (Thế hệ thứ 4), iPad (Thế hệ thứ 8), iPad mini (Thế hệ thứ 6), iPad (Thế hệ thứ 9).</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['option'],
    }
</script>

<style scoped>
    .wrap-option {
        padding: 60px 100px;
    }

    span {
        display: block;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }
</style>