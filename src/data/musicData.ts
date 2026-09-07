import { DomainContent } from '../types';

export const musicData: DomainContent = {
  id: "music",
  name: "Music",
  strandColor: "#d97706",
  badgeBg: "#fffbeb",
  badgeBorder: "#fde68a",
  badgeText: "#92400e",
  quote: "Music allows young children to explore sound, express narrative, and develop early acoustic and linguistic understanding.",
  websites: [
    {
      number: 1,
      name: "YourClassical Storytime – The Three Billy Goats Gruff",
      url: "https://www.yourclassical.org/episode/2025/02/01/yourclassical-storytime-billy-goats-gruff",
      category: "ECE Music & Storytelling / Sound Effect Stories",
      description: "Orchestral audio storytelling episode narrated by Scott Blankenship with music by Bedřich Smetana and illustrations by Nancy Carlson, directly inspiring the classroom lesson plan.",
      usefulFor: "Integrating classical music instrumentation, character leitmotifs, and acoustic dynamics into early childhood English storytelling.",
      strength: "Free, high-fidelity audio production with expressive musical phrasing that models pitch, volume, and rhythm for young listeners.",
      weakness: "Requires reliable internet connection and audio speaker setup; English narration may require pre-teaching for EAL/D children."
    },
    {
      number: 2,
      name: "ACARA Music Support Resources – Examples of Knowledge and Skills",
      url: "https://www.australiancurriculum.edu.au/support-resources/learning-area-resources/music_examples_of_knowledge_and_skills",
      category: "Curriculum Alignment & Music Literacy",
      description: "Official Australian Curriculum resource providing foundational indicators of musical knowledge, dynamics, rhythm, and expressive movement.",
      usefulFor: "Assessing children's understanding of musical elements (dynamics, tempo, timbre, rhythm) and structuring age-appropriate investigations.",
      strength: "Clear mapping to national standards and intentional teaching practices for early primary and foundation stages.",
      weakness: "Primarily written as an educator policy guide rather than immediate plug-and-play classroom activities."
    },
    {
      number: 3,
      name: "Brisbane City Council – Creek Neighbours Online Program",
      url: "https://www.brisbane.qld.gov.au/libraries-venues-and-facilities/venue-and-places/environment-centres/creek-neighbours-online-program",
      category: "Environmental Soundscapes & First Nations Connection",
      description: "Community environmental educational platform exploring waterways, natural habitats, and Turrbal and Yuggera country connections.",
      usefulFor: "Fostering Acknowledgement of Country, indigenous land awareness, and natural water/river soundscape listening.",
      strength: "Contextualised Australian local ecology with authentic cultural learning links and local animal sounds.",
      weakness: "Geographically focused on Southeast Queensland waterways; needs contextual adaptation for Victorian ELC settings."
    },
    {
      number: 4,
      name: "ABC Kids Listen – Music and Movement Audio Hub",
      url: "https://www.abc.net.au/kidslisten",
      category: "Early Childhood Audio & Creative Listening",
      description: "Dedicated Australian public broadcaster audio app and web portal featuring curated children's songs, nursery rhymes, and sound stories.",
      usefulFor: "Daily musical transitions, active listening games, rhythmic movement, and accessible multicultural songs.",
      strength: "100% free, commercial-free Australian content designed specifically for toddlers and preschoolers with diverse voice talents.",
      weakness: "Fast-updating audio streams that require educators to curate playlist items in advance."
    }
  ],
  lessonPlan: {
    title: "Lesson Plan: Communicating Story of “The Three Billy Goats Gruff” Integrating Music",
    table: {
      ageGroup: "3-5 years",
      duration: "90 minutes",
      numberOfChildren: "20",
      learningArea: "English with integration of music",
      staffRequired: "2",
      pedagogicalApproach: "Play-based Learning, Intentional Teaching, Arts Integration, Storytelling",
      classroomSetting: "Indoor settings"
    },
    rationale: `This learning experience is developed based on observations of children’s interest to construct bridges using blocks, loose parts and recycled materials. They were spending considerable time to test their ideas “whether or not bridge is safe enough for toy animals to cross from one side to another” during play. Children figured out when big animal cross the bridge, it collapsed. Hence, they let small animals cross the bridge first. In this scenario, children were developing characters, problem solving skills and sequencing events. Children are demonstrating early literacy, and creative and critical thinking skills under learning area “English” (ACARA, 2026).

During the play, children were constantly making rhythmic sounds such as “tap tap tap”, “clomp clomp” and “stomp stomp”. They believe big animal make loud sound while moving but small animals make soft sound. Rhythm, dynamics (volume of sound) and expression (influence) are key elements of music that will help children create opportunities to participate in the world of music as well as develop music literacy (Dinham, 2022).

Reflecting on children’s learning experience, a story “The Three Billy Goats Gruff” became a meaningful extension that closely relates to existing interests (Seel, 2025). It will unfold as ‘Sound Effect Stories’ during the lesson plan adding sounds to enhance story (Donovan & Pascale, 2012, pp. 45). For example, children will make sounds of goats crossing the bridge by using hands, or feet or other available instruments. English curriculum will be taught incorporating music element to deepen children’s understanding and develop listening, imagination, creative and critical thinking (ACARA, 2026).`,
    eylfOutcomes: [
      {
        outcomeTitle: "EYLF Outcome 4: Children are Confident and Involved Learners",
        text: `“Children use active mental process such as exploration, experimentation, question, collaboration and problem solving across all aspects of curriculum” (AGDE, 2022, pp. 50). Bridge and animals were central idea for previous construction play-based learning experience. Now, in this lesson plan, past knowledge experience will be transferred to storytelling context, children making meaningful connection to their own play strongly reflecting EYLF Outcome 4. For example, they will actively participate, investigate strength of bridge and experiment the sounds with different sort of tools to create goat crossing bridge.`
      },
      {
        outcomeTitle: "EYLF Outcome 5: Children are Effective Communicators",
        text: `“Children use a range of tools and media, including music, dance and drama, to express themselves, connect with others and extend their learning” (AGDE, 2022, pp.57). Children will listen to the story, discuss the characters, important events and communicate their ideas using verbal and non-verbal gestures throughout the lesson. For example, when teacher ask children, “Can you show me how do you make goat sound?”, student might reply “meh”. “Can you make sound of stomach growling” possible answer might be “grrrrr”.`
      }
    ],
    materialsRequired: [
      "Foam blocks, wooden block and loose parts to build bridge",
      "Speaker/Technological device to play sounds",
      "Goat props/toy/puppet of different size big, medium and small.",
      "Troll – prop/masks (Mean Character)",
      "Cards/pictures sequencing story events",
      "River (cardboard box)",
      "Grass/meadow (model made from cardboard box)",
      "Paper",
      "Pen",
      "Pencil",
      "Colour and Brushes"
    ],
    activityDescription: {
      introductionTitle: "Introduction",
      introductionText: `(How do you open the activity? How do you connect students to the place and topic)
The lesson will unfold by educator talking about children’s previous bridge building experience and encourage them to talk about it. Children will be invited to sit around bridge built by educator and introduce story The Three Billy Goats Gruff. As the story begins, children will discover sounds, rhythms, actions, emotions within the narrative. Moreover, children will create sound effects in collaboration.`,
      steps: [
        {
          stepNumber: "Step 1",
          title: "Children will do Acknowledgement of Country (10-15 minutes)",
          instructions: [
            "Educator will invite children to sit in yarning-style circle and do Acknowledge of the Country.",
            "Educator will recite Acknowledgement of the Country and children will follow: “Here is the land, here is the sky, here are my friends, and here am I. We thank the Turrbal and Yuggera people for the land on which we play and learn from. We promise to take care of the land, animals and people too” (Brisbane City Council, 2025).",
            "Educator says “I have noticed all of you building bridges for animals to help cross the river. I have also built a bridge in the classroom, today.” Gradually, educator will introduce topic for the lesson."
          ],
          dialogue: [
            { speaker: "educator", text: "Why do you think I make this bridge for?" },
            { speaker: "children", text: "Expected answer: To go get food, to visit family, to get across the water" }
          ]
        },
        {
          stepNumber: "Step 2",
          title: "Provocation and Inquiry (5-10 minutes)",
          instructions: [
            "Educator will point towards goat picture/toy on the bridge and ask:",
            "Here, educator is encouraging children to investigate, imagine and predict scenario right before them unfolding during lesson."
          ],
          dialogue: [
            { speaker: "educator", text: "Do you know name of this animal?" },
            { speaker: "children", text: "Expected answer: Goat" },
            { speaker: "educator", text: "What do you think these goats trying to do?" },
            { speaker: "children", text: "Expected answer: They are trying to cross the bridge." },
            { speaker: "educator", text: "Do you think they can easily cross this bridge?" },
            { speaker: "children", text: "Expected answer: Yes. No, there is someone hiding underneath the bridge." }
          ]
        },
        {
          stepNumber: "Step 3",
          title: "Story Immersion (45 mins)",
          instructions: [
            "At this stage, educator will introduce story book “The Three Billy Goats Gruff”. This story is available on YourClassical website narrated by Scott Blabkenship, music by Bedrich Smenta and art by Nancy Carlson. This story is about “three Billy Goats Gruff who run out of food to munch on their mountainside, evil Troll is blocking way to a field filled with delicious green grass and sweet clover” (YourClassical, 2026).",
            "One educator will narrate the story, and another educator will support with technology playing soundtrack as story begins.",
            "Educator will narrate the story slowly and expressively. Pause in-between section of stories to encourage comprehension and prediction.",
            "Educator will ask intentional and open-ended question:"
          ],
          dialogue: [
            { speaker: "educator", text: "How many goats are there?" },
            { speaker: "children", text: "3 goats" },
            { speaker: "educator", text: "Are they brothers?" },
            { speaker: "children", text: "Yes" },
            { speaker: "educator", text: "What is the name of goats?" },
            { speaker: "children", text: "Little Billy Goat Gruff – youngest, Medium Billy Goat Gruff – medium, Big Billy Goat Gruff – biggest and strongest" },
            { speaker: "educator", text: "Do you know what sounds goats make?" },
            { speaker: "children", text: "meh" },
            { speaker: "educator", text: "What was the problem billy goats facing at the mountain?" },
            { speaker: "children", text: "They don’t have food. They have already eaten every leaf and fern, twig and branch." },
            { speaker: "educator", text: "What kind of sound does stomach when you are hungry?" },
            { speaker: "children", text: "Growling" },
            { speaker: "educator", text: "Goats are hungry, what do you think they will do?" },
            { speaker: "children", text: "Goats will go to meadow to eat dandelions." },
            { speaker: "educator", text: "Who lives under the bridge to the meadow?" },
            { speaker: "children", text: "Big mean troll" },
            { speaker: "educator", text: "What does big mean Troll do to goats?" },
            { speaker: "children", text: "Troll eat them" },
            { speaker: "educator", text: "What did Big Billy say to his brothers?" },
            { speaker: "children", text: "He gave warning not to cross the bridge into the valley. They will go tomorrow together." },
            { speaker: "educator", text: "Do you think Little Billy Gruff Goat listen to his big brother?" },
            { speaker: "children", text: "Yes/No" },
            { speaker: "educator", text: "What do you think Little Billy Goat might be feeling now?" },
            { speaker: "children", text: "Nervous, Scared, Excited" },
            { speaker: "educator", text: "What kind of sound does Billy goats hooves make?" },
            { speaker: "children", text: "Trip-tap, trip-tap" },
            { speaker: "educator", text: "What do you think Troll did to Little Billy Goat?" },
            { speaker: "children", text: "Troll blocked Little Billy Goat and easily caught him by tail." },
            { speaker: "educator", text: "What do you think? Will Little Billy Goat be able to escape Troll?" },
            { speaker: "children", text: "Yes. No, Troll will eat him." },
            { speaker: "educator", text: "Why did Troll get angry?" },
            { speaker: "children", text: "Because Billy goats are crossing the bridge, and their hooves making loud noise." },
            { speaker: "educator", text: "What did Big Billy Gruff do to Troll?" },
            { speaker: "children", text: "Big Billy Goat Gruff scooped Troll onto his horns and threw him up in the air. The river carried him away and never to be seen." },
            { speaker: "educator", text: "What is the moral of story?" },
            { speaker: "children", text: "We have to be clever, brave and strong." }
          ]
        },
        {
          stepNumber: "Step 4",
          title: "Musical Investigation (10 minutes)",
          instructions: [
            "Educator will invite children to look around in the classroom and find out tools they can make sound that they heard during the lesson.",
            "Tools will be available around bridge area.",
            "Children will walk around bridge. Pick suitable tools and investigate what sound they make. They will talk about why they choose those tools and what sounds do they remember from story."
          ]
        },
        {
          stepNumber: "Step 5",
          title: "Reflection (15 minutes)",
          instructions: [
            "Educator will say “We narrate the story using music and sound. Everyone let’s think what we learned, today?”.",
            "Which part of the story was most interesting for you? (When Little Billy Goat crossed the bridge, When the mean Troll came out and caught Little Billy Goat on tail, Trip-Trap, Trip-Trap sound)",
            "Educator will guide children to reflect on the connection between music and storytelling. (How do you know Big Billy Goat was crossing the Bridge, without using words? The sound trip-trap, trip-trap was loud when Big Billy Goat was crossing the Bridge.)",
            "Further, children will reflect on character emotions. (How was Little Billy Goat when he first came to the bridge? Nervous, Excited, Scared)",
            "Educator will direct towards the reflection on collaboration and take notes of children’s ideas for what they can do different next time for storytelling."
          ]
        }
      ]
    },
    bloomsTaxonomy: {
      items: [
        {
          level: "Remember",
          lookListenFor: "Learning facts, knowledge of major ideas and memorizing",
          questionAndResponse: "How many characters are there in this story? Can you name it. (There are 4 characters. Little Billy Goat, Medium Billy Goat, Big Billy goat and big mean Troll."
        },
        {
          level: "Understand",
          lookListenFor: "Interpret, describe, differentiate, and discuss their knowledge of each skill",
          questionAndResponse: "Why do they need to go lush valley meadow? (They run out of food to munch on their mountainside.)"
        },
        {
          level: "Apply",
          lookListenFor: "Consist of two cognitive processes executing and implementation of knowledge",
          questionAndResponse: "Can you show me how Big Billy Goat cross the bridge without using words? (Children will look around and find wooden block make loud sound of goat’s hooves sound trip-trap, trip-trap.)"
        },
        {
          level: "Analyse",
          lookListenFor: "Debating, organizing and attributing",
          questionAndResponse: "Can you show me what kind of sound does Little Billy Goat, Medium Billy Goat and Big Billy Goat make while crossing the bridge? (Children will make soft and quiet sound for Little Billy Goat and then bit louder representing Medium Billy Goat and the Loudest sound for Big Billy Goat."
        },
        {
          level: "Evaluate",
          lookListenFor: "Monitoring, testing, judging, pointing out consistencies and utilizing critical thinking",
          questionAndResponse: "First, the sound was soft and quite but it gets louder, why? (Because Big Billy Goat is strongest and biggest billy goat among his brothers.)"
        },
        {
          level: "Create",
          lookListenFor: "Understand the task, solve problems, devise plan and implement",
          questionAndResponse: "What do you think if Troll want to become friend? (He can be friend, but he cannot eat Billy Goat brothers.)"
        }
      ],
      source: "Eber, P. A., & Parker, T. S. (2007). Assessing student learning: Applying Bloom’s Taxonomy. Human Service Education, 27(1), 45-47.",
      sourceUrl: "https://research.ebsco.com/c/m7hw3i/viewer/pdf/kly5m3kvkj?auth-callid=f603742f-142e-4a07-b5ab-24573ec40da5"
    },
    futurePlanTitle: "Future Plan",
    futurePlanText: "The future planning will be guided by analysis of assessment data. If children show their interest in sound exploration with Australian animals crossing a river or bridge, educator may further develop meaningful learning extension based on it. Hence, this progression will help children by continued development of English and Music learning in authentic and culturally responsive ways.",
    references: [
      {
        citation: "Australian Curriculum Assessment and Reporting Authority [ACARA]. English – Foundation Year. Retrieved on September 5, 2026:",
        url: "https://www.australiancurriculum.edu.au/f-10-curriculum/learning-areas/english/foundation-year?view=quick&detailed-content-descriptions=0&hide-ccp=0&hide-gc=0&load-detailed-content-descriptions=null&side-by-side=1&strands-start-index=0"
      },
      {
        citation: "Australian Curriculum Assessment and Reporting Authority [ACARA]. Music. Support Resource- Examples of Knowledge and Skills. Retrieved on September 5, 2026:",
        url: "https://www.australiancurriculum.edu.au/support-resources/learning-area-resources/music_examples_of_knowledge_and_skills"
      },
      {
        citation: "Australian Government Department of Education [AGDE]. (2022). Belonging, Being and Becoming: The Early Years Learning Framework for Australia (V2.0). Australian Government Department of Education for the Ministerial Council.",
        url: "https://www.acecqa.gov.au/sites/default/files/2023-01/EYLF-2022-V2.0.pdf"
      },
      {
        citation: "Brisbane City Council. (2025). Creek Neighbours Online Program. [Website].",
        url: "https://www.brisbane.qld.gov.au/libraries-venues-and-facilities/venue-and-places/environment-centres/creek-neighbours-online-program?utm_source=chatgpt.com#programone"
      },
      {
        citation: "Dinham, J. (2022). Learning Experience in Music. It’s arts play 2e EB (2nd ed., pp. 245-280). Oxford University Press Australia & New Zealand.",
        url: "https://ebookcentral.proquest.com/lib/vu/reader.action?docID=7018679&ppg=280&c=RVBVQg"
      },
      {
        citation: "Donovan, L., & Pascale, L. (2012). Making musical connections. Integrating the arts across the content areas. Shell Education.",
        url: "https://research.ebsco.com/c/m7hw3i/ebook-viewer/epub/622cbpc4tr/section/navPoint-10"
      },
      {
        citation: "Eber, P. A., & Parker, T. S. (2007). Assessing student learning: Applying Bloom’s Taxonomy. Human Service Education, 27(1), 45-47.",
        url: "https://research.ebsco.com/c/m7hw3i/viewer/pdf/kly5m3kvkj?auth-callid=f603742f-142e-4a07-b5ab-24573ec40da5"
      },
      {
        citation: "Seel, S. (2025, February 1). YourClassical Storytime. ‘The Three Billy Goats Gruff. Your Classical.",
        url: "https://www.yourclassical.org/episode/2025/02/01/yourclassical-storytime-billy-goats-gruff"
      }
    ]
  }
};
