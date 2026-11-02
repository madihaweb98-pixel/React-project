

const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create a responsive homepage design for the company website.",
        date: "2026-10-29",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update Website",
        description: "Update the website content and fix layout issues.",
        date: "2026-10-30",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare Report",
        description: "Prepare the weekly project progress report.",
        date: "2026-10-27",
        category: "Documentation"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Review Feedback",
        description: "Review customer feedback and suggest improvements.",
        date: "2026-10-31",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit Project Draft",
        description: "Submit the initial project draft for approval.",
        date: "2026-10-26",
        category: "Documentation"
      }
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Develop Login Page",
        description: "Build a login page with email and password validation.",
        date: "2026-10-29",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix Login Bugs",
        description: "Identify and fix login page errors.",
        date: "2026-10-30",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Navbar",
        description: "Create a reusable navigation bar for the website.",
        date: "2026-10-27",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test Authentication",
        description: "Test the login and logout functionality.",
        date: "2026-11-01",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Optimize Login Speed",
        description: "Improve login response time and resolve performance issues.",
        date: "2026-10-26",
        category: "Optimization"
      }
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstname: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Marketing Plan",
        description: "Prepare a marketing strategy for the upcoming campaign.",
        date: "2026-10-29",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Social Media Posts",
        description: "Prepare social media content for the next campaign.",
        date: "2026-10-30",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Analyze Competitors",
        description: "Research competitors and summarize their marketing strategies.",
        date: "2026-10-27",
        category: "Research"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Campaign",
        description: "Organize campaign materials and schedule publication.",
        date: "2026-11-02",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit Ad Report",
        description: "Submit the advertising performance report for review.",
        date: "2026-10-26",
        category: "Reporting"
      }
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstname: "Ananya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test Website",
        description: "Test website pages and verify their functionality.",
        date: "2026-10-29",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Write Test Cases",
        description: "Write test cases for the registration and login modules.",
        date: "2026-10-30",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Check Mobile Layout",
        description: "Verify the website layout on mobile devices.",
        date: "2026-10-27",
        category: "Quality Assurance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Report Bugs",
        description: "Document discovered bugs and send them to the development team.",
        date: "2026-11-01",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Regression Testing",
        description: "Complete regression testing after the latest update.",
        date: "2026-10-26",
        category: "Testing"
      }
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Invoice",
        description: "Prepare invoices for the latest company transactions.",
        date: "2026-10-29",
        category: "Finance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update Records",
        description: "Update employee and project records in the system.",
        date: "2026-10-30",
        category: "Administration"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Organize Documents",
        description: "Organize project documents and move them into the correct folders.",
        date: "2026-10-27",
        category: "Documentation"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Monthly Report",
        description: "Prepare the monthly company activity report.",
        date: "2026-11-02",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Verify Expenses",
        description: "Review expense records and identify missing information.",
        date: "2026-10-26",
        category: "Finance"
      }
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  }
];


const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () =>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees, admin}
  
}