[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/UCQYxFhy)

# MeetingNotes REST API

## Introduction

This project is a REST API for managing meeting notes. It allows users to perform various operations such as fetching all existing meeting notes, filtering meeting notes based on keywords and date range, adding new meeting notes, updating existing meeting notes, and deleting meeting notes.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Bruno(for API testing)

## API Routes

- **Fetch All Meeting Notes**: `/meetingNotes` (GET)
- **Filter Meeting Notes**: `/meetingNotes/filter` (GET)
- **Add a Meeting Note**: `/meetingNotes` (POST)
- **Update a Meeting Note**: `/meetingNotes/:id` (PUT or PATCH)
- **Delete a Meeting Note**: `/meetingNotes/:id` (DELETE)

This API allows users to manage meeting notes, including fetching, filtering, adding, updating, and deleting meeting notes.
