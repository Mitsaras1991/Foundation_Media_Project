-- Dumping data for table `Medicine`
--

INSERT INTO `Medicine` (`medicineID`, `name`) VALUES
(1, 'Medicine 1'),
(2, 'Medicine 2');
-- --------------------------------------------------------
--
-- Dumping data for table `Organization`
--

INSERT INTO Organization (`organizationID`, `name`) VALUES
(1, 'Hospital'),
(2, 'LNU University');

-- --------------------------------------------------------
--
-- Dumping data for table `Role`
--
INSERT INTO Security_Role (role_ID, description, kind) VALUES
(1, 'patient', '1'),
(2, 'physician', '2'),
(3, 'researcher', '3'),

-- --------------------------------------------------------
--
-- Dumping data for table `User`
--

INSERT INTO User (id, username, email,email_verified, role_id, Organization, Lat, Long,image_url) VALUES
(1, 'doc', 'doc@hospital.com',true ,2, 1, NULL, NULL,NULL ),
(2, 'researcher', 'res@uni.se', true,3, 2, NULL, NULL,NULL ),
(3, 'patient1', 'x@gmail.com', true,1, 1, 59.6567, 16.6709,NULL ),
(4, 'patient2', 'y@happyemail.com', true,1, 1, 57.3365, 12.5164,NULL );
-- --------------------------------------------------------
--
-- Dumping data for table `Therapy_List`
--

INSERT INTO Therapy_List (therapy_listID, name, MedicineID, Dosage) VALUES
(1, 'Therapy trials with Medicine 1', 1, '400 ml');

-- --------------------------------------------------------
--
-- Dumping data for table `Therapy`
--
INSERT INTO Therapy (therapyID, User_IDpatient, User_IDmed, TherapyList_ID) VALUES
(1, 3, 1, 1),
(2, 4, 1, 1);
-- --------------------------------------------------------

--
-- Dumping data for table `Test`
--

INSERT INTO Test (testID, dateTime, TherapyID) VALUES
(1, '2009-12-01 18:00:00', 1),
(2, '2009-12-02 18:00:00', 1),
(3, '2009-12-02 18:00:00', 2);

-- --------------------------------------------------------
--
-- Dumping data for table `Test_Session`
--

INSERT INTO Test_Session (test_SessionID, test_type, Test_ID, DataURL) VALUES
(1, 1, 1, 'data1'),
(2, 2, 1, 'data2'),
(3, 1, 2, 'data3'),
(4, 2, 2, 'data4'),
(5, 1, 3, 'data5'),
(6, 2, 3, 'data6');
INSERT INTO Patient_Test_Session_Data(dataID,patUsername,tSessionID) VALUES
(1,'patient1',1),
(2,'patient1',2),
(3,'patient1',3),
(4,'patient1',4),
(5,'patient2',5),
(6,'patient2',6);
-- --------------------------------------------------------
--
-- Dumping data for table `Note`
--

INSERT INTO Note (noteID, Test_Session_ID, note, User_IDmed) VALUES
(1, 1, 'Well this is interesting.', 2),
(2, 1, 'This seams a bit weird.', 1);