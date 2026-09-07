import { DomainContent } from '../types';

export const dramaData: DomainContent = {
  id: "drama",
  name: "Drama",
  strandColor: "#0d9488",
  badgeBg: "#f0fdfa",
  badgeBorder: "#99f6e4",
  badgeText: "#115e59",
  quote: "“Drama, by its nature, provides the possibility to examine life’s most complex issues. The process serves as a hands-on tool for exploring complex social issues, relationships, and the nature of cause and e@ect” (Donovan & Pascale, 2012, pp. 63).",
  websites: [
    {
      number: 1,
      name: "AllPlay Learn – Emotions and Movement Story Series (Monash University)",
      url: "https://www.allplaylearn.org.au/resource/emotion-and-movement-story-series/",
      category: "Inclusive Social-Emotional Drama & Storytelling",
      description: "Research-backed resources from Monash University providing evidence-based emotion stories, puppet prompts, and self-regulation role-play, directly cited in the lesson plan.",
      usefulFor: "Step 1 ('Becoming Emotion Explorers') and Step 2 ('Puppet Problem Solving') with the Teddy puppet scenarios.",
      strength: "Built specifically for Australian inclusive early childhood settings, neurodivergent children, and emotional literacy.",
      weakness: "Highly structured materials that require educator intentionality to adapt into spontaneous dramatic play."
    },
    {
      number: 2,
      name: "Raising Children Network – Self-Regulation in Early Childhood",
      url: "https://raisingchildren.net.au/toddlers/behaviour/understanding-behaviour/self-regulation",
      category: "Child Development, Health & Emotional Wellbeing",
      description: "The Australian complete parenting and professional resource supported by the Australian Government Department of Social Services.",
      usefulFor: "Framing the Rationale and 'Feelings Toolbox' (deep breathing, calm corner, verbalising feelings with educators).",
      strength: "Peer-reviewed Australian developmental health information that is clear, accessible, and grounded in emotional safety.",
      weakness: "Written primarily for parents and carers, requiring educators to translate clinical advice into classroom dramatic scenarios."
    },
    {
      number: 3,
      name: "Drama Australia – Early Years Dramatic Play Guidelines",
      url: "https://dramaaustralia.org.au/resources/",
      category: "Dramatic Arts Pedagogy & Process Drama",
      description: "National peak body guidelines on imaginative role-play, character perspective-taking, and safe dramatic conventions for preschoolers.",
      usefulFor: "Structuring two-person drama scenarios ('My friend took my toy', 'I miss my family') and puppet dialogue.",
      strength: "Professional drama pedagogy focusing on empathy building, de-roling techniques, and perspective taking.",
      weakness: "Extensive specialist drama terminology that non-specialist early childhood educators need to distill."
    },
    {
      number: 4,
      name: "Story Box Library – Stories that Support Emotional Wellbeing",
      url: "https://storyboxlibrary.com.au/stories",
      category: "Australian Children's Literature & Expressive Drama",
      description: "Digital library of Australian picture books read aloud by diverse Australian actors, storytellers, and educators with rich facial expressions.",
      usefulFor: "Modelling facial expressions, eyebrow and mouth emotional cues, and introducing feelings vocabulary through dynamic read-alouds.",
      strength: "Authentic Australian accents, Indigenous storytellers, and expressive actor role-modelling for young children.",
      weakness: "Full library requires an institutional subscription (many public libraries and ELCs in Victoria have free access)."
    }
  ],
  lessonPlan: {
    title: "Lesson Plan: Exploring Emotions through Drama",
    table: {
      ageGroup: "3-5 years",
      duration: "90 minutes",
      numberOfChildren: "20",
      learningArea: "Health Education with integration of drama",
      staffRequired: "2",
      pedagogicalApproach: "Play-based Learning, Intentional Teaching, Arts Integration",
      classroomSetting: "Indoor settings"
    },
    rationale: `This lesson plan is based on evidence-based strategies recommended by AllPlay Learn. It highlights how pretend play, role play and supportive interactions in safe environment helps children to recognise their emotions and express it appropriately. It is very important that children have ability to understand and manage their behaviour and reactions because it helps them to stay focus and learn; develop positive relationship with peers and adults around them (Raising Children Network, 2025).

Research has shown that engagement in drama can deepen comprehension, bolster language skills, and develop awareness of and sensitivity to multiple perspectives (Wilhelm 2002 as cited in Donovan & Pascale, 2012, pp. 64). The purpose of this lesson is to help children to identify and explore emotions and ways to cope with day-today stress and challenges. For example, child is feeling frustrated, what she can do cope with this feeling.`,
    eylfOutcomes: [
      {
        outcomeTitle: "EYLF Outcome 3: Children have a Strong Sense of Wellbeing",
        text: `“Managing emotions, developing self-regulations and building perseverance and persistence are all parts of developing executive function which are higher order cognitive functioning process in brain” (AGDE, 2022, pp. 44). Throughout the lesson, children will be encouraged to identify emotions, what sort of emotional cues connect to specific emotions, what strategies to apply when they feel di@erent kind of emotions. All these will be explored through using emotion cards, acting scenarios and puppet storytelling. Hence, it strongly supports EYLF Outcome 3.`
      },
      {
        outcomeTitle: "EYLF Outcome 4: Children are Confident and Involved Learners",
        text: `The EYLF Outcome 4 highlights that “Children develop a growth mindset and learning dispositions such as curiosity, cooperation, confidence, creativity, commitment, enthusiasm, persistence, imagination and reflexivity” (AGDE, 2022, pp.51). Children will actively participate to investigate emotions by examining facial expressions, body language and social situations throughout lesson plan. Also, children will explore multiple possibilities for given scenario by educator and justify their decision. Therefore, this lesson plan strongly supports EYLF Outcome 4.`
      }
    ],
    materialsRequired: [
      "Puppets",
      "Mirrors",
      "Feeling picture cards",
      "Story cards showing social situations",
      "Emotion dice",
      "Scarves",
      "Large chart paper",
      "Markers",
      "Calm corner resources",
      "Observation sheets",
      "Camera for documentation"
    ],
    activityDescription: {
      introductionTitle: "Introduction",
      introductionText: `(How do you open the activity? How do you connect students to the place and topic)
Educator will invite children in yarning style circle. The topic will be introduced by establishing social situation with puppet character ‘Teddy’ feeling frustrated. Children will need to identify what kind emotions was Teddy feeling and why. Furthermore, children will investigate how they can make Teddy feel better.`,
      steps: [
        {
          stepNumber: "Step 1",
          title: "Becoming Emotion Explorers",
          instructions: [
            "Educator will invite children to yarning style circle.",
            "Educator will show emotion cards such as angry, bored, disappointed, sad, scared, worried, nervous, frustrated. It will also help them to memorise these vocabularies.",
            "Educator will put emotion card on Teddy face and say, “What do you think how Teddy is feeling, now?” (Children will identify emotions based on facial expression especially looking at mouth, eye and eyebrows)."
          ],
          dialogue: [
            { speaker: "educator", text: "When I arrived this morning in the classroom, Teddy was sitting quietly by himself. I wonder what he might be feeling?" },
            { speaker: "children", text: "(Sad, Worried, Disappointed, unhappy, lonely)" },
            { speaker: "educator", text: "How do you know?" },
            { speaker: "children", text: "(He is not smiling. He is not playing with his friends. He is sitting alone. He is not talking to friends.)" },
            { speaker: "educator", text: "Educator will guide children to connect with topic and prepare them for further exploration." }
          ]
        },
        {
          stepNumber: "Step 2",
          title: "Puppet Problem Solving",
          instructions: [
            "Educator will introduce two scenarios, where children will explore wide range of emotions and engage in problem-solving through role-play and guided discussion.",
            "Scenario 1: Waiting for turn\nChild A is playing with tablet, but Teddy also wants to use it. So, educator will ask, “How is Teddy feeling now?” (Angry, Frustrated, Upset, Sad). What can Teddy do? (Wait. Ask Child A. Take deep breath while wait. Go and play somewhere else.)",
            "Scenario 2: Someone knocked over my tower\nTeddy was trying to build tall tower. He had spent quite a lot of time to build it. But Child A accidentally knocked it down when he was trying to stand up. So, educator will ask, “How is Teddy feeling now?” (Angry, Frustrated, Upset, Sad). What can Teddy do? (Take deep breath. Tell the Child A how he is feeling. Try building it again. Ask educator for support)."
          ]
        },
        {
          stepNumber: "Step 3",
          title: "Drama Scenarios",
          instructions: [
            "Educator will group children in the group with two members. Children will act the scenarios with guidance of educator.",
            "Scenario 1: My friend took my toy\nChild A was playing with a doll. He/she put it down for a moment went to drink water. When he/she came back, Child B was playing with it.",
            "Scenario 2: I miss my family\nChild A has just arrived at kindergarten. He/she is missing his/her family and feels sad."
          ]
        },
        {
          stepNumber: "Step 5",
          title: "Creating a Feelings Toolbox",
          instructions: [
            "Educator will create large poster, and children will share their ideas about techniques to regulate emotions:\n- Taking deep breaths.\n- Talking to friend or educator about the feelings.\n- Sitting in calm corner,\n- Walk around to feel calm"
          ]
        },
        {
          stepNumber: "Step 4",
          title: "Reflection",
          instructions: [
            "Children will sit together with educator to reflect on lesson.",
            "Educator will ask: What feeling was easy to recognise? (Children will share their own ideas and experience.) What action will you take if someone is feeling upset?"
          ]
        }
      ]
    },
    bloomsTaxonomy: {
      items: [
        {
          level: "Remember",
          lookListenFor: "Learning facts, knowledge of major ideas and memorizing",
          questionAndResponse: "Educator will show the emotion card, and children will identity the emotion from card."
        },
        {
          level: "Understand",
          lookListenFor: "Interpret, describe, di@erentiate, and discuss their knowledge of each skill",
          questionAndResponse: "How do you Teddy feels when someone knocked his tall tower? (Upset, angry, sad because he spends quite a lot of time to build it.)"
        },
        {
          level: "Apply",
          lookListenFor: "Consist of two cognitive processes executing and implementation of knowledge",
          questionAndResponse: "Can you show me what action will you take when you feel angry? (Take deep breath. Start counting. Take walk)"
        },
        {
          level: "Analyse",
          lookListenFor: "Debating, organizing and attributing",
          questionAndResponse: "Do you think there is di@erence between feeling sad and feeling angry?"
        },
        {
          level: "Evaluate",
          lookListenFor: "Monitoring, testing, judging, pointing out consistencies and utilizing critical thinking",
          questionAndResponse: "What do you think Teddy needs to do if wants to use tablet? (Wait for his turn. Ask politely with a friend for a turn. Ask a teacher for help.)"
        },
        {
          level: "Create",
          lookListenFor: "Understand the task, solve problems, devise plan and implement",
          questionAndResponse: "Children will act the scenarios provided by educator in guidance."
        }
      ],
      source: "Eber, P. A., & Parker, T. S. (2007). Assessing student learning: Applying Bloom’s Taxonomy. Human Service Education, 27(1), 45-47.",
      sourceUrl: "https://research.ebsco.com/c/m7hw3i/viewer/pdf/kly5m3kvkj?auth-callid=f603742f-142e-4a07-b5ab-24573ec40da5"
    },
    futurePlanTitle: "Future Planning",
    futurePlanText: "If children showed strong interest, then educator will prepare dramatic experience to explore empathy and build the capacity to see things from other people’s point of view. If educator observe there is need for additional emotional regulation strategies, then he/she can prepare future learning experience based on it.",
    references: [
      {
        citation: "Australian Government of Department of Education [AGDE]. (2022). Belonging, Being and Becoming: The Early Years Learning Framework for Australia (V2.0). Australian Government of Education for the Ministerial Council.",
        url: "https://www.acecqa.gov.au/sites/default/files/2023-01/EYLF-2022-V2.0.pdf"
      },
      {
        citation: "AllPlay Learn. (2022). Emotions and movement story series. Monash University.",
        url: "https://www.allplaylearn.org.au/resource/emotion-and-movement-story-series/?utm_source=chatgpt.com#download"
      },
      {
        citation: "Donovan, L., & Pascale, L. (2012). Visual Art: Accessing content through image. Integrating the arts across the content areas. Shell Education.",
        url: "https://search.ebscohost.com/login.aspx?direct=true&AuthType=shib&db=nlebk&AN=3455885&site=ehost-live&custid=s1145751&ebv=EK&ppid=Page-__-74"
      },
      {
        citation: "Raising Children Network. (2025, March 12). Self-regulation: children and teenagers.",
        url: "https://raisingchildren.net.au/toddlers/behaviour/understanding-behaviour/self-regulation"
      },
      {
        citation: "Eber, P. A., & Parker, T. S. (2007). Assessing student learning: Applying Bloom’s Taxonomy. Human Service Education, 27(1), 45-47.",
        url: "https://research.ebsco.com/c/m7hw3i/viewer/pdf/kly5m3kvkj?auth-callid=f603742f-142e-4a07-b5ab-24573ec40da5"
      }
    ]
  }
};
