import { DomainContent } from '../types';

export const mediaArtsData: DomainContent = {
  id: "media-arts",
  name: "Media Arts",
  strandColor: "#0284c7",
  badgeBg: "#f0f9ff",
  badgeBorder: "#bae6fd",
  badgeText: "#0369a1",
  quote: "“Media Arts is a subject and a discipline that allows children to critically engage with and examine the world around them” (Dunscombe, R & Stewart, C, 2019).",
  websites: [
    {
      number: 1,
      name: "The Victorian Government – Literacy Teaching Toolkit (Storytelling)",
      url: "https://www.vic.gov.au/literacy-teaching-toolkit-early-childhood/teaching-practices-interacting-others/storytelling#links-to-veyldf",
      category: "Early Childhood Storytelling & VEYLDF Alignment",
      description: "Evidence-based state education toolkit illustrating storytelling practices, multimodal expression, and community connection, directly cited in the lesson plan.",
      usefulFor: "Guiding photographic story sequencing, educator scaffolding, and linking child voice recording with early literacy outcomes.",
      strength: "Directly aligned with Victorian Early Years Learning and Development Framework (VEYLDF) and Victoria University Footscray cohort needs.",
      weakness: "Text-heavy government portal requiring educator navigation to isolate media-specific lesson cards."
    },
    {
      number: 2,
      name: "ACARA – Australian Curriculum HASS & Media Arts Foundation Year",
      url: "https://www.australiancurriculum.edu.au/f-10-curriculum/learning-areas/hass-f-6/foundation-year",
      category: "Curriculum Standard & Media Representation",
      description: "National curriculum specifications for Foundation Year 'My Personal World' and introductory media artwork creation using digital images.",
      usefulFor: "Framing the lesson's humanities focus on family, community places, and how digital images communicate meaning.",
      strength: "Authoritative learning continuum benchmarks for transition from kindergarten to foundation year.",
      weakness: "Focuses on curriculum outcomes rather than step-by-step technological implementation with tablets."
    },
    {
      number: 3,
      name: "ACMI (Australian Centre for the Moving Image) – Early Years Education",
      url: "https://www.acmi.net.au/education/school-programs-and-resources/",
      category: "Media Arts, Animation & Digital Capture",
      description: "Melbourne-based world-leading museum of screen culture offering downloadable early years digital photography and story-crafting modules.",
      usefulFor: "Teaching preschoolers how to hold a tablet/camera, compose a frame, and understand that images tell stories.",
      strength: "Victorian cultural institution with high-quality child-friendly media literacy resources and educator lesson kits.",
      weakness: "Some workshops require museum gallery visits or specific paid exhibitions."
    },
    {
      number: 4,
      name: "Book Creator for Education – Early Childhood Digital Storytelling",
      url: "https://bookcreator.com/early-childhood/",
      category: "Digital Publishing & Audio-Visual Composition",
      description: "Intuitive digital book creation tool allowing young children to combine iPad photos, finger drawings, and voice recordings into interactive ebooks.",
      usefulFor: "Step 5 ('Creating the Digital Storybook') and Step 6 ('Sharing with Community') where photos and children's voice recordings are compiled.",
      strength: "Exceptionally accessible for 3-5 year olds; single-tap voice recording and simple drag-and-drop photo placement.",
      weakness: "Free tier limits teachers to 1 library of 40 books before a paid subscription is needed."
    }
  ],
  lessonPlan: {
    title: "Lesson Plan: Our Stories, Our Community - Digital Storybook",
    table: {
      ageGroup: "3-5 years",
      duration: "90 minutes",
      numberOfChildren: "20",
      learningArea: "Humanities with integration of media arts",
      staffRequired: "2",
      pedagogicalApproach: "Play-based Learning, Intentional Teaching, Arts Integration",
      classroomSetting: "Indoor settings"
    },
    rationale: `During home-corner play, I saw children deeply engaged in conversation about their family, favourite places and festivals. According to ACARA, in the foundation area, curriculum is focused on “my personal world”. The Victorian Government identifies storytelling as an important teaching practice where children share their experiences, culture, family knowledge and make connections with world around them. Based on it, I was inspired to develop lesson plan “Our Stories, Our Community – Digital Storybook”. Children will create media artworks using photographs and digital technologies.

When children interact with their family, peers, caregiver, educator they develop meaningful relationship, build and understand the sense of identity and belonging. Media Arts provide an authentic way to document, communicate and share the experiences with others. With the help of it, children become eUective communicator and active creator of media arts materials. This lesson can be one of the examples for the integration of media arts and humanities subject area curriculum.`,
    eylfOutcomes: [
      {
        outcomeTitle: "EYLF Outcome 1: Children have a Strong Sense of Identity",
        text: `This lesson plan actively supports Outcome 1 because “Children are actively exploring – Who I am, How I belong and What is my influence?” (AGDE, 2022, pp. 30). For example, children sharing her experience of going supermarket, vacation, doctor and understand that their stories are important.

During lesson plan, children will contribute family photographs and drawings to the digital story book. They will see themselves as valued members of family and kindergarten community while choosing the photographs and sharing their personal experiences with educators and peers.`
      },
      {
        outcomeTitle: "EYLF Outcome 5: Children are Effective Communicators",
        text: `“Children are social beings who are intrinsically motivated to interact, exchange ideas, thoughts, questions and feelings. They use a range of tools and media including, music, dance and drama, to express themselves, connect with others and extend their learning” (AGDE, 2022, pp. 57). The lesson also encourages children to verbal, non-verbal and digital technology to share their experience. For example, educator ask “What is your favourite place?”, child might say “My grandma’s home” or draw a picture or bring photograph. Here, we can see child have various methods to share and communicate their ideas and experience.`
      }
    ],
    materialsRequired: [
      "Tablets or iPads",
      "Digital camera",
      "Microphones",
      "Headphones",
      "Printer",
      "Family photographs (optional)",
      "Drawing paper",
      "Markers and pencils",
      "Photo frames",
      "Story sequencing cards",
      "Projector",
      "Observation sheets"
    ],
    activityDescription: {
      introductionTitle: "Introduction",
      introductionText: `(How do you open the activity? How do you connect students to the place and topic)
Children will be seated on classroom settings with table and chair. Educator will introduce the topic community by displaying the photographs of kindergarten spaces such as classroom, playground, garden, reading corner, block corner and art corner. Personal photographs will be requested to the family members with consent and if they feel comfortable to share it. Educator will say that this place looks familiar, do you know where this is? Children might say this is playground, garden, classroom as displayed in the picture. Is this place important for you? Children might say I have friend here; my educator is here; have lots of fun building bridge.`,
      steps: [
        {
          stepNumber: "Step 1",
          title: "Exploring People and Places that Matter",
          instructions: [
            "Educator will ask question:\n- Who are the important people in your life? (dad, mum, brother, sister, uncle, aunty, grandma, grandpa, educator, friends)",
            "Educator will collect photos sent by families to display later."
          ]
        },
        {
          stepNumber: "Step 2",
          title: "Collecting Materials for Story",
          instructions: [
            "Educator will give tablets/camera to children to photograph common area such as playground, garden, classroom, reading corner.",
            "The photographs clicked by children will be displayed in screen.",
            "Educator will ask:\n- Can you tell me, why did you take the picture of playground? (I play with my friends there; Here, I read my books; Here, I build bridges/home)",
            "Children will understand that all photograph/images have story."
          ]
        },
        {
          stepNumber: "Step 3",
          title: "Planning the Story",
          instructions: [
            "Educator will introduce story sequencing card.",
            "Educator will ask, “Which photograph should we put in our photo storybook?” (House, family picture, classroom picture)",
            "Children can then arrange photographs on the sequence they chose. “This not only reinforces the learning but shows children how stories are sequences and how images tell stories” (Dinham & Chalk, 2022, pp. 231)."
          ]
        },
        {
          stepNumber: "Step 4",
          title: "Recording Children’s Voice",
          instructions: [
            "Educator will record the voice of children for every image and the ideas and experiences behind it."
          ]
        },
        {
          stepNumber: "Step 5",
          title: "Creating the Digital Storybook",
          instructions: [
            "Educator will combine all the photographs, drawings and recordings into digital storybook titled: “Our Stories, Our Community”."
          ]
        },
        {
          stepNumber: "Step 6",
          title: "Sharing with the Community",
          instructions: [
            "Final storybook will be projected for the class.",
            "Children will watch, take a pride in and celebrate their contributions.",
            "Storybook will be shared with families."
          ]
        },
        {
          stepNumber: "Step 7",
          title: "Reflection",
          instructions: [
            "Educator will invite students in yarning-style circle for the reflection.",
            "Educator will ask, “What new thing did you learn about your friend, today?” (His/her favourite place is grandma’s house, He/she likes eating ice-cream, He/she lives with his/her mom and dad.)",
            "Educator will ask, “Do you think photos and recordings help us tell our stories?” (Yes. It shows my favourite place. I can see my grandma and grandpa when I miss them.)"
          ]
        }
      ]
    },
    bloomsTaxonomy: {
      items: [
        {
          level: "Remember",
          lookListenFor: "Learning facts, knowledge of major ideas and memorizing",
          questionAndResponse: "Who is in this photograph? (My dad, mom, uncle, aunty, grandpa, grandma, friends)"
        },
        {
          level: "Understand",
          lookListenFor: "Interpret, describe, diUerentiate, and discuss their knowledge of each skill",
          questionAndResponse: "Is the person in photograph important to you? Why? (Because my grandma read bedtime stories for me; my mom/dad takes care of me; my brother/sister help me riding bicycle.)"
        },
        {
          level: "Apply",
          lookListenFor: "Consist of two cognitive processes executing and implementation of knowledge",
          questionAndResponse: "Can you tell me what this photograph is about? What is story behind? (This is me, my dad and mom. We went for family vacation at the beach.)"
        },
        {
          level: "Analyse",
          lookListenFor: "Debating, organizing and attributing",
          questionAndResponse: "Is your friend’s photograph similar to yours? (Yes/No. Grandma lives with us but he/her grandma doesn’t. We both went to museum but it’s diUerent one. I celebrate Dashian (festival in Nepal) and my friend celebrates Diwali."
        },
        {
          level: "Evaluate",
          lookListenFor: "Monitoring, testing, judging, pointing out consistencies and utilizing critical thinking",
          questionAndResponse: "What do you think which photograph should go first in our digital storybook? Why? (Children will choose the photograph and reason why they chose.)"
        },
        {
          level: "Create",
          lookListenFor: "Understand the task, solve problems, devise plan and implement",
          questionAndResponse: "Let’s make storybook for our kindergarten, today. Let’s select the picture and talk about it. (This is our playground. It should go first because I play with my friends.)"
        }
      ],
      source: "Eber, P. A., & Parker, T. S. (2007). Assessing student learning: Applying Bloom’s Taxonomy. Human Service Education, 27(1), 45-47.",
      sourceUrl: "https://research.ebsco.com/c/m7hw3i/viewer/pdf/kly5m3kvkj?auth-callid=f603742f-142e-4a07-b5ab-24573ec40da5"
    },
    futurePlanTitle: "Future Planning",
    futurePlanText: "All future investigation on identities, belonging, community will be based on the observation, children’s interest and their engagement with materials created during the learning experience. If children still remained curious, it can be further extended to participating in neighbourhood walks, taking photographs of significant places around kindergarten such as parks, libraries or shops. With this, children will deepen their understanding of place, community and belonging.",
    references: [
      {
        citation: "Australian Curriculum Assessment and Reporting Authority [ACARA]. (2026). HASS F-6 – Foundation Year.",
        url: "https://www.australiancurriculum.edu.au/f-10-curriculum/learning-areas/hass-f-6/foundation-year?view=quick&detailed-content-descriptions=0&hide-ccp=0&hide-gc=0&load-detailed-content-descriptions=null&side-by-side=1&strands-start-index=0"
      },
      {
        citation: "Australian Government of Department of Education [AGDE]. (2022). Belonging, Being and Becoming: The Early Years Learning Framework for Australia (V2.0). Australian Government of Education for the Ministerial Council.",
        url: "https://www.acecqa.gov.au/sites/default/files/2023-01/EYLF-2022-V2.0.pdf"
      },
      {
        citation: "Dinham, J., & Chalk, B. (2022). Learning experience in dance. It’s arts play 2e EB (2nd ed., pp. 196-229). Oxford University Press Australia & New Zealand.",
        url: "https://ebookcentral.proquest.com/lib/vu/reader.action?docID=7018679&ppg=196&c=RVBVQg"
      },
      {
        citation: "The Victorian Government. (2026). Education and Training. Childcare and Early Learning Professionals. Storytelling.",
        url: "https://www.vic.gov.au/literacy-teaching-toolkit-early-childhood/teaching-practices-interacting-others/storytelling#links-to-veyldf"
      }
    ]
  }
};
