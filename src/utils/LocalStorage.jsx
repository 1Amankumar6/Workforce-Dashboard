const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    status: "active",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a modern homepage layout for the website.",
        taskDate: "2024-12-20",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Develop API Endpoints",
        taskDescription:
          "Develop the necessary API endpoints for the application.",
        taskDate: "2024-12-15",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Write Documentation",
        taskDescription: "Write technical documentation for the API.",
        taskDate: "2024-12-10",
        category: "Documentation",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    status: "inactive",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create UI Design",
        taskDescription: "Design the user interface for the mobile app.",
        taskDate: "2024-12-22",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix UI Bugs",
        taskDescription: "Fix issues in the mobile app UI reported by QA.",
        taskDate: "2024-12-18",
        category: "Design",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    status: "active",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Database",
        taskDescription: "Set up the initial database for the project.",
        taskDate: "2024-12-23",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Authentication System",
        taskDescription: "Implement login and user authentication system.",
        taskDate: "2024-12-10",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the new API endpoints.",
        taskDate: "2024-12-19",
        category: "Testing",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    status: "active",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Fix the bug preventing users from logging in.",
        taskDate: "2024-12-15",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Testing Environment",
        taskDescription: "Set up the testing environment for the project.",
        taskDate: "2024-12-05",
        category: "Testing",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    status: "inactive",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update the API documentation with new endpoints.",
        taskDate: "2024-12-25",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design User Profile Page",
        taskDescription: "Design the profile page for the web app.",
        taskDate: "2024-12-18",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Profile Bug",
        taskDescription: "Fix the bug causing profile images to not load.",
        taskDate: "2024-12-12",
        category: "Development",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
};
