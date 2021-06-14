-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2021 at 07:43 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `personal_information`
--

CREATE TABLE `personal_information` (
  `userid` int(11) NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_swedish_ci NOT NULL,
  `firstname` varchar(100) COLLATE utf8mb4_swedish_ci NOT NULL,
  `surname` varchar(100) COLLATE utf8mb4_swedish_ci NOT NULL,
  `mobile` varchar(100) COLLATE utf8mb4_swedish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_swedish_ci NOT NULL,
  `addressline1` varchar(100) COLLATE utf8mb4_swedish_ci NOT NULL,
  `addressline2` varchar(100) COLLATE utf8mb4_swedish_ci NOT NULL,
  `town` varchar(100) COLLATE utf8mb4_swedish_ci NOT NULL,
  `citycounty` varchar(100) COLLATE utf8mb4_swedish_ci NOT NULL,
  `eircode` varchar(100) COLLATE utf8mb4_swedish_ci NOT NULL,
  `datetimecreated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_swedish_ci;

--
-- Dumping data for table `personal_information`
--

INSERT INTO `personal_information` (`userid`, `title`, `firstname`, `surname`, `mobile`, `email`, `addressline1`, `addressline2`, `town`, `citycounty`, `eircode`, `datetimecreated`) VALUES
(1, 'Mr', 'Michael', 'Tuohy', '1234567890', 'Michael.Tuohy.2020@mumail.ie', 'Mariavilla, Maynooth, Co. Kildare', '', 'Maynooth', 'Co.Kildare', '', '2021-04-05 06:21:17'),
(2, 'Mr.', 'Eric', 'Smith', '01-6190619', 'eric.smith@email.com', '16 Herbert Street, Dublin', '', 'Dublin', 'Co.Dublin', 'N/A', '2021-04-05 06:33:49'),
(3, 'Mr.', 'John C', ' Verdin', '321-720-9651', 'hi5wwx85c3@temporary-mail.net', '1997  Stoneybrook Road', '', 'Lake Mary', 'Florida', '32746', '2021-04-05 06:35:17'),
(4, 'Mrs.', 'Maria D', 'Smith', '812-661-4891', 'MariaDSmith@temporary-mail.net', '1402  Heliport Loop', '', 'Evansville', 'Indiana', '47715', '2021-04-05 06:36:25'),
(5, 'Mr.', 'Andrew M', 'Johnson', '336-961-5383', 'AndrewMJohnson@mail.com', '4492  Fire Access Road', '', 'Forbush', 'North Carolina', '27055', '2021-04-05 06:37:20'),
(6, 'Mr.', 'Brian', 'T Dunton', '906-248-5157', 'BrianDunton@mail.net', '789  Railroad Street', '', 'MASON CITY', 'Iowa', '50401', '2021-04-05 06:38:17'),
(7, 'Miss', 'Diane', 'Noyes', '512-824-2987', '', '232  Brentwood Drive', '', 'Austin', 'Texas', '78701', '2021-04-05 06:39:07'),
(8, 'Mrs.', 'Susan', 'Jennings', '402-606-0815', 'sclly33yno@temporary-mail.net', '2915  Johnny Lane', '', 'COLUMBUS', 'Nebraska', '68601', '2021-04-05 06:40:16'),
(9, 'Miss.', 'Tamara', 'Mathis', '714-436-5869', 'fvjsawhv9lq@temporary-mail.net', '1928  Liberty Avenue', '', 'Anaheim', 'California', '92805', '2021-04-05 06:40:50'),
(10, 'Dr.', 'Joshua', 'Allison', '801-260-2994', 'lngmb5ccze@temporary-mail.net', '852  Philadelphia Avenue', '', 'West Jordan', 'Utah', '84088', '2021-04-05 06:41:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `personal_information`
--
ALTER TABLE `personal_information`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `personal_information`
--
ALTER TABLE `personal_information`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
