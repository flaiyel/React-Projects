import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';

const CreateStudent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [description, setDescrition] = useState('');

    const onChangeStudentName = e => {
        setName(e.target.value);
    }

    const onChangeStudentAge = e => {
        setAge(e.target.value);
    }

    const onChangeStudentDescription = e => {
        setDescrition(e.target.value);
    }

    const onSubmit = () => {
        console.log(name,age,description);
    }

    return (
        <div>
            <Form style={{ padding: '0 25%' }}>
                <Form.Item label='Name'>
                    <Input type="text"  onChange={ onChangeStudentName }/>
                </Form.Item>

                <Form.Item label='Age'>
                    <Input type="number" onChange={ onChangeStudentAge }/>
                </Form.Item>

                <Form.Item label='Description'>
                    <Input type="text" onChange={ onChangeStudentDescription }/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }} onClick={ onSubmit }>
                        Create Student
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default CreateStudent;