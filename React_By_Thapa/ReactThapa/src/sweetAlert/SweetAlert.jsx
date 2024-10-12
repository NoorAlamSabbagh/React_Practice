import React from 'react'
import Swal from 'sweetalert2';

function SweetAlert() {

    const handleAlertClick = () => {
        Swal.fire("Hello this is a simple alert");
    }

    const handleConfirmClick = () => {
        Swal.fire({
            title: "Are you sure?",
            text: 'Delete item',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Yes Delete it",
            cancelButtonText: 'Cancel it'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted", 'Your file has been deleted', 'Success')
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe:)', 'error');
            }
        })
    }

    const handlePromptClick = () => {
        Swal.fire({
            title: 'Enter your email',
            input: 'text',
            inputLabel: 'Email',
            inputPlaceholder: 'Enter your name',
            showCancelButton: true,
            inputValidator: (value) => {
                if(!value){
                    return 'You need to enter a valid email!';
                }
            }
        }).then((result) => {
            if(result.isConfirmed){
            Swal.fire(`Hello ${result.vlue}!`);
            }
        })
    }

    const handleErrorClick = () => {
        Swal.fire('Error!', 'Something went wrong.', 'error');
    }

    const handleInfoClick = () => {
        Swal.fire('Info!', 'This is an informative message.', 'info');
    }

    const handleQuestionClick = () => {

    }

    const handleSuccessClick = () => {
        Swal.fire('Success!', 'Your action has beeen completed.', 'success');
    }

    const handleWarningClick = () => {
        Swal.fire('Warning!', 'Please be careful.', 'Warning');
    }

    return (
        <div>
            <h1>SweetAlert ialog Box Examples</h1>
            <button onClick={handleAlertClick}>Alert Dialog</button>
            <button onClick={handleConfirmClick}>Confirm Dialog</button>
            <button onClick={handlePromptClick}>Prompt Dialog</button>
            <button onClick={handleSuccessClick}>Success Dialog</button>
            <button onClick={handleErrorClick}>Error Dialog</button>
            <button onClick={handleSuccessClick}>Success Dialog</button>
            <button onClick={handleWarningClick}>Warning Dialog</button>
            <button onClick={handleInfoClick}>Info Dialog</button>
            <button onClick={handleQuestionClick}>Question Dialog</button>
        </div>
    )
}

export default SweetAlert
