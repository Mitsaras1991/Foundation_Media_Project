
CREATE TABLE Medicine (
  medicineID BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (45) NOT NULL
);
CREATE TABLE Organization (
  organizationID BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL
);
CREATE TABLE Security_Role(
  role_ID BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
  description VARCHAR (45) NOT NULL,
  kind VARCHAR (45) NOT NULL
);
CREATE TABLE User (
  id BIGINT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR (45) NOT NULL UNIQUE ,
  email VARCHAR (255) NOT NULL UNIQUE ,
  role_id INT NOT NULL,
  email_verified boolean NOT NULL ,
  Organization INT NOT NULL default 1,
  Lat FLOAT DEFAULT NULL,
  Long FLOAT DEFAULT NULL,
 image_url VARCHAR(2550) DEFAULT NULL ,
   FOREIGN KEY (Organization) REFERENCES Organization(organizationID),
   FOREIGN KEY (role_id) REFERENCES Security_Role(role_ID)
);
--
-- Table structure for table `Therapy_List`
--

CREATE TABLE Therapy_List (
  therapy_listID BIGINT PRIMARY KEY AUTO_INCREMENT ,
  name varchar(45) NOT NULL,
  MedicineID int(11) NOT NULL,
  Dosage varchar(45) NOT NULL,
  FOREIGN KEY (MedicineID) REFERENCES Medicine(medicineID)
) ;
-- --------------------------------------------------------
--
-- Table structure for table `Therapy`
--

CREATE TABLE Therapy (
  therapyID BIGINT  NOT NULL PRIMARY KEY AUTO_INCREMENT ,
  User_IDpatient int(11) NOT NULL,
  User_IDmed int(11) NOT NULL,
  TherapyList_ID int(11) NOT NULL,
  FOREIGN KEY (User_IDmed) REFERENCES User(id),
  FOREIGN KEY (User_IDpatient) REFERENCES User(id),
  FOREIGN KEY (TherapyList_ID) REFERENCES Therapy_List(therapy_listID)
  );

--
-- Table structure for table `Test`
--

CREATE TABLE Test (
    testID BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dateTime datetime NOT NULL,
    TherapyID int(11) NOT NULL,
    FOREIGN KEY (TherapyID) REFERENCES Therapy(therapyID)
);
--
-- Table structure for table `Test_Session`
--

CREATE TABLE Test_Session
 (
  test_SessionID BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  test_type int(11) NOT NULL,
  Test_ID BIGINT NOT NULL,
  DataURL VARCHAR (255) NOT NULL,
  FOREIGN KEY (Test_ID) REFERENCES Test(testID)
);
--
-- Table structure for table `Note`
--
CREATE TABLE Patient_Test_Session_Data
(
    dataID     BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    patUsername      VARCHAR(255) NOT NULL,
    tSessionID BIGINT NOT NULL,
    FOREIGN KEY (patUsername) REFERENCES User(username),
    FOREIGN KEY (tSessionID) REFERENCES Test_Session(test_SessionID)
);
CREATE TABLE Note (
  noteID BIGINT NOT NULL  PRIMARY KEY AUTO_INCREMENT,
  Test_Session_ID BIGINT NOT NULL,
  note longtext NOT NULL,
  User_IDmed BIGINT NOT NULL,
  FOREIGN KEY (Test_Session_ID) REFERENCES Test_Session(test_SessionID),
  FOREIGN KEY (User_IDmed) REFERENCES User(id)
);
