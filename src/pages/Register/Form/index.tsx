import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col, Button } from 'react-bootstrap';
import SCHEMA from '../../../schema';
import RegisterData from '../../../utils/type';
import PATH from '../../../utils/path';
import '../../register.scss';

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

const Form = (): JSX.Element => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, errors },
    } = useForm<RegisterData>({
        mode: "onBlur",
        defaultValues: initialValues,
        resolver: yupResolver(SCHEMA),
    });

    const onSubmit = (data: RegisterData) => {
        console.log(data);
        navigate(PATH.CONFIRM, {
            state: data
        });
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

export default Form;