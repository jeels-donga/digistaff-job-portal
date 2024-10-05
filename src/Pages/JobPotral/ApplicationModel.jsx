import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
    Input,
    Button,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

// Validation schema
const validationSchema = Yup.object().shape({
    resume: Yup.mixed().required('Resume is required'),
    currentCTC: Yup.number().required('Current CTC is required'),
    expectedCTC: Yup.number().required('Expected CTC is required'),
    noticePeriod: Yup.string().required('Notice period is required'),
    relevantExperience: Yup.string().required('Relevant experience is required'),
    availability: Yup.string().required('Availability is required'),
    phone: Yup.string().required('Phone number is required'),
    locationPreference: Yup.string().required('Location preference is required'),
});

// Application Form Component
const ApplicationForm = ({ onSubmit }) => (
    <Formik
        initialValues={{
            resume: null,
            currentCTC: '',
            expectedCTC: '',
            noticePeriod: '',
            relevantExperience: '',
            availability: '',
            phone: '',
            locationPreference: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({ errors, touched, setFieldValue }) => (
            <Form>
                <div className="space-y-4">
                    <div>
                        <Typography variant="h6">Resume</Typography>
                        <input
                            type="file"
                            onChange={(event) => {
                                setFieldValue("resume", event.currentTarget.files[0]);
                            }}
                        />
                        {errors.resume && touched.resume && <div className="text-red-500">{errors.resume}</div>}
                    </div>
                    <Field name="currentCTC" as={Input} label="Current CTC" />
                    {errors.currentCTC && touched.currentCTC && <div className="text-red-500">{errors.currentCTC}</div>}
                    <Field name="expectedCTC" as={Input} label="Expected CTC" />
                    {errors.expectedCTC && touched.expectedCTC && <div className="text-red-500">{errors.expectedCTC}</div>}
                    <Field name="noticePeriod" as={Input} label="Notice Period" />
                    {errors.noticePeriod && touched.noticePeriod && <div className="text-red-500">{errors.noticePeriod}</div>}
                    <Field name="relevantExperience" as={Input} label="Relevant Experience" />
                    {errors.relevantExperience && touched.relevantExperience && <div className="text-red-500">{errors.relevantExperience}</div>}
                    <Field name="availability" as={Input} label="Availability" />
                    {errors.availability && touched.availability && <div className="text-red-500">{errors.availability}</div>}
                    <Field name="phone" as={Input} label="Phone" />
                    {errors.phone && touched.phone && <div className="text-red-500">{errors.phone}</div>}
                    <Field name="locationPreference" as={Input} label="Location Preference" />
                    {errors.locationPreference && touched.locationPreference && <div className="text-red-500">{errors.locationPreference}</div>}
                </div>
                <DialogFooter>
                    <Button type="submit" variant="gradient" color="green">
                        Apply
                    </Button>
                </DialogFooter>
            </Form>
        )}
    </Formik>
);

// Application Modal Component
const ApplicationModal = ({ isOpen, onClose, job, onSubmit }) => (
    <Dialog open={isOpen} handler={onClose} size="lg">
        <DialogHeader>Apply for {job?.title}</DialogHeader>
        <DialogBody divider>
            <ApplicationForm onSubmit={onSubmit} />
        </DialogBody>
        <DialogFooter>
            <Button variant="text" color="red" onClick={onClose} className="mr-1">
                Cancel
            </Button>
        </DialogFooter>
    </Dialog>
);

export { ApplicationForm, ApplicationModal };