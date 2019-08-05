import { Button } from '@material-ui/core';
import { FormContainer } from 'containers/Home/components/styled';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { compose } from 'recompose';
import * as Yup from 'yup';
import { AppStore, appStoreSelector } from '../../../app/AppStore';


export const validationSchema = Yup.object().shape({
    numberOfBalls: Yup.number()
        .typeError('must be a number')
        .positive('please insert positive integer')
        .integer('please insert positive integer')
        .max(10, 'max number of balls is 10')
        .required('this filed is required'),
});


export interface UserInputFormProps {
    onSubmit: (values) => void
    numberOfBalls?: number
    appStore?: AppStore
}

export function UserInputFormView({ onSubmit, numberOfBalls = 0, appStore }: UserInputFormProps) {

    const onFormSubmit = (values, { setSubmitting }) => {
        setSubmitting(false);
        onSubmit(values)
        appStore.clearPosition();
    }

    return (
        <FormContainer>
            <Formik
                initialValues={{ numberOfBalls }}
                validationSchema={validationSchema}
                onSubmit={onFormSubmit}
                render={({ submitForm }) => (
                    <Form style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: '100%',
                        padding: '0.5rem'
                    }}>

                        <Field
                            type="text"
                            label="number of balls"
                            name="numberOfBalls"
                            component={TextField}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={submitForm}
                        >
                            Run
                        </Button>
                    </Form>
                )}
            />
        </FormContainer>
    )
}

const enhance = compose(
    inject(appStoreSelector),
    observer
);

export const UserInputForm: any = enhance(UserInputFormView as any)
