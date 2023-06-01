import './App.css';
import React, {  useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login.jsx';
import AdminLanding from './Pages/Admin Portal/Admin Landing.jsx';
import StudentLanding from './Pages/Student Portal/Student Landing.jsx';
import SignatoryLanding from './Pages/Signatory Portal/Signatory Landing.jsx';
import SignatoryLanding2 from './Pages/Signatory Portal/Signatory Landing 2.jsx';
import ClerkLanding from './Pages/Clerk Portal/Clerk Landing.jsx';
import AnnouncementPage from './Pages/Announcements/Announcements';
import AnnouncementSigPage from './Pages/Announcements/Announcements Signatory';
import AnnouncementStudPage from './Pages/Announcements/Announcements Student';
import AnnouncementClerkPage from './Pages/Announcements/Announcements Clerk';
import AddAnnouncement from './Pages/Announcements/Add Announcement';
import HistoryPage from './Pages/History/History Admin';
import TrackingPage from './Pages/Tracking Page/Tracking';
import Add from './Pages/dbPage/Add.jsx';
import Update from './Pages/dbPage/Update.jsx';
import View from './Pages/dbPage/View.jsx';
import GetUser from './Pages/dbPage/GetUser.jsx';
import LoginTest from './Pages/dbPage/LoginTest.jsx';
import StudentTrackingPage from './Pages/History/History Student';
import ClerkTrackingPage from './Pages/History/History Clerk';
import ViewAnnouncementPage from './Pages/Announcements/View Announcement';
import ViewSignatoryAnnouncementPage from './Pages/Announcements/View Announcement Signatory';
import ViewClerkAnnouncementPage from './Pages/Announcements/View Announcement Clerk';
import ViewAdminAnnouncementPage from './Pages/Announcements/View Announcement Admin';




// Forms
import Form1 from './Pages/Forms/Form 1';
import Form2 from './Pages/Forms/Form 2';
import Form3 from './Pages/Forms/Form 3';
import Form4 from './Pages/Forms/Form 4';
import Form5 from './Pages/Forms/Form 5';
import Form6 from './Pages/Forms/Form 6';
import Form7 from './Pages/Forms/Form 7';
import Form8 from './Pages/Forms/Form 8';
import Form9 from './Pages/Forms/Form 9';
import Form10 from './Pages/Forms/Form 10';
import Form11 from './Pages/Forms/Form 11';
import Form12 from './Pages/Forms/Form 12';
import Form13 from './Pages/Forms/Form 13';
import Form14 from './Pages/Forms/Form 14';
import Form15 from './Pages/Forms/Form 15';
import Form16 from './Pages/Forms/Form 16';
import Form17 from './Pages/Forms/Form 17';
import Form18 from './Pages/Forms/Form 18';
import Form19 from './Pages/Forms/Form 19';
import Form20 from './Pages/Forms/Form 20';

function App() {

  document.title = "Automated Request System";

  // BACKEND TESTING, DO NOT DELETE, CONSOLE TEST ONLY
  // BACKEND TESTING, DO NOT DELETE, CONSOLE TEST ONLY

  return (
    
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={<Login/>}  
            />
            <Route 
              path="/admin" 
              element={<AdminLanding/>}  
            />
            <Route 
              path="/student" 
              element={<StudentLanding/>}  
            />
            <Route 
              path="/signatory" 
              element={<SignatoryLanding/>}  
            />
            <Route 
              path="/signatory/2" 
              element={<SignatoryLanding2/>}  
            />
            <Route 
              path="/clerk" 
              element={<ClerkLanding/>}  
            />
            <Route 
              path="/admin/announcements" 
              element={<AnnouncementPage/>}  
            />
            {/* TEMPORARY ONLY WHILE NO API YET*/}
            <Route 
              path="/signatory/announcements" 
              element={<AnnouncementSigPage/>}  
            /> 
            <Route 
              path="/student/announcements" 
              element={<AnnouncementStudPage/>}  
            />
            <Route 
              path="/clerk/announcements" 
              element={<AnnouncementClerkPage/>}  
            />
            <Route 
              path="/admin/announcements/add" 
              element={<AddAnnouncement/>}  
            />
            <Route 
              path="/student/announcements/view/:id" 
              element={<ViewAnnouncementPage/>}  
            />
            <Route 
              path="/signatory/announcements/view/:id" 
              element={<ViewSignatoryAnnouncementPage/>}  
            />
            <Route 
              path="/clerk/announcements/view/:id" 
              element={<ViewClerkAnnouncementPage/>}  
            />
            <Route 
              path="/announcements/view/:id" 
              element={<ViewAdminAnnouncementPage/>}  
            />

            <Route 
              path="/admin/history" 
              element={<HistoryPage/>}  
            />
            <Route 
              path="/student/tracking" 
              element={<TrackingPage/>}  
            />
            <Route 
              path="/student/history" 
              element={<StudentTrackingPage/>}  
            />
            <Route 
              path="/clerk/history" 
              element={<ClerkTrackingPage/>}  
            />

            {/* FORM REQUESTS */}

            <Route 
              path="/student/request/1" 
              element={<Form1/>}  
            />
            <Route 
              path="/student/request/2" 
              element={<Form2/>}  
            />
            <Route 
              path="/student/request/3" 
              element={<Form3/>}  
            />

            <Route 
              // path="/student/request/4" 
              path="/student/request/17" 
              element={<Form4/>}  
            />

            <Route 
              // path="/student/request/5" 
              path="/student/request/14" 
              element={<Form5/>}  
            />
            <Route 
              // path="/student/request/6" 
              path="/student/request/16" 
              element={<Form6/>}  
            />
            <Route 
              // path="/student/request/7" 
              path="/student/request/10" 
              element={<Form7/>}  
            />

            <Route 
              // path="/student/request/8" 
              path="/student/request/13" 
              element={<Form8/>}  
            />

            <Route 
              // path="/student/request/9" 
              path="/student/request/4" 
              element={<Form9/>}  
            />

            <Route 
              // path="/student/request/10" 
              path="/student/request/18" 
              element={<Form10/>}  
            />

            <Route 
              // path="/student/request/11" 
              path="/student/request/20" 
              element={<Form11/>}  
            />

            <Route 
              // path="/student/request/12" 
              path="/student/request/5" 
              element={<Form12/>}  
            />

            <Route 
              // path="/student/request/13" 
              path="/student/request/7" 
              element={<Form13/>}  
            />

            <Route 
              // path="/student/request/14" 
              path="/student/request/6" 
              element={<Form14/>}  
            />

            <Route 
              // path="/student/request/15" 
              path="/student/request/12" 
              element={<Form15/>}  
            />

            <Route 
              // path="/student/request/16" 
              path="/student/request/19" 
              element={<Form16/>}  
            />
  
            <Route 
              // path="/student/request/17" 
              path="/student/request/21" 
              element={<Form17/>}  
            />

            <Route 
              path="/student/request/8" 
              element={<Form18/>}  
            />

          <Route 
              path="/student/request/9" 
              element={<Form19/>}  
            />

            <Route 
              path="/student/request/11" 
              element={<Form20/>}  
            />




            {/* BACKEND ROUTE FOR TESTING PLS DON'T DELETE UWU */}
            <Route 
              path="/db" 
              element={<View/>}  
            />
            <Route 
              path="/db/add" 
              element={<Add/>}  
            />
            <Route 
              path="/db/update/:id" 
              element={<Update/>}  
            />
            <Route
              path="/db/get/:id"
              element={<GetUser/>}
            />
            <Route
              path="/db/logintest/:id"
              element={<LoginTest/>}
            />
            {/* BACKEND ROUTE FOR TESTING ENDS HERE*/}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
