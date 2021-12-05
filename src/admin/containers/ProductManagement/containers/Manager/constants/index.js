import * as yup from "yup";
import Regex from "admin/constants/regex";
const Schema = yup.object().shape({ 
    name: yup
        .string()
        .required("Vui lòng nhập tên."),
    price_current: yup
        .string()
        .required("Vui lòng nhập giá sản phẩm."),
    image: yup
        .string()
        .required("Vui lòng nhập địa chỉ hình ảnh."),
    category: yup
        .object()
        .required("Vui lòng chọn loại sản phẩm.")
    
});
export default Schema;