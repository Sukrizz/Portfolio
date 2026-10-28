// Edit this file to change the starter archive. In-app edits are saved in this browser.
export const defaultPortfolio = {
  siteName: 'Afterimage',
  profile: {
    name: 'Your Name',

    title: 'Making things. Learning as I go.',
    bio: 'A place to keep the projects, skills, and ideas I don’t want to lose.',
    location: '',
    level: 1,
    xp: 0,
    nextLevelXp: 100,
    status: '',
  },
  skills: [
    { id: 'skill-python', name: 'Python', category: 'LANGUAGES', rank: 'Listed on GitHub', progress: null, icon: 'Py', detail: 'A programming language listed in my GitHub profile stack.' },
    { id: 'skill-cpp', name: 'C++', category: 'LANGUAGES', rank: 'Listed on GitHub', progress: null, icon: 'C+', detail: 'A programming language listed in my GitHub profile stack.' },
    { id: 'skill-javascript', name: 'JavaScript', category: 'LANGUAGES', rank: 'Listed on GitHub', progress: null, icon: 'JS', detail: 'A programming language listed in my GitHub profile stack.' },
    { id: 'skill-sql', name: 'SQL', category: 'LANGUAGES', rank: 'Listed on GitHub', progress: null, icon: '⌘', detail: 'A programming language listed in my GitHub profile stack.' },
    { id: 'skill-html-css', name: 'HTML / CSS', category: 'LANGUAGES', rank: 'Listed on GitHub', progress: null, icon: '</>', detail: 'Web languages listed in my GitHub profile stack.' },
    { id: 'skill-react', name: 'React', category: 'FRONTEND', rank: 'Listed on GitHub', progress: null, icon: '⚛', detail: 'A frontend technology listed in my GitHub profile stack.' },
    { id: 'skill-tailwind', name: 'Tailwind CSS', category: 'FRONTEND', rank: 'Listed on GitHub', progress: null, icon: '≋', detail: 'A frontend technology listed in my GitHub profile stack.' },
    { id: 'skill-pytorch', name: 'PyTorch', category: 'AI / ML', rank: 'Listed on GitHub', progress: null, icon: '◉', detail: 'An AI and machine learning tool listed in my GitHub profile stack.' },
    { id: 'skill-tensorflow', name: 'TensorFlow', category: 'AI / ML', rank: 'Listed on GitHub', progress: null, icon: 'TF', detail: 'An AI and machine learning tool listed in my GitHub profile stack.' },
    { id: 'skill-numpy', name: 'NumPy', category: 'AI / ML', rank: 'Listed on GitHub', progress: null, icon: 'N', detail: 'A data and machine learning library listed in my GitHub profile stack.' },
    { id: 'skill-pandas', name: 'Pandas', category: 'AI / ML', rank: 'Listed on GitHub', progress: null, icon: 'Pd', detail: 'A data and machine learning library listed in my GitHub profile stack.' },
    { id: 'skill-sklearn', name: 'scikit-learn', category: 'AI / ML', rank: 'Listed on GitHub', progress: null, icon: 'sk', detail: 'A machine learning library listed in my GitHub profile stack.' },
    { id: 'skill-git', name: 'Git', category: 'TOOLS', rank: 'Listed on GitHub', progress: null, icon: '⌘', detail: 'A development tool listed in my GitHub profile stack.' },
    { id: 'skill-github', name: 'GitHub', category: 'TOOLS', rank: 'Listed on GitHub', progress: null, icon: 'GH', detail: 'A development tool listed in my GitHub profile stack.' },
    { id: 'skill-vscode', name: 'VS Code', category: 'TOOLS', rank: 'Listed on GitHub', progress: null, icon: '⌁', detail: 'A development tool listed in my GitHub profile stack.' },
  ],
  projects: [
    {
      id: 'backlog-gaming-sommelier',
      name: 'The Backlog Gaming Sommelier',
      type: 'AI + GAME DISCOVERY',
      status: 'In progress',
      color: 'violet',
      description: 'A game recommendation app that connects a Steam backlog with available time and mood, using a FastAPI backend and Streamlit interface.',
      tags: ['Python', 'FastAPI', 'Streamlit', 'Steam API', 'Gemini'],
      link: 'https://github.com/Sukrizz/Backlog-Protocol',
    },
    {
      id: 'leetcode-journey',
      name: 'LeetCode Journey',
      type: 'ALGORITHM PRACTICE',
      status: 'Ongoing',
      color: 'teal',
      description: 'A growing collection of C++ solutions to data-structure and algorithm problems. The latest visible solution is problem 1190, Reverse Substrings Between Each Pair of Parentheses.',
      tags: ['C++', 'Data Structures', 'Algorithms', 'LeetCode'],
      link: 'https://github.com/Sukrizz/Leetcode-Journey',
    },
  ],
  milestones: [],
  journal: [],
}

export const defaultPreferences = { hasEntered: false, effects: true, accent: 'orange', theme: 'dark' }








