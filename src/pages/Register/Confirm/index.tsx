import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from "react-router-dom";
import RegisterData from '../../../utils/type';
import { Row, Col, Button } from 'react-bootstrap';
import PATH from '../../../utils/path';



const Confirm = (): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state as RegisterData;

    const user_name = data.user_name;
    const email = data.email;
    const password = data.password;

    const { handleSubmit } = useForm<RegisterData>();

    const onSubmit = (data: RegisterData) => {
        console.log(data);
        navigate('/');
    }

    const handleGoBackForm = () => {
        navigate(PATH.REGISTER);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col xs={5} >ユーザー名</Col>
                    <Col xs={5} >{user_name}</Col>
                </Row>
                <Row>
                    <Col xs={5}>メールアドレス</Col>
                    <Col xs={5}>{email}</Col>
                </Row>
                <Row>
                    <Col xs={5}>パスワード</Col>
                    <Col xs={5}>{password}</Col>

                </Row>
                <Row>
                    <Button
                        type="button"
                        onClick={() => handleGoBackForm()}
                    >
                        登録画面に戻る
                    </Button>
                    <Button
                        type="submit"
                        className="submit-btn"
                        value="Submit"
                    >確認画面へ
                    </Button>

                </Row>
            </form>
        </>

    );
};

export default Confirm;