# Task Manager API

## **Setup Instructions**


### **Steps to Run the API**

1. **Clone the Repository**
   git clone https://github.com/cdenriquea/task-manager-api.git
   cd task-manager-api
   
2. **Install dependencies**
   npm install

3. **Start the server**
   node src/index.js

 The server will start on http://localhost:3000.

 ### **How to Test the API**

1. **Retrieve All Tasks**
   
    curl -X GET http://localhost:3000/task

2. **Create a Task**
   
    curl -X POST http://localhost:3000/task \
    -H "Content-Type: application/json" \
    -d '{"title":"New Task","completed":false}'

3. **Update a Task**
   
   curl -X PUT http://localhost:3000/task/1 \
   -H "Content-Type: application/json" \
   -d '{"title":"Updated Task","completed":true}'

4. **Delete a Task**
   
   curl -X DELETE http://localhost:3000/task/1


