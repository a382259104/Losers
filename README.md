# Web Dev Final Project

**Project_Name** is a full-stack web application designed to facilitate idea sharing, collaboration, and networking among individuals in the Boston area. Whether you're a student looking to join study groups, a developer seeking project collaborators, or an entrepreneur with innovative ideas, **Project_Name** provides a platform for you to connect with like-minded individuals in your local community.

## Concerns
If we are using Github public repo, can we add fake data (by adding Boston location into each project) and make it into our own api?
If not, can we just use our repos (student created project) as local projects?

Or, can we simply add external API for decorative purposes? (searching projects by location radius)

## How to Run This App 

On your terminal:
1. Clone the repository:

    `git clone https://github.com/a382259104/Losers`

2. Navigate to the project directory:

    `cd <your_local_directory>`

3. Install dependencies:

    `npm install`

4. Start the App:

    `npm start`

# Developers
YuFeng Lin - 

Tiffany Chen - 

Qingnan Li - 

Borui Chen - 

## Project Checklist (devs)

- ## Frontend
    - Home
        - Search by ProjectID
        - Signin button 
        - Recent projects by other students
    - Profile
    - Search
    - Project Details
    - Login
- ## Backend
    - Users
        - Anonymous User
        - CRUD Operations
        - Login/logout/profile
        - admin user
    - Login 
        - Registering
        - Admin Login
        - commenting requires login
        - /login
    - Details 
        - ... too lazy to copy
        - /details/{id} for specific project
    - Search
        - **MUST HAVE AN EXTERNAL API**
        - Checkout here: https://github.com/public-apis/public-apis
        - Perform read and store on our end
        - /search for no results
        - /search/{???} for URL encoding
    - Profile
        - able to change info
        - able to hide info
        - /profile for your own
        - /profile/{id} for others 
        - any relevant details
- ## Database
    - Modeling
        - two objects (project and ?)
        - two users (leader and member?)
        - one to many relationship (a user can post many ideas)
        - many to many relationship (a project has many members and vice versa)
    - Creating the database
    - UML Diagram or Datagrip diagram
    - Upload the database into MongoDB as an API
    - API routing within the server