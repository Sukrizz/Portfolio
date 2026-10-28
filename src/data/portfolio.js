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
  skills: [],
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

export const defaultPreferences = { hasEntered: false, effects: true, accent: 'orange' }






