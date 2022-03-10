import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  currentLocale: "en",
  currentSwitch: false,
  locale: {
    en: {
      messages: {
        login: "LOGIN",
        lk_create_acount: "Create an acount?",
        form_holder_pasword: "Password",

        signUp: "SIGN UP",

        form_holder_firstname: "First name",
        form_holder_lastname: "Last name",
        form_holder_phone: "Phone",
        form_holder_gender: "Gender",
        form_holder_address: "Address",
        form_holder_bio: "Something about yourself",
        form_error: "Do not emty!",
        form_error_email: "Invalid email format!",
        form_error_password: "Please input your password!",

        form_firstname: "First name",
        form_lastname: "Last Name",
        form_phone: "Phone",
        form_gender: "Gender",
        form_address: "Address",
        form_password: "Password",
        form_bio: "Bio",
        form_button_save: "SAVE",
        form_button_cancel: "CANCEL",
        form_button_edit: "EDIT",

        db_list_users: "LIST USERS",
        db_create_user: "CREATE USERS",
        db_confirm_delete: "Delete user?",
        db_confirm_delete_okText: "Yes",
        db_confirm_delete_cancelText: "No",

        compo_table_listUser: "LIST OF USER",
        compo_table_col_name: "Name",
        compo_table_col_email: "Email",
        compo_table_col_phone: "Phone",
        compo_table_col_gender: "Gender",
        compo_table_col_action: "Action",
        compo_table_btn_edit: "Edit",
        compo_table_btn_delete: "Delete",

        compo_create_user: "CREATE NEW USER",
        compo_update_user: "UPDATE USER",
      },
    },
    vn: {
      messages: {
        login: "ĐĂNG NHẬP",
        lk_create_acount: "Tạo mới một tài khoản?",
        form_holder_pasword: "Mật khẩu",

        signUp: "ĐĂNG KÝ",

        form_holder_firstname: "Họ",
        form_holder_lastname: "Tên",
        form_holder_phone: "Điện thoại",
        form_holder_gender: "Giới tính",
        form_holder_address: "Địa chỉ",
        form_holder_bio: "Một vài điều về bạn...",

        form_error: "Vui lòng không bỏ trống!",
        form_error_email: "Sai định dạng của email!",
        form_error_password: "Vui lòng nhập password!",

        form_firstname: "Họ ",
        form_lastname: "Tên",
        form_phone: "Điện thoại",
        form_gender: "Giới tính",
        form_address: "Địa chỉ",
        form_password: "Mật khẩu",
        form_bio: "Về cá nhân",
        form_button_save: "LƯU",
        form_button_cancel: "HỦY",
        form_button_edit: "CHỈNH SỬA",

        db_list_users: "DS NGƯỜI DÙNG",
        db_create_user: "TẠO NGƯỜI DÙNG",
        db_confirm_delete: "Xóa người dùng?",
        db_confirm_delete_okText: "Có",
        db_confirm_delete_cancelText: "Không",

        compo_table_listUser: "DANH SÁCH NGƯỜI DÙNG",
        compo_table_col_name: "Tên",
        compo_table_col_email: "Email",
        compo_table_col_phone: "Điện thoại",
        compo_table_col_gender: "Giới tính",
        compo_table_col_action: "Thao tác",
        compo_table_btn_edit: "Sửa",
        compo_table_btn_delete: "Xóa",

        compo_create_user: "TẠO NGƯỜI DÙNG MỚI",
        compo_update_user: "CHỈNH SỬA NGƯỜI DÙNG",
      },
    },
  },
};

export const TranlateSlice = createSlice({
  name: "TranlateSlice",
  initialState,

  reducers: {
    changeLocale: (state, action) => {
      state.currentLocale = action.payload;
    },
    setSwitch: (state, action) => {
      state.currentSwitch = action.payload;
    },
  },
});

export const { changeLocale, setSwitch } = TranlateSlice.actions;

export const getLanguage = (state) => state.TranlateSlice;

export default TranlateSlice.reducer;
