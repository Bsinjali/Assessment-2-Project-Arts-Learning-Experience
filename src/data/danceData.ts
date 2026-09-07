import { DomainContent } from '../types';

export const danceData: DomainContent = {
  id: "dance",
  name: "Dance",
  strandColor: "#ea580c",
  badgeBg: "#fff7ed",
  badgeBorder: "#fed7aa",
  badgeText: "#9a3412",
  quote: "“What is dance? It is physical expression through movement and rhythm of relationships, feelings and ideas” (Robinson & Aronica, 2018).",
  websites: [
    {
      number: 1,
      name: "ABC Kids Play School – Dance It Out! (Martinez, 2026)",
      url: "https://www.abc.net.au/abckids/programs/play-school/dance-it-out-why-dance-and-movement-matter-in-early-childhood/106497004",
      category: "Early Childhood Dance & Somatic Learning",
      description: "Practitioner article and video series by dance educator Martinez highlighting why dance is an essential developmental tool for patterns, sequencing, and counting rather than just a motor reset.",
      usefulFor: "Explaining the rationale for movement integration to families, exploring spatial concepts, and holistic body expression.",
      strength: "High cultural trust, relatable Australian early childhood educator voice, and direct links to emotional co-regulation and mathematical patterns.",
      weakness: "Video episodes are episodic and depend on ABC iView availability schedules."
    },
    {
      number: 2,
      name: "Jack Hartmann Kids Music Channel – Here We Go | Directions Songs",
      url: "https://www.youtube.com/watch?v=Clf21HQAnlw",
      category: "Spatial Awareness & Positional Words",
      description: "Interactive rhythm and movement song explicitly guiding children through directional cues (forward, backward, side to side, spin), featured in Step 4 of the lesson plan.",
      usefulFor: "Step 4 of the Dance lesson plan, anchoring spatial vocabulary through synchronous music and gross motor coordination.",
      strength: "Catchy call-and-response repetition that enables immediate whole-body participation regardless of English fluency.",
      weakness: "Energetic presentation can overstimulate sensory-sensitive children if not introduced with calm educator scaffolding."
    },
    {
      number: 3,
      name: "TED Ideas – Why Dance is Just as Important as Math in School",
      url: "https://ideas.ted.com/why-dance-is-just-as-important-as-math-in-school/",
      category: "Advocacy, Neurodiversity & Movement Theory",
      description: "Seminal essay by Sir Ken Robinson and Lou Aronica advocating for kinesthetic learning, Rudolf Laban's movement concepts, and cognitive growth.",
      usefulFor: "Pedagogical rationale, explaining how spatial orientation (up, down, pathways) directly fosters mathematical cognition.",
      strength: "Compelling, evidence-based academic advocacy supporting intentional dance pedagogy in early childhood.",
      weakness: "Written for educators, researchers, and policymakers; not directly child-facing."
    },
    {
      number: 4,
      name: "Ausdance – Early Childhood Movement & Dance Resources",
      url: "https://ausdance.org.au/resources/details/dance-in-early-childhood",
      category: "Movement Education & Laban Principles",
      description: "Australia's peak dance organisation guidelines on safe dance practices, spatial pathways, locomotor vs. non-locomotor skills for ages 3–5.",
      usefulFor: "Structuring taped floor pathways, teaching body awareness, and safe gross-motor spatial navigation.",
      strength: "Rigorous dance education frameworks aligned with Rudolf Laban's effort actions and spatial geometry.",
      weakness: "Advanced sections delve into formal choreography suited for older primary rather than play-based ELC."
    }
  ],
  lessonPlan: {
    title: "Lesson Plan: Learning Direction through Dance and Movement",
    table: {
      ageGroup: "3-5 years",
      duration: "75 minutes",
      numberOfChildren: "20",
      learningArea: "Maths with integration of dance",
      staffRequired: "2",
      pedagogicalApproach: "Play-based Learning, Intentional Teaching, Arts Integration",
      classroomSetting: "Outdoor settings"
    },
    rationale: `I was researching content how to integrate various forms of arts in diIerent subject areas of curriculum. Then, I stumbled upon article “Dance It Out! Why Dance and Movement Matter in Early Childhood” by dance educator Martinez (2026). It clearly highlights the importance of dance and movements for child’s holistic developments. She emphasized dance is not “just a break” or reset between activities. It means much more, children can develop early maths concepts of (patterns, sequencing, counting). Hence, it creates opportunity for me to integrate dance and movement into maths concept of spatial orientation (direction).

Active exploration, movement and meaningful interactions help children to develop mathematical concepts in everyday life. For example, spatial orientation “It means knowing where you are in space. Concepts like up, down, backwards, forwards, left, right can be explored, and children can make horizontal and vertical shapes” (Dinham & Chalk, 2022, pp.169).

This lesson is also based on Rudolf Laban’s movement theory, which emphasises children’s exploration of body, space and movement relationships (Dinham, 2023). During the lesson, they will learn about diIerence between locomotor and non-locomotor movements and how movement can be performed at diIerent levels and tempo, and in various directions using diIerent body parts (Dinham & Chalk, 2022, pp.206).

Here, dance become medium to investigate, experience and communicated mathematical concepts.`,
    eylfOutcomes: [
      {
        outcomeTitle: "EYLF Outcome 3: Children have a Strong Sense of Wellbeing",
        text: `When dance is embedded in everyday learning opportunities, children have strong sense of wellbeing as they participate in physically, psychologically and culturally safe environment (Dinham, 2023, pp. 206). “Between the ages of three and five, children are starting to develop fundamental movement skills that relate to locomotion, balance, and hand-eye coordination” (Dinham & Chalk, 2022, pp.206). This outcome is evident in this lesson plan because when educator ask children “Turn your body on right side” then they will use their whole-body to turn right physically.`
      },
      {
        outcomeTitle: "EYLF Outcome 4: Children are Confident and Involved Learner",
        text: `This learning experience strongly supports EYLF Outcome 4 because children will actively investigate mathematical concepts, test ideas, and create movement solutions becoming active learners. For example, children might discover turning clockwise feel diIerent compared to turning anticlockwise. Hence, these investigations support learning disposition such as curiosity, inquiry and problem-solving (AGDE, 2022).`
      }
    ],
    materialsRequired: [
      "Direction cards",
      "Floor arrows",
      "Coloured floor tape",
      "Hoops",
      "Scarves",
      "Music player",
      "Visual vocabulary cards",
      "Observation sheets",
      "Digital camera for documentation",
      "Large shape markers"
    ],
    activityDescription: {
      introductionTitle: "Introduction",
      introductionText: `(How do you open the activity? How do you connect students to the place and topic)
Educator will take children outdoor in large area where they will have enough space to move around. Then, educator will introduce concept of spatial orientation and body movements for the activity.`,
      steps: [
        {
          stepNumber: "Step 1",
          title: "Direction Discovery Warm-Up",
          instructions: [
            "Educator will give simple movement instructions to children. So, they begin to understand the connection between body movement and body language."
          ],
          dialogue: [
            { speaker: "educator", text: "Can everyone move five steps forward?" },
            { speaker: "children", text: "(Children move together)" },
            { speaker: "educator", text: "What direction did we move?" },
            { speaker: "children", text: "(Forward)" },
            { speaker: "educator", text: "Can everyone move five steps backward?" },
            { speaker: "children", text: "(Children move together)" },
            { speaker: "educator", text: "Did you feel any diIerent while moving backward?" },
            { speaker: "children", text: "(Yes, I can’t see anything behind me.)" },
            { speaker: "educator", text: "Nowe, we will slowly turn around in a circle." },
            { speaker: "children", text: "(Children will turn their whole body in circular motion.)" }
          ]
        },
        {
          stepNumber: "Step 2",
          title: "Exploring Pathways",
          instructions: [
            "Here, educator will prepare taped pathways on the floor. It will be straight and bent. Children will need to balance their body to walk in taped pathway.",
            "Educator will invite children to walk on taped pathways physically experience mathematical concepts.",
            "Educator will ask, “What do you notice about this pathway?” (It’s straight. It’s bend somewhere.)"
          ]
        },
        {
          stepNumber: "Step 3",
          title: "Direction Dance Challenge",
          instructions: [
            "Educator will introduce to various movement cards:\n- Up\n- Down\n- Side to side\n- Round\n- Back\n- front\n- Low\n- High\n- Narrow\n- Wide\n- In\n- Out",
            "Children will try to follow the direction as shown in movement cards encouraging them for creative problem-solving and movement exploration."
          ]
        },
        {
          stepNumber: "Step 4",
          title: "Dancing on Directions Song for Children",
          instructions: [
            "At this stage, children will now dance on the direction song “Here We Go – Directions Songs for Kids” by Jack Hartmann.",
            "Children will follow the same direction as it is in song."
          ]
        },
        {
          stepNumber: "Step 5",
          title: "Reflection",
          instructions: [
            "At this stage, children will finish dancing. Children will have rest and sit on yarning style circle for reflection.",
            "Educator will ask, “what did we learn today?” (up, down, left, right, forward, backward)",
            "Educator will ask, “Was dancing helpful to remember direction?” (Yes/No)",
            "Educator will ask, “What was your favourite parts of today’s lesson?” (Moving forward/backward, side by side, dancing)"
          ]
        }
      ]
    },
    bloomsTaxonomy: {
      items: [
        {
          level: "Remember",
          lookListenFor: "Learning facts, knowledge of major ideas and memorizing",
          questionAndResponse: "Which direction did you go? (Forward, backward and around)"
        },
        {
          level: "Understand",
          lookListenFor: "Interpret, describe, diIerentiate, and discuss their knowledge of each skill",
          questionAndResponse: "What does it mean to move backwards? (Moving from where I am standing to the front.)"
        },
        {
          level: "Apply",
          lookListenFor: "Consist of two cognitive processes executing and implementation of knowledge",
          questionAndResponse: "How will you balance your body and walk in this bend/curved pathway? (Child will demonstrated it in action.)"
        },
        {
          level: "Analyse",
          lookListenFor: "Debating, organizing and attributing",
          questionAndResponse: "Are these two pathways (straight and bend/curved) same? (No, one goes straight and other bends.)"
        },
        {
          level: "Evaluate",
          lookListenFor: "Monitoring, testing, judging, pointing out consistencies and utilizing critical thinking",
          questionAndResponse: "Which pathway was easiest for you? (Straight pathway because I don’t have to move my body too much and can walk straight.)"
        },
        {
          level: "Create",
          lookListenFor: "Understand the task, solve problems, devise plan and implement",
          questionAndResponse: "Would you like to show me your own dance direction? (Child may take two steps forward and move side by side and turn around.)"
        }
      ],
      source: "Eber, P. A., & Parker, T. S. (2007). Assessing student learning: Applying Bloom’s Taxonomy. Human Service Education, 27(1), 45-47.",
      sourceUrl: "https://research.ebsco.com/c/m7hw3i/viewer/pdf/kly5m3kvkj?auth-callid=f603742f-142e-4a07-b5ab-24573ec40da5"
    },
    futurePlanTitle: "Future Plan",
    futurePlanText: "There are lots of possibility learning extensions for future. Children can do navigation activity such as treasure hunting to develop high order of thinking. Furthermore, children can create their kindergarten community map and use dance to represent routes, strengthening mathematical concept and exploring movement as a form of learning and communication.",
    references: [
      {
        citation: "Australian Government of Department of Education [AGDE]. (2022). Belonging, Being and Becoming: The Early Years Learning Framework for Australia (V2.0). Australian Government of Education for the Ministerial Council.",
        url: "https://www.acecqa.gov.au/sites/default/files/2023-01/EYLF-2022-V2.0.pdf"
      },
      {
        citation: "Dinham, J., & Chalk, B. (2022). Learning experience in dance. It’s arts play 2e EB (2nd ed., pp. 196-229). Oxford University Press Australia & New Zealand.",
        url: "https://ebookcentral.proquest.com/lib/vu/reader.action?docID=7018679&ppg=196&c=RVBVQg"
      },
      {
        citation: "Dinham, J. (2023). The elements of dance (figure 7.7). Delivering authentic arts education (5th ed., p. 209). Cengage Learning Australia.",
        url: "https://ebookcentral.proquest.com/lib/vu/reader.action?docID=30550636&ppg=236"
      },
      {
        citation: "Eber, P. A., & Parker, T. S. (2007). Assessing student learning: Applying Bloom’s Taxonomy. Human Service Education, 27(1), 45-47."
      },
      {
        citation: "Jack Hartmann. (2020, June 18). Here We Go | Directions Songs for Kids | Jack Hartmann Positional Words | Spatial Awareness. [YouTube].",
        url: "https://www.youtube.com/watch?v=Clf21HQAnlw&list=RDClf21HQAnlw&start_radio=1"
      },
      {
        citation: "Martinez, E. (2026, April). Dance it out! Why dance and movement matter in early childhood. ABC Kids.",
        url: "https://www.abc.net.au/abckids/programs/play-school/dance-it-out-why-dance-and-movement-matter-in-early-childhood/106497004"
      },
      {
        citation: "Robinson, K., & Aronica, L. (2018, March 21). Why dance is just as important as math in school. TED Ideas.",
        url: "https://ideas.ted.com/why-dance-is-just-as-important-as-math-in-school/"
      }
    ]
  }
};
