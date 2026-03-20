export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  impactValue: string;
  year: string;
  role: string;
  duration: string;
  overview: string;
  challenge: string;
  approach: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-onboarding',
    title: 'Fintech Onboarding Redesign',
    category: 'Fintech',
    problem: 'High user drop-off during account creation',
    solution: 'Simplified multi-step process with progress indicators and smart defaults',
    impact: '+35% user activation',
    impactValue: '+35%',
    year: '2025',
    role: 'Lead UX Designer',
    duration: '3 months',
    overview: 'A leading fintech company was experiencing significant user drop-off during their account creation process. Users found the onboarding flow too complex and time-consuming, leading to low activation rates.',
    challenge: 'The existing onboarding required users to fill out 15+ fields across multiple pages with no clear indication of progress. Users often abandoned the process midway, resulting in a 65% drop-off rate.',
    approach: [
      'Conducted user research through interviews and usability testing to identify friction points',
      'Reduced required fields from 15 to 7 by making non-critical information optional',
      'Implemented a clear progress indicator showing users how many steps remained',
      'Added smart defaults and pre-filled information where possible',
      'Designed a mobile-first responsive experience',
      'Created micro-interactions to provide immediate feedback'
    ],
    results: [
      '35% increase in user activation rate',
      '50% reduction in average onboarding time',
      '40% decrease in support tickets related to onboarding',
      'Improved mobile completion rate by 45%'
    ],
    testimonial: {
      quote: 'The redesigned onboarding flow completely transformed our user acquisition. We saw immediate improvements in activation rates and user satisfaction.',
      author: 'Sarah Johnson',
      role: 'Head of Product'
    }
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard Experience',
    category: 'SaaS',
    problem: 'Complex interface overwhelming new users',
    solution: 'Redesigned information hierarchy with contextual guidance',
    impact: '+45% feature adoption',
    impactValue: '+45%',
    year: '2024',
    role: 'Senior Product Designer',
    duration: '4 months',
    overview: 'A B2B SaaS platform needed to improve their dashboard experience to help new users discover and adopt key features that drove value.',
    challenge: 'The dashboard presented too much information at once, making it difficult for users to understand where to start. Feature adoption was low, and users weren\'t realizing the full value of the platform.',
    approach: [
      'Conducted stakeholder interviews and analyzed user analytics',
      'Created user personas and journey maps',
      'Redesigned information architecture with clear hierarchy',
      'Implemented progressive disclosure to reduce cognitive load',
      'Added contextual tooltips and guided tours',
      'Built a customizable dashboard allowing users to prioritize their view'
    ],
    results: [
      '45% increase in feature adoption',
      '60% improvement in time-to-value for new users',
      '35% reduction in onboarding support requests',
      'Net Promoter Score increased from 42 to 68'
    ],
    testimonial: {
      quote: 'Rabindra\'s work on our dashboard was transformative. Users now understand the value of our platform much faster.',
      author: 'Michael Chen',
      role: 'VP of Product'
    }
  },
  {
    id: 'insurance-portal',
    title: 'Insurance Claim Portal',
    category: 'Insurance',
    problem: 'Lengthy claim submission process',
    solution: 'Streamlined workflow with auto-save and document scanning',
    impact: '-40% processing time',
    impactValue: '-40%',
    year: '2024',
    role: 'Lead UX Designer',
    duration: '5 months',
    overview: 'An insurance company needed to modernize their claim submission portal to reduce processing time and improve user satisfaction.',
    challenge: 'The claim submission process was outdated, requiring manual data entry and physical document uploads. This led to long processing times and frustrated users.',
    approach: [
      'Mapped the entire claim journey from submission to approval',
      'Identified pain points through user interviews with policyholders',
      'Implemented auto-save functionality to prevent data loss',
      'Integrated document scanning with OCR for automatic data extraction',
      'Created a status tracking system with real-time updates',
      'Designed mobile-friendly interfaces for on-the-go submissions'
    ],
    results: [
      '40% reduction in claim processing time',
      '55% decrease in incomplete submissions',
      '70% of users now submit claims via mobile',
      'Customer satisfaction score improved by 38%'
    ]
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    category: 'Healthcare',
    problem: 'Poor accessibility and mobile experience',
    solution: 'Mobile-first responsive design with WCAG AA compliance',
    impact: '+60% mobile usage',
    impactValue: '+60%',
    year: '2023',
    role: 'Product Designer',
    duration: '6 months',
    overview: 'A healthcare platform needed to improve accessibility and mobile experience to serve their diverse patient population better.',
    challenge: 'The existing portal was desktop-only and didn\'t meet accessibility standards, excluding many users including elderly patients and those with disabilities.',
    approach: [
      'Conducted accessibility audit and user testing with diverse user groups',
      'Redesigned with mobile-first approach',
      'Ensured WCAG AA compliance throughout',
      'Implemented larger touch targets and readable font sizes',
      'Added voice input capabilities for patients with limited mobility',
      'Created high-contrast mode for visually impaired users'
    ],
    results: [
      '60% increase in mobile usage',
      '100% WCAG AA compliance achieved',
      '45% growth in elderly user adoption',
      'Reduced support calls by 30%'
    ]
  },
  {
    id: 'ecommerce-checkout',
    title: 'E-commerce Checkout Flow',
    category: 'E-commerce',
    problem: 'High cart abandonment rate',
    solution: 'One-page checkout with guest option and trust signals',
    impact: '+28% conversion',
    impactValue: '+28%',
    year: '2023',
    role: 'UX Designer',
    duration: '2 months',
    overview: 'An e-commerce company was losing sales due to a complex, multi-page checkout process that caused high cart abandonment.',
    challenge: 'Users were abandoning their carts at a 78% rate, primarily due to forced account creation and a confusing multi-step checkout process.',
    approach: [
      'Analyzed cart abandonment patterns and user feedback',
      'Consolidated multi-page checkout into a single, streamlined page',
      'Added guest checkout option',
      'Implemented trust signals (security badges, return policy)',
      'Optimized form fields and auto-fill capabilities',
      'Added real-time validation and error messaging'
    ],
    results: [
      '28% increase in conversion rate',
      '45% reduction in cart abandonment',
      '50% of checkouts now completed as guest',
      'Average checkout time reduced from 4.5 to 2 minutes'
    ]
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Interface',
    category: 'AI',
    problem: 'Users struggling with prompt formulation',
    solution: 'Guided conversation with smart suggestions and examples',
    impact: '+50% task completion',
    impactValue: '+50%',
    year: '2025',
    role: 'AI UX Designer',
    duration: '4 months',
    overview: 'A company building an AI assistant needed to help users interact more effectively with their chatbot and achieve their goals.',
    challenge: 'Users didn\'t know how to phrase prompts effectively, leading to poor responses and low task completion rates. Many users gave up after a few failed attempts.',
    approach: [
      'Researched common user intents and query patterns',
      'Designed prompt suggestion system with contextual examples',
      'Implemented progressive disclosure of advanced features',
      'Created quick-action buttons for common tasks',
      'Added conversation memory and context awareness',
      'Designed feedback mechanism for continuous improvement'
    ],
    results: [
      '50% increase in task completion rate',
      '65% reduction in reformulated queries',
      '40% more users engaging with advanced features',
      'Average conversation length decreased by 30%'
    ]
  }
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(study => study.id === id);
}
