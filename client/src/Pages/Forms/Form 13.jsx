import { useState } from "react";
import './Forms.css';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/Navigation Bar/NavBar Student';
import CancelModal from '../../Components/Modal/Cancel Modal';
import SubmitModal from '../../Components/Modal/Submit Modal';
//import { fontSize } from '@mui/system';
import { addFormInformation } from './Forms API Call';
import { useNavigate } from "react-router-dom";




// Change of Matriculation
const Form13 = ({userId}) => {
    const [formDetails, setFormDetails] = useState({
        user_id: userId,
        form_id: 14,
        remarks: null,
        student_id: 1,
        last_name: "",
        first_name: "",
        middle_initial: "",
        student_number: "",
        mobile_number:"",
        degree_program: "",
        year_level: "",
        email:"",

        purpose: "",
        purpose_ext: ""
    });

    const navigate = useNavigate();

    const navigateLanding = () => navigate('/student');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)

        setFormDetails(prevState => ({
        ...prevState,
        [name]: value
        }));

        console.log(formDetails)
    }

    const [isOpen, setIsOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);

    async function addInfo() {
        if (!formValid()) {
            return;
        }

        const formData = new FormData();
        formData.append('user_id', formDetails.user_id);
        const response = addFormInformation(formDetails);
        setIsOpen(false);
        navigateLanding();
    }

    const formValid = () => {
        const {

            last_name,
            first_name,
            student_number,
            mobile_number,
            year_level,
            degree_program,
            email,
            purpose,
            purpose_ext

        } = formDetails;

        if (
            !last_name ||
            !first_name ||
            !student_number ||
            !year_level ||
            !degree_program ||
            !mobile_number||
            !email||
            !purpose||
            !purpose_ext
        ) {
            // Form validation failed
            alert("Please fill in all fields");
            return false;
        }

        if (isNaN(student_number)) {
            alert("Student number and mobile number must be integers.");
            return;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setIsCancelOpen(true);
    };

    const handleCancelModalClose = () => {
        setIsCancelOpen(false);
    };

    const handleSubmitModalClose = () => {
        setIsOpen(false);
    };


    return(
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/> 
            <NavBar/>
            <div className="header-form">
                <Header/>
            </div>
            <Container>
                <div className="form-title">
                    Change of Matriculation
                </div>
                <form class="tcg-form" onSubmit={handleSubmit}>
                    <h1 className='form-group-title'>A. Student Details</h1>
                    <div class="form-row">
                        <div class="col-md-3 mb-2">     
                            <label for="studentLastName">Last Name</label>
                            <input type="text" class="form-control" id="studentLastName" name="last_name"  onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-3 mb-2">     
                            <label for="studentFirstName">First Name</label>
                            <input type="text" class="form-control" id="studentFirstName" name="first_name"  onChange={(e) => handleChange(e)} />
                        </div>
                        <div class="col-md-2 mb-2">     
                            <label for="studentMiddleInitial">Middle Initial</label>
                            <input type="text" class="form-control" id="studentMiddleInitial" name="middle_initial"  onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="studentNumber">Student Number</label>
                            <input type="text" class="form-control" id="studentNumber" name="student_number" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="mobileNumber">Mobile Number</label>
                            <input type="text" class="form-control" id="mobileNumber" name="mobile_number" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="form-row">
                    <div class="col-md-6 mb-2">
                        <label for="degreeProgram">Degree Program</label>
                            <select class="custom-select" id='degreeProgram' name="degree_program" onChange={(e) => handleChange(e)}>
                                <option selected value=""> </option>
                                <option value="BS Computer Science">BS Computer Science</option>
                                <option value="BS Biology">BS Biology</option>
                                <option value="BS Mathematics">BS Mathematics</option>
                                <option value="BS Statistics">BS Statistics</option>
                            </select>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="yearLevel">Year Level</label>
                            <input type="number" min='1' max='6' class="form-control" id="yearLevel" name="year_level"  onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="col-md-4 mb-2">
                            <label for="emailAddress">Email Address</label>
                            <input type="email" class="form-control" id="emailAddress" name="email_address" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <h1 className='form-group-title'>B. Request Details</h1>
                    <label for="purpose">Purpose</label>
                    <div class="row">
                        <div class="col-md-6">
                            <select class="custom-select" id='purpose' name="purpose" onChange={(e) => handleChange(e)}>
                                <option selected value="1">Ill Advised</option>
                                <option value="2">Conflict of Time</option>
                                <option value="3">Lacks Prerequisite</option>
                                <option value="4">Class Dissolved</option>
                                <option value="5">Section Closed</option>
                                <option value="6">Others</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="others" name="purpose_ext" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-2 pr-1">
                            <label for="">Subjects Cancelled</label>
                            <input type="text" class="form-control" id="cSub1"/>
                            <input type="text" class="form-control" id="cSub2"/>
                            <input type="text" class="form-control" id="cSub3"/>
                            <input type="text" class="form-control" id="cSub4"/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Instructor</label>
                            <input type="text" class="form-control" id="cProf1"/>
                            <input type="text" class="form-control" id="cProf2"/>
                            <input type="text" class="form-control" id="cProf3"/>
                            <input type="text" class="form-control" id="cProf4"/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Units</label>
                            <input type="text" class="form-control" id="cUnit1"/>
                            <input type="text" class="form-control" id="cUnit2"/>
                            <input type="text" class="form-control" id="cUnit3"/>
                            <input type="text" class="form-control" id="cUnit4"/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Time</label>
                            <input type="text" class="form-control" id="cTime1"/>
                            <input type="text" class="form-control" id="cTime2"/>
                            <input type="text" class="form-control" id="cTime3"/>
                            <input type="text" class="form-control" id="cTime4"/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Day</label>
                            <input type="text" class="form-control" id="cDay1"/>
                            <input type="text" class="form-control" id="cDay2"/>
                            <input type="text" class="form-control" id="cDay3"/>
                            <input type="text" class="form-control" id="cDay4"/>
                        </div>
                        <div className="col-md-2 pl-1">
                            <label for="">Room</label>
                            <input type="text" class="form-control" id="cRoom1"/>
                            <input type="text" class="form-control" id="cRoom2"/>
                            <input type="text" class="form-control" id="cRoom3"/>
                            <input type="text" class="form-control" id="cRoom4"/>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-2 pr-1">
                            <label for="">Subjects Authorized</label>
                            <input type="text" class="form-control" id="aSub1"/>
                            <input type="text" class="form-control" id="aSub2"/>
                            <input type="text" class="form-control" id="aSub3"/>
                            <input type="text" class="form-control" id="aSub4"/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Instructor</label>
                            <input type="text" class="form-control" id="aProf1"/>
                            <input type="text" class="form-control" id="aProf2"/>
                            <input type="text" class="form-control" id="aProf3"/>
                            <input type="text" class="form-control" id="aProf4"/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Units</label>
                            <input type="text" class="form-control" id="aUnit1"/>
                            <input type="text" class="form-control" id="aUnit2"/>
                            <input type="text" class="form-control" id="aUnit3"/>
                            <input type="text" class="form-control" id="aUnit4"/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Time</label>
                            <input type="text" class="form-control" id="aTime1"/>
                            <input type="text" class="form-control" id="aTime2"/>
                            <input type="text" class="form-control" id="aTime3"/>
                            <input type="text" class="form-control" id="aTime4"/>
                        </div>
                        <div className="col-md-2 pl-1 pr-1">
                            <label for="">Day</label>
                            <input type="text" class="form-control" id="aDay1"/>
                            <input type="text" class="form-control" id="aDay2"/>
                            <input type="text" class="form-control" id="aDay3"/>
                            <input type="text" class="form-control" id="aDay4"/>
                        </div>
                        <div className="col-md-2 pl-1">
                            <label for="">Room</label>
                            <input type="text" class="form-control" id="aRoom1"/>
                            <input type="text" class="form-control" id="aRoom2"/>
                            <input type="text" class="form-control" id="aRoom3"/>
                            <input type="text" class="form-control" id="aRoom4"/>
                        </div>
                    </div>
                    <br></br>
                    <div className="col-md-12 p-0">
                        <label htmlFor="remarks">Remarks</label>
                        <textarea name="remarks" id="remarks" class="form-control" rows="3"></textarea>
                    </div>


                    <h1 className='form-group-title'>C. Proof of Payment</h1>
                    <h2 className='form-subtitle-1'>Pay via Philippine Veterans Bank</h2>
                    <div className="inline-form-details">
                        <div className='form-details'><b>Account Name:</b> UP Cebu</div>
                        <div className='form-details'><b>Account Number:</b> 21-0000-067</div>
                        <div className='form-details'><b>Branch:</b> Cebu City</div>
                    </div>
                    <h3 className='form-subtitle-2'>Note:</h3>
                    <div className='form-details'>If asked for mobile number, please provide your own mobile number</div>
                    <div className='form-details'>If paying via GCash, please add 4 zeroes at the start to have 13 digits, 000021-0000-067.</div>
                    <h3 className='form-subtitle-2'>Total Amount to be Paid</h3>
                    <div className="request-price-container">
                        <div className="column-1">
                            <div className='form-details-price'>₱150.00</div>
                            <div className='form-details'>This is the total amount to be paid through Philippine Veterans Bank</div>
                            <div className='form-details'>(Payment may be made via online channels such as gcash, instapay, pesonet, bank transfers.)</div>
                        </div>
                        <div className="column-2">
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="paymentProof"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                    <div class="col-md-4 mb-2">
                            <label for="paymentMode">Mode of Payment</label>
                            <select class="custom-select" id="paymentMode">
                                <option selected value="1">GCASH</option>
                                <option value="2">Bank</option>
                            </select>
                        </div>
                    </div>
                    <h3 className='form-subtitle-2'>Important:</h3>
                    <ul className='important-list'>
                        <li className='important-item'>Payment status must be COMPLETED or SUCCESSFUL.</li>
                        <li className='important-item'>Proof of payment (screenshot/image) must include <b><u>Amount Paid</u></b>, <b><u>Transaction Date</u></b>, <b><u>Time</u></b>, and <b><u>Reference Number</u></b>.</li>
                        <li className='important-item'>For GCash transactions, make sure to enable mobile or email notifications. Attach proof of completed payment from GCash SMS or GCash Email with InstaPay Trace Number. (also found in your GCash Inbox, "Your Bank Transfer Status" message)</li>
                        <li className='important-item'>Otherwise, if payment is not verifiable, your request may not be processed or may be delayed.</li>
                    </ul>
                    <div className='privacy-notice-container'>
                        <h1 className="form-group-title">Privacy Notice for UP Students</h1>
                        <div className="privacy-notice-text">
                            <p className='privacy-notice-text-1'>"I understand that all payments made to UP Cebu are non-refundable. Additional fees may be requested depending on the actual number of pages.</p>
                            <p className='privacy-notice-text-2'>"I understand that my request will not be processed if the information provided is erroneous or incomplete. I will check my email for updates on this request.</p>
                            <p className='privacy-notice-text-3'>"I am aware of the University of the Philippines' Privacy Notice for students. I understand that for the UP System to carry out its mandate under the 1987 Constitution, the UP Charter and other laws, that the University must necessarily process my personal and sensitive personal information. Therefore, I grant my consent to and recognize the authority of the University to process my personal and sensitive personal information pursuant to the abovementioned Privacy Notice and other applicable laws.</p>
                            <p className='privacy-notice-text-end'>"I hereby certify that all information given above are true and correct."</p>
                        </div>
                    </div>
                </form>
                <div className="form-buttons-container">
                    <div className="cancel-button">
                        <button class="btn btn-primary" type="submit" onClick={() => setIsOpen(true)}>Cancel</button>
                        {isCancelOpen && <CancelModal setIsOpen={setIsCancelOpen} />}
                    </div>
                    <div className="submit-button">
                        <button class="btn btn-primary" onClick={() => setIsOpen(true)}>Submit</button> 
                        {isOpen && <SubmitModal setIsOpen={setIsOpen} action={addInfo}/>}
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}



export default Form13;



