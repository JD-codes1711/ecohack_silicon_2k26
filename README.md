# ecohack_silicon_2k26

♻️ Smart Campus Plastic Waste Management System

A college-level hackathon prototype that uses IoT and a web-based dashboard to monitor plastic waste bins in real time and prevent overflow on campus.

📌 Problem Statement

College campuses generate a large amount of plastic waste every day.
However, waste bins are checked manually, leading to:

Overflowing bins

Poor waste segregation

Unnecessary collection rounds

Increased littering and environmental impact

There is no simple, low-cost system to monitor bin status in real time and assist cleaning staff in taking timely action.

💡 Proposed Solution

This project introduces a Smart Campus Plastic Waste Management System that connects IoT-enabled bins with a web-based monitoring dashboard.

Sensors measure how full a plastic waste bin is

Data is sent to the cloud in real time

An admin/monitor dashboard displays:

Bin fill percentage

Status (EMPTY / MEDIUM / FULL)

Visual alerts for overflow

The system helps prevent overflow and improves waste collection efficiency

The solution is designed to be simple, scalable, and suitable for Indian college campuses.

🎯 Key Features
🔹 IoT-Based Bin Monitoring

Ultrasonic sensor detects bin fill level

ESP32 sends data to the backend via WiFi

🔹 Real-Time Dashboard

Displays bin ID and fill percentage

Color-based status indicators

Last updated timestamp

System status (Online / Offline)

🔹 Visual Alerts

Green: Safe

Yellow: Near Full

Red: Needs Immediate Attention

🔹 Simulation Mode (Demo-Safe)

Manual data simulation for hackathon demos

Ensures demo works even if hardware/network fails

🖥️ Admin / Monitor Dashboard (Frontend)

Desktop-first, clean UI

Card-based layout

Easy to understand for non-technical users

Built to clearly demonstrate hardware → software integration

🛠️ Tech Stack
Hardware

ESP32 Microcontroller

Ultrasonic Sensor (HC-SR04)

LED indicators

Breadboard & jumper wires

Frontend

React.js

Tailwind CSS / Bootstrap

Backend & Cloud

Firebase / REST API

Real-time data updates

Tools

Arduino IDE

GitHub

AI tools (used for assistance, not full generation)

📂 Project Structure (Example)
├── hardware/
│   ├── esp32_code.ino
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│
├── README.md

🚀 How It Works (Simple Flow)

Waste is added to the bin

Sensor measures the fill level

ESP32 sends data to the backend

Dashboard updates in real time

Visual alert indicates bin status

📈 Future Scope

Multiple bin monitoring

Mobile notifications for cleaning staff

Student eco-credit and reward system

Community participation and awareness features

Integration with municipal waste systems

⚠️ Limitations

Prototype built for hackathon time constraints

Currently supports single-bin monitoring

Internet connectivity required for real-time updates

👥 Team & Contribution

This project was developed as a team-based hackathon prototype, with responsibilities divided across:

IoT & hardware development

Backend & cloud integration

Frontend dashboard development

Documentation & presentation

🏁 Conclusion

This project demonstrates how simple IoT hardware combined with a clean frontend dashboard can solve a real-world problem at the campus level.
It focuses on practical implementation, clarity, and scalability, making it suitable for hackathons, academic projects, and future expansion.
>>>>>>> c0460c3ef4ac757c71d96cf81f04704f2e2304ea
