import * as yup from "yup";
import Regex from "admin/constants/regex";
const Schema = yup.object().shape({ 
    name: yup
        .string()
        .required("Vui lòng nhập tên."),
    email: yup
        .string()
        .required("Vui lòng nhập email.")
        .matches(Regex.email, "Địa chỉ email không hợp lệ"),
    phone: yup
        .string()
        .required("Vui lòng nhập số điện thoại.")
        .matches(Regex.phone, "Số điện thoại không hợp lệ"),
    province: yup
        .object()
        .required("Vui lòng chọn tỉnh/thành phố."),
    address_details: yup
        .string()
        .required("Vui lòng nhập địa chỉ chi tiết."),
});
export default Schema;