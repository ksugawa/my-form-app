import * as yup from 'yup';


/***
 * 会員登録フォームスキーマ
 * @return
 */
const REQUIEW_MSG = '必須入力項目です'
const VIOLATION_EMAIL = 'メールアドレスの形式ではありません。'
const VIOLATION_NAME_COUNT = '名前は100文字以下で入力してください'
const VIOLATION_PASSWORD = 'パスワードは16文字以下で入力してください'
const VIOLATION_PASSWORD_CONFIRM = '入力したパスワードが一致しません'

const SCHEMA = yup.object().shape({
    user_name: yup.string().required(REQUIEW_MSG).max(100, VIOLATION_NAME_COUNT),
    email: yup.string().required(REQUIEW_MSG).max(50, VIOLATION_EMAIL),
    password: yup.string().required(REQUIEW_MSG).max(16, VIOLATION_PASSWORD),
    password_confirm: yup
        .string()
        .required(REQUIEW_MSG)
        .oneOf([yup.ref('password'), ''], VIOLATION_PASSWORD_CONFIRM)
});


export default SCHEMA;