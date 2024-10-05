import React from "react";
import { Dialog } from "@material-tailwind/react";
import { Button, Input, Typography } from "@material-tailwind/react";

const QuestionAnsModal = ({
    show,
    handleClose,
    handleRegWithoutApplyShow,
    oneJobPost,
    applyJobFormik,
    handleAwnsers,
}) => {
    const isFormValid = () => {
        if (!oneJobPost) return false;
        for (const val of oneJobPost) {
            if (val.question && val.question.trim() !== "") {
                for (let i = 0; i < val.question.split(",").length; i++) {
                    if (!applyJobFormik.values[`QnA${i}`]) return false;
                }
            }
        }
        return true;
    };

    return (
        <Dialog open={show} onClose={handleClose} size="md" className="apply_form">
            <Dialog.Header>
                <Typography variant="h5">Give Answers And Apply</Typography>
            </Dialog.Header>
            <Dialog.Body>
                {oneJobPost ? (
                    <div className="space-y-4">
                        {oneJobPost.map((val, index) => (
                            <div key={index}>
                                <Typography className="font-semibold">Questions</Typography>
                                {val.question === "" ? (
                                    <Typography>No Questions</Typography>
                                ) : (
                                    val.question.split(",").map((question, i) => (
                                        <div key={i} className="mb-4">
                                            <Typography>
                                                {question} <span className="text-red-500">*</span>
                                            </Typography>
                                            <Input
                                                size="small"
                                                type="text"
                                                placeholder="Your Answer"
                                                name={`QnA${i}`}
                                                required={val.question !== ""}
                                                error={!!(applyJobFormik.errors[`QnA${i}`] && applyJobFormik.touched[`QnA${i}`])}
                                                onChange={(e) => {
                                                    applyJobFormik.handleChange(e);
                                                    handleAwnsers(e, i);
                                                }}
                                                value={applyJobFormik.values[`QnA${i}`]}
                                                className="mt-2 mb-2"
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <Typography>No data available</Typography>
                )}
            </Dialog.Body>
            <Dialog.Footer>
                <div className="flex justify-between">
                    <Button color="gray" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        color="green"
                        onClick={() => {
                            if (isFormValid()) {
                                handleRegWithoutApplyShow();
                                handleClose();
                            }
                        }}
                        disabled={!isFormValid()}
                    >
                        Submit
                    </Button>
                </div>
            </Dialog.Footer>
        </Dialog>
    );
};

export default QuestionAnsModal;