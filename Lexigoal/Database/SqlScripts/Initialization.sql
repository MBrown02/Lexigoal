
--Database Initialization Script--


--Table Creation--
CREATE TABLE Stacks
(
	StackId INT IDENTITY(1,1) PRIMARY KEY,
	StackName NVARCHAR(MAX)
)
GO 

CREATE TABLE Words
(
	WordId INT IDENTITY(1,1) PRIMARY KEY,
	Word NVARCHAR(MAX)
)
GO

CREATE TABLE StackWords
(
	StackWordId INT IDENTITY(1,1) PRIMARY KEY,
	StackId INT,
	WordId INT,
	FOREIGN KEY (StackId) REFERENCES Stacks(StackId),
	FOREIGN KEY (WordId) REFERENCES Words(WordId),
)
GO


--Default Table Population--
INSERT INTO Stacks (StackName) VALUES ('Default')