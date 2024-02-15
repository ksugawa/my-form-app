import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col, Button } from 'react-bootstrap';
import '../../register.scss';
import PATH from '../../../utils/path';

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
})

/***
* 会員登録フォーム初期値
* @return 
*/
const initialValues = {
    user_name: "",
    email: "",
    password: "",
    password_confirm: "",
};

const Register = (): JSX.Element => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, errors },
    } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(SCHEMA),
    });

    const onSubmit = (data: any) => {
        console.log(data);
        navigate(PATH.CONFIRM);
    };
    
    return (
        <>

        <h1>会員登録フォーム</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-body">

                <div className="form-body-container">
                    <Col xs={5} className="form-item">
                        <label htmlFor="user_name">
                            ユーザー名<span className="required">必須</span>
                        </label>
                        <input
                            id="user_name"
                            {...register('user_name', {
                                required: true,
                            })}
                            placeholder="ユーザー名"
                        />
                        <span className="error-msg">{errors.user_name?.message}</span>
                    </Col>
                    <Col xs={5} className="form-item">
                        <label htmlFor="email">
                            メールアドレス<span className="required">必須</span>
                        </label>
                        <input
                            id="email"
                            {...register('email', {
                                required: true
                            })}
                            placeholder="メールアドレス"
                        />
                        <span className="error-msg">{errors.email?.message}</span>
                    </Col>
                    <Col xs={5} className="form-item">
                        <label htmlFor="password">
                            パスワード<span className="required">必須</span>
                        </label>
                        <input
                            id="password"
                            {...register('password', {
                                required: true
                            })}
                            placeholder="パスワード"
                        />
                        <span className="error-msg">{errors.password?.message}</span>
                    </Col>
                    <Col xs={5} className="form-item">
                        <label htmlFor="password_confirm">
                            パスワード（確認用）<span className="required">必須</span>
                        </label>
                        <input
                            id="password_confirm"
                            {...register('password_confirm', {
                                required: true
                            })}
                            placeholder="パスワードを再入力"
                        />
                        <span className="error-msg">{errors.password_confirm?.message}</span>
                    </Col>
                    <Button
                        disabled={!isDirty || !isValid}
                        type="submit"
                        className="submit-btn"
                        value="Submit"
                    >確認画面へ
                    </Button>
                </div>
            </form>
        </>
    );
};

export default Register;